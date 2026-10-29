// KTCT Quiz Application Logic
// State
let currentMode = null; // 1, 2, 3, 4
let currentExamCode = "";
let currentQuestions = [];
let userAnswers = {}; // { questionIndex: selectedOptionIndex }
let flaggedQuestions = {}; // { questionIndex: true/false }
let isSubmitted = false;
let currentQuestionIndex = 0;
let reviewFilter = 'all'; // 'all', 'wrong', 'correct'

// Utility: Shuffle array
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate random exam code
function generateExamCode() {
  const randNum = Math.floor(100 + Math.random() * 900);
  return `KTCT-${randNum}`;
}

// Select 40 questions according to mode
function prepareQuestionsForMode(mode) {
  let pool = [];
  if (mode === 1) {
    pool = QUESTIONS_DATA.filter(q => q.part === 'ch1_2');
    return shuffle(pool).slice(0, 40);
  } else if (mode === 2) {
    pool = QUESTIONS_DATA.filter(q => q.part === 'ch3_4');
    return shuffle(pool).slice(0, 40);
  } else if (mode === 3) {
    pool = QUESTIONS_DATA.filter(q => q.part === 'ch5_6');
    return shuffle(pool).slice(0, 40);
  } else if (mode === 4) {
    const p1 = shuffle(QUESTIONS_DATA.filter(q => q.part === 'ch1_2')).slice(0, 13);
    const p2 = shuffle(QUESTIONS_DATA.filter(q => q.part === 'ch3_4')).slice(0, 14);
    const p3 = shuffle(QUESTIONS_DATA.filter(q => q.part === 'ch5_6')).slice(0, 13);
    return shuffle([...p1, ...p2, ...p3]);
  }
  return [];
}

// Start Quiz
function startQuiz(mode) {
  currentMode = mode;
  userAnswers = {};
  flaggedQuestions = {};
  isSubmitted = false;
  currentQuestionIndex = 0;
  reviewFilter = 'all';

  if (mode === 4) {
    currentExamCode = generateExamCode();
  } else {
    currentExamCode = "";
  }

  currentQuestions = prepareQuestionsForMode(mode);

  // Switch views
  document.getElementById('home-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');

  // KEY REQUIREMENT: In quiz state
  document.body.classList.add('in-quiz');
  const mobileBottomBar = document.getElementById('mobile-bottom-bar');
  if (mobileBottomBar) {
    mobileBottomBar.classList.remove('hidden');
    mobileBottomBar.style.display = 'flex';
  }
  const topNavActions = document.getElementById('top-nav-actions');
  if (topNavActions) {
    topNavActions.classList.add('hidden');
    topNavActions.style.display = 'none';
  }

  updateQuizHeader();
  renderQuestion();
  renderPalette();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Change exam code in Mode 4
function changeExamCode() {
  if (currentMode !== 4) return;
  if (!isSubmitted && Object.keys(userAnswers).length > 0) {
    if (!confirm("Đổi mã đề sẽ tạo một đề thi mới và làm mới các câu trả lời hiện tại. Bạn có chắc chắn muốn đổi không?")) {
      return;
    }
  }
  startQuiz(4);
}

// Update Quiz Screen Header
function updateQuizHeader() {
  const titleEl = document.getElementById('quiz-title');
  const codeBadgeEl = document.getElementById('exam-code-badge');
  const changeCodeBtn = document.getElementById('change-code-btn');

  let title = "";
  switch(currentMode) {
    case 1: title = "Ôn tập Chương 1 & Chương 2"; break;
    case 2: title = "Ôn tập Chương 3 & Chương 4"; break;
    case 3: title = "Ôn tập Chương 5 & Chương 6"; break;
    case 4: title = "Đề thi ngẫu nhiên toàn diện 6 chương"; break;
  }

  titleEl.innerText = title;

  if (currentMode === 4) {
    codeBadgeEl.classList.remove('hidden');
    document.getElementById('code-value').innerText = currentExamCode;
    changeCodeBtn.classList.remove('hidden');
  } else {
    codeBadgeEl.classList.add('hidden');
    changeCodeBtn.classList.add('hidden');
  }

  updateProgress();
}

// Update Answered Progress
function updateProgress() {
  const answeredCount = Object.keys(userAnswers).length;
  const progressText = document.getElementById('quiz-progress-text');
  const progressBar = document.getElementById('quiz-progress-bar');
  
  if (progressText) {
    progressText.innerText = `Đã làm: ${answeredCount} / ${currentQuestions.length} câu`;
  }
  if (progressBar) {
    const pct = (answeredCount / currentQuestions.length) * 100;
    progressBar.style.width = `${pct}%`;
  }

  // Mobile Bottom Bar Quick Info
  const mobileQBtnText = document.getElementById('mobile-palette-btn-text');
  if (mobileQBtnText) {
    mobileQBtnText.innerText = `Câu ${currentQuestionIndex + 1}/${currentQuestions.length} (${answeredCount} đã làm)`;
  }
}

// Render Current Question
function renderQuestion() {
  const container = document.getElementById('question-display-area');
  const q = currentQuestions[currentQuestionIndex];
  if (!q) return;

  const isFlagged = !!flaggedQuestions[currentQuestionIndex];
  const selectedOpt = userAnswers[currentQuestionIndex];

  let chapterName = "";
  switch(q.chapter) {
    case 1: chapterName = "Chương 1: Đối tượng & PP KTCT"; break;
    case 2: chapterName = "Chương 2: Hàng hóa & Thị trường"; break;
    case 3: chapterName = "Chương 3: Giá trị thặng dư"; break;
    case 4: chapterName = "Chương 4: Độc quyền & Cạnh tranh"; break;
    case 5: chapterName = "Chương 5: KTTT định hướng XHCN"; break;
    case 6: chapterName = "Chương 6: CNH, HĐH & Hội nhập"; break;
  }

  const optionLetters = ['A', 'B', 'C', 'D'];

  let html = `
    <div class="bg-white rounded-2xl md:rounded-3xl shadow-xs border border-slate-200/90 p-4 sm:p-6 md:p-8 transition-all">
      <!-- Question Card Header -->
      <div class="flex items-center justify-between gap-2 mb-4 pb-3 sm:mb-6 sm:pb-4 border-b border-slate-100">
        <div class="flex flex-wrap items-center gap-2">
          <span class="inline-flex items-center justify-center bg-indigo-600 text-white font-extrabold text-xs sm:text-sm px-3 py-1 rounded-full shadow-xs">
            Câu ${currentQuestionIndex + 1} / ${currentQuestions.length}
          </span>
          <span class="inline-block bg-slate-100 text-slate-700 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full">
            ${chapterName}
          </span>
        </div>
        <button onclick="toggleFlag(${currentQuestionIndex})" class="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-xl border transition-all ${
          isFlagged 
            ? 'bg-amber-50 text-amber-800 border-amber-300' 
            : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
        }">
          <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 ${isFlagged ? 'fill-amber-500 text-amber-500' : 'text-slate-400'}" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h2V5h12l-2 5 2 5H5"/>
          </svg>
          <span class="hidden sm:inline">${isFlagged ? 'Đã đánh dấu' : 'Đánh dấu câu'}</span>
        </button>
      </div>

      <!-- Question Text -->
      <div class="mb-5 sm:mb-6">
        <h3 class="text-base sm:text-lg font-medium text-slate-900 leading-relaxed sm:leading-relaxed">
          ${q.question}
        </h3>
      </div>

      <!-- Options List -->
      <div class="space-y-2.5 sm:space-y-3">
  `;

  q.options.forEach((opt, idx) => {
    const isSelected = selectedOpt === idx;
    html += `
      <div onclick="selectOption(${idx})" class="group flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all active:scale-[0.99] select-none ${
        isSelected 
          ? 'border-indigo-600 bg-indigo-50/80 shadow-xs' 
          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70'
      }">
        <span class="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
          isSelected 
            ? 'bg-indigo-600 text-white shadow-xs' 
            : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
        }">
          ${optionLetters[idx]}
        </span>
        <span class="pt-0.5 sm:pt-1 text-sm sm:text-base leading-snug sm:leading-relaxed ${isSelected ? 'font-medium text-indigo-950' : 'text-slate-700'}">
          ${opt}
        </span>
      </div>
    `;
  });

  html += `
      </div>

      <!-- Desktop Navigation Buttons -->
      <div class="hidden sm:flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
        <button onclick="prevQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''} class="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Câu trước
        </button>

        <span class="text-xs text-slate-400">Phím tắt: dùng phím mũi tên ← và →</span>

        ${
          currentQuestionIndex < currentQuestions.length - 1
            ? `<button onclick="nextQuestion()" class="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm shadow-xs transition">
                Câu tiếp theo
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>`
            : `<button onclick="confirmSubmit()" class="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition">
                Hoàn thành & Nộp bài
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              </button>`
        }
      </div>
    </div>
  `;

  container.innerHTML = html;
  updateMobileNavButtons();
}

// Update Mobile Bottom Bar buttons
function updateMobileNavButtons() {
  const prevBtn = document.getElementById('mobile-prev-btn');
  const nextBtn = document.getElementById('mobile-next-btn');
  const qBtnText = document.getElementById('mobile-palette-btn-text');

  if (prevBtn) {
    prevBtn.disabled = currentQuestionIndex === 0;
  }

  if (nextBtn) {
    if (currentQuestionIndex === currentQuestions.length - 1) {
      nextBtn.innerHTML = `<span>Nộp</span><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
      nextBtn.className = "flex-1 py-2 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm";
      nextBtn.onclick = confirmSubmit;
    } else {
      nextBtn.innerHTML = `<span>Sau</span><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>`;
      nextBtn.className = "flex-1 py-2 px-3 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm";
      nextBtn.onclick = nextQuestion;
    }
  }

  if (qBtnText) {
    const answeredCount = Object.keys(userAnswers).length;
    qBtnText.innerText = `Câu ${currentQuestionIndex + 1}/${currentQuestions.length} (${answeredCount} đã làm)`;
  }
}

// Option Selected
function selectOption(optIndex) {
  userAnswers[currentQuestionIndex] = optIndex;
  renderQuestion();
  renderPalette();
  updateProgress();
}

// Toggle Flag
function toggleFlag(index) {
  flaggedQuestions[index] = !flaggedQuestions[index];
  renderQuestion();
  renderPalette();
}

// Navigation
function nextQuestion() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
    renderPalette();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
    renderPalette();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function jumpToQuestion(index) {
  currentQuestionIndex = index;
  renderQuestion();
  renderPalette();
  closeMobilePalette();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Palette Drawer control
function openMobilePalette() {
  const drawer = document.getElementById('mobile-palette-drawer');
  if (drawer) {
    drawer.classList.remove('hidden');
  }
}

function closeMobilePalette() {
  const drawer = document.getElementById('mobile-palette-drawer');
  if (drawer) {
    drawer.classList.add('hidden');
  }
}

// Render Palette
function renderPalette() {
  const desktopContainer = document.getElementById('palette-container');
  const mobileContainer = document.getElementById('mobile-palette-container');

  const html = buildPaletteGridHtml();

  if (desktopContainer) desktopContainer.innerHTML = html;
  if (mobileContainer) mobileContainer.innerHTML = html;
}

function buildPaletteGridHtml() {
  let html = `<div class="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-5 lg:grid-cols-8 gap-2">`;

  currentQuestions.forEach((q, idx) => {
    const isAnswered = userAnswers[idx] !== undefined;
    const isFlagged = !!flaggedQuestions[idx];
    const isCurrent = currentQuestionIndex === idx;

    let baseClass = "w-full aspect-square rounded-xl flex items-center justify-center text-xs font-semibold relative transition-all cursor-pointer ";

    if (isCurrent) {
      baseClass += "ring-2 ring-indigo-600 ring-offset-2 z-10 ";
    }

    if (isAnswered) {
      baseClass += "bg-indigo-600 text-white shadow-xs hover:bg-indigo-700 ";
    } else {
      baseClass += "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 ";
    }

    html += `
      <button onclick="jumpToQuestion(${idx})" class="${baseClass}">
        ${idx + 1}
        ${isFlagged ? `<span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full ring-2 ring-white"></span>` : ''}
      </button>
    `;
  });

  html += `</div>`;
  return html;
}

// Confirm Submit Modal
function confirmSubmit() {
  const answeredCount = Object.keys(userAnswers).length;
  const total = currentQuestions.length;
  const unanswered = total - answeredCount;

  const modal = document.getElementById('submit-modal');
  const modalText = document.getElementById('submit-modal-text');

  if (unanswered > 0) {
    modalText.innerHTML = `Bạn mới chỉ hoàn thành <strong>${answeredCount}/${total}</strong> câu hỏi.<br><span class="text-amber-600 font-semibold">Còn ${unanswered} câu chưa trả lời.</span><br>Bạn có chắc chắn muốn nộp bài ngay bây giờ?`;
  } else {
    modalText.innerHTML = `Bạn đã trả lời đầy đủ <strong>${total}/${total}</strong> câu hỏi.<br>Bạn có muốn nộp bài để xem điểm số và lời giải chi tiết?`;
  }

  modal.classList.remove('hidden');
}

function cancelSubmit() {
  document.getElementById('submit-modal').classList.add('hidden');
}

// Perform Submit & Grade
function performSubmit() {
  document.getElementById('submit-modal').classList.add('hidden');
  closeMobilePalette();
  isSubmitted = true;

  // Exit quiz state on submit
  document.body.classList.remove('in-quiz');
  const mobileBottomBar = document.getElementById('mobile-bottom-bar');
  if (mobileBottomBar) {
    mobileBottomBar.classList.add('hidden');
    mobileBottomBar.style.display = 'none';
  }
  const topNavActions = document.getElementById('top-nav-actions');
  if (topNavActions) {
    topNavActions.classList.remove('hidden');
    topNavActions.style.display = 'flex';
  }

  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;

  currentQuestions.forEach((q, idx) => {
    const ans = userAnswers[idx];
    if (ans === undefined) {
      unattemptedCount++;
    } else if (ans === q.correct) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const total = currentQuestions.length;
  const score = ((correctCount / total) * 10).toFixed(1);
  const percentage = Math.round((correctCount / total) * 100);

  // Switch to result screen
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');

  // Fill in statistics
  document.getElementById('res-score').innerText = score;
  document.getElementById('res-correct').innerText = correctCount;
  document.getElementById('res-wrong').innerText = wrongCount;
  document.getElementById('res-unanswered').innerText = unattemptedCount;
  document.getElementById('res-pct').innerText = `${percentage}%`;

  let title = "";
  switch(currentMode) {
    case 1: title = "Chương 1 & 2"; break;
    case 2: title = "Chương 3 & 4"; break;
    case 3: title = "Chương 5 & 6"; break;
    case 4: title = `Đề ngẫu nhiên 6 chương (${currentExamCode})`; break;
  }
  document.getElementById('res-exam-name').innerText = title;

  // KEY REQUIREMENT: In Mode 1, 2, 3 -> HIDE the "Đổi mã đề" button!
  const resChangeCodeBtn = document.getElementById('res-change-code-btn');
  if (resChangeCodeBtn) {
    if (currentMode === 4) {
      resChangeCodeBtn.classList.remove('hidden');
    } else {
      resChangeCodeBtn.classList.add('hidden');
    }
  }

  const badgeEl = document.getElementById('res-badge');
  const msgEl = document.getElementById('res-message');

  if (score >= 9.0) {
    badgeEl.className = "inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-100 text-emerald-800";
    badgeEl.innerText = "Xuất sắc 🎉";
    msgEl.innerText = "Kiến thức lý luận của bạn rất vững vàng! Bạn đã sẵn sàng đạt điểm tối đa trong kỳ thi.";
  } else if (score >= 8.0) {
    badgeEl.className = "inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-blue-100 text-blue-800";
    badgeEl.innerText = "Giỏi 🌟";
    msgEl.innerText = "Kết quả rất tốt! Hãy xem lại các câu giải thích bên dưới để hoàn thiện nốt các phần còn nhầm lẫn.";
  } else if (score >= 6.5) {
    badgeEl.className = "inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-indigo-100 text-indigo-800";
    badgeEl.innerText = "Khá 👍";
    msgEl.innerText = "Bạn đã nắm được nội dung cơ bản. Cần chú ý thêm các công thức tính toán và phân biệt các cặp phạm trù.";
  } else if (score >= 5.0) {
    badgeEl.className = "inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-100 text-amber-800";
    badgeEl.innerText = "Đạt yêu cầu ⚠️";
    msgEl.innerText = "Điểm số ở mức an toàn. Hãy mở phần 'Tài liệu ôn luyện' để ôn lại các điểm cốt lõi và làm lại bài nhé!";
  } else {
    badgeEl.className = "inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-rose-100 text-rose-800";
    badgeEl.innerText = "Cần cố gắng 🚨";
    msgEl.innerText = "Chưa đạt yêu cầu! Hãy đọc lại tóm tắt 6 chương và làm lại bài thi để củng cố kiến thức.";
  }

  renderReviewList();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Review List with Explanations
function setReviewFilter(filter) {
  reviewFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-xs');
    btn.classList.add('bg-slate-100', 'text-slate-700');
  });
  const activeBtn = document.getElementById(`filter-btn-${filter}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-slate-100', 'text-slate-700');
    activeBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-xs');
  }
  renderReviewList();
}

function renderReviewList() {
  const container = document.getElementById('review-list-container');
  const optionLetters = ['A', 'B', 'C', 'D'];

  let html = "";

  currentQuestions.forEach((q, idx) => {
    const userChoice = userAnswers[idx];
    const isCorrect = userChoice === q.correct;
    const isUnanswered = userChoice === undefined;

    if (reviewFilter === 'wrong' && (isCorrect || isUnanswered)) return;
    if (reviewFilter === 'correct' && !isCorrect) return;

    let statusBadge = "";
    let borderClass = "";

    if (isCorrect) {
      statusBadge = `<span class="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Đúng</span>`;
      borderClass = "border-emerald-200 bg-emerald-50/20";
    } else if (isUnanswered) {
      statusBadge = `<span class="inline-flex items-center gap-1 bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-0.5 rounded-full"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg> Chưa làm</span>`;
      borderClass = "border-slate-200";
    } else {
      statusBadge = `<span class="inline-flex items-center gap-1 bg-rose-100 text-rose-800 text-xs font-bold px-2.5 py-0.5 rounded-full"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg> Sai</span>`;
      borderClass = "border-rose-200 bg-rose-50/20";
    }

    html += `
      <div class="rounded-2xl border p-4 sm:p-6 bg-white shadow-xs transition ${borderClass}">
        <div class="flex items-center justify-between gap-3 mb-3 pb-2.5 sm:mb-4 sm:pb-3 border-b border-slate-100">
          <div class="flex items-center gap-2">
            <span class="font-extrabold text-xs sm:text-sm text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">Câu ${idx + 1}</span>
            <span class="text-xs text-slate-500 font-medium">Chương ${q.chapter}</span>
          </div>
          <div>${statusBadge}</div>
        </div>

        <h4 class="text-sm sm:text-base font-semibold text-slate-900 mb-3 sm:mb-4 leading-relaxed">
          ${q.question}
        </h4>

        <div class="space-y-2 mb-3 sm:mb-4">
    `;

    q.options.forEach((opt, optIdx) => {
      const isThisCorrect = optIdx === q.correct;
      const isThisUserChoice = optIdx === userChoice;

      let optStyle = "p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 sm:gap-3 ";

      if (isThisCorrect) {
        optStyle += "bg-emerald-50 border-emerald-400 text-emerald-950 font-medium";
      } else if (isThisUserChoice && !isThisCorrect) {
        optStyle += "bg-rose-50 border-rose-400 text-rose-950 font-medium";
      } else {
        optStyle += "bg-slate-50/50 border-slate-200 text-slate-600";
      }

      html += `
        <div class="${optStyle}">
          <span class="w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center font-bold text-[11px] sm:text-xs flex-shrink-0 ${
            isThisCorrect ? 'bg-emerald-600 text-white' : (isThisUserChoice ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-600')
          }">
            ${optionLetters[optIdx]}
          </span>
          <span class="pt-0.5 leading-snug flex-1">${opt}</span>
          ${isThisCorrect ? '<span class="ml-auto text-[11px] sm:text-xs font-bold text-emerald-600 whitespace-nowrap">✓ Đúng</span>' : ''}
          ${isThisUserChoice && !isThisCorrect ? '<span class="ml-auto text-[11px] sm:text-xs font-bold text-rose-600 whitespace-nowrap">✗ Chọn</span>' : ''}
        </div>
      `;
    });

    html += `
        </div>

        <!-- Explanation box -->
        <div class="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-amber-950 leading-relaxed">
          <div class="flex items-center gap-1.5 font-bold text-amber-900 mb-1">
            <svg class="w-4 h-4 text-amber-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Giải thích chi tiết & Trích dẫn lý luận:
          </div>
          <p class="leading-relaxed">${q.explanation}</p>
        </div>
      </div>
    `;
  });

  if (html === "") {
    html = `<div class="p-8 text-center text-slate-500 font-medium bg-white rounded-2xl border border-slate-200">Không có câu hỏi nào thỏa mãn bộ lọc hiện tại.</div>`;
  }

  container.innerHTML = html;
}

// Retake Current Exam
function retakeExam() {
  userAnswers = {};
  flaggedQuestions = {};
  isSubmitted = false;
  currentQuestionIndex = 0;

  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');

  // Re-enter quiz state
  document.body.classList.add('in-quiz');
  const mobileBottomBar = document.getElementById('mobile-bottom-bar');
  if (mobileBottomBar) {
    mobileBottomBar.classList.remove('hidden');
    mobileBottomBar.style.display = 'flex';
  }
  const topNavActions = document.getElementById('top-nav-actions');
  if (topNavActions) {
    topNavActions.classList.add('hidden');
    topNavActions.style.display = 'none';
  }

  updateQuizHeader();
  renderQuestion();
  renderPalette();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Return to Home
function goHome() {
  if (!isSubmitted && currentMode !== null) {
    if (!confirm("Bạn đang làm bài thi. Bạn có chắc chắn muốn thoát về trang chủ không?")) {
      return;
    }
  }

  currentMode = null;
  isSubmitted = false;
  userAnswers = {};
  flaggedQuestions = {};

  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('home-screen').classList.remove('hidden');

  // Exit quiz state
  document.body.classList.remove('in-quiz');
  const mobileBottomBar = document.getElementById('mobile-bottom-bar');
  if (mobileBottomBar) {
    mobileBottomBar.classList.add('hidden');
    mobileBottomBar.style.display = 'none';
  }
  const topNavActions = document.getElementById('top-nav-actions');
  if (topNavActions) {
    topNavActions.classList.remove('hidden');
    topNavActions.style.display = 'flex';
  }

  closeMobilePalette();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Study Guide Modal Functions ---
let activeSummaryTab = 'ch1';

function openSummaryModal() {
  document.getElementById('summary-modal').classList.remove('hidden');
  renderSummaryContent(activeSummaryTab);
}

function closeSummaryModal() {
  document.getElementById('summary-modal').classList.add('hidden');
}

function switchSummaryTab(tabKey) {
  activeSummaryTab = tabKey;
  document.querySelectorAll('.summary-tab-btn').forEach(btn => {
    btn.classList.remove('border-indigo-600', 'text-indigo-600', 'bg-indigo-50/60');
    btn.classList.add('border-transparent', 'text-slate-600', 'hover:text-slate-900');
  });

  const activeBtn = document.getElementById(`sum-tab-${tabKey}`);
  if (activeBtn) {
    activeBtn.classList.remove('border-transparent', 'text-slate-600', 'hover:text-slate-900');
    activeBtn.classList.add('border-indigo-600', 'text-indigo-600', 'bg-indigo-50/60');
  }

  renderSummaryContent(tabKey);
}

function renderSummaryContent(tabKey) {
  const container = document.getElementById('summary-content-area');
  if (!container) return;

  if (tabKey === 'formulas') {
    let html = `
      <div class="space-y-4">
        <h3 class="text-sm sm:text-base font-bold text-slate-900 border-b pb-2">Bảng tổng hợp công thức toán KTCT thường gặp</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
    `;
    SUMMARY_DATA.formulas.forEach(item => {
      html += `
        <div class="p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50">
          <div class="font-bold text-slate-900 text-xs sm:text-sm mb-1">${item.name}</div>
          <div class="text-indigo-600 font-mono font-bold text-xs sm:text-sm bg-white p-2 rounded-lg border border-indigo-100 mb-1.5 break-words">${item.formula}</div>
          <div class="text-[11px] sm:text-xs text-slate-500 italic">${item.note}</div>
        </div>
      `;
    });
    html += `</div></div>`;
    container.innerHTML = html;
    return;
  }

  const data = SUMMARY_DATA[tabKey];
  if (!data) return;

  let html = `
    <div class="space-y-4 sm:space-y-6">
      <h3 class="text-base sm:text-lg font-bold text-indigo-900 border-b pb-2.5">${data.title}</h3>
  `;

  data.sections.forEach(sec => {
    const lines = sec.content.split('\n');
    let parsedContent = lines.map(line => `<p class="mb-1">${line}</p>`).join('');
    html += `
      <div class="bg-slate-50/80 p-3.5 sm:p-5 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-900 text-xs sm:text-sm md:text-base mb-2 text-indigo-700">${sec.heading}</h4>
        <div class="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1">
          ${parsedContent}
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// Window load init
window.addEventListener('DOMContentLoaded', () => {
  // Ensure correct initial state on home screen
  document.body.classList.remove('in-quiz');
  const mobileBottomBar = document.getElementById('mobile-bottom-bar');
  if (mobileBottomBar) {
    mobileBottomBar.classList.add('hidden');
    mobileBottomBar.style.display = 'none';
  }
  const topNavActions = document.getElementById('top-nav-actions');
  if (topNavActions) {
    topNavActions.classList.remove('hidden');
    topNavActions.style.display = 'flex';
  }

  window.addEventListener('keydown', (e) => {
    if (document.getElementById('quiz-screen').classList.contains('hidden')) return;
    if (e.key === 'ArrowRight') {
      nextQuestion();
    } else if (e.key === 'ArrowLeft') {
      prevQuestion();
    }
  });
});
