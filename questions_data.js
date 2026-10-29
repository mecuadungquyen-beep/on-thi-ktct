const QUESTIONS_DATA = [
  {
    "id": 1,
    "chapter": 1,
    "part": "ch1_2",
    "question": "Thuật ngữ 'Kinh tế chính trị' lần đầu tiên xuất hiện trong lịch sử vào năm nào và trong tác phẩm của ai?",
    "options": [
      "Năm 1615, trong tác phẩm 'Chuyên luận về kinh tế chính trị' của Antoine de Montchrestien",
      "Năm 1776, trong tác phẩm 'Sự giàu có của các quốc gia' của Adam Smith",
      "Năm 1867, trong tác phẩm 'Tư bản' của Karl Marx",
      "Năm 1675, trong tác phẩm của William Petty"
    ],
    "correct": 0,
    "explanation": "Thuật ngữ 'Kinh tế chính trị' xuất hiện lần đầu tiên vào năm 1615 trong tác phẩm 'Chuyên luận về kinh tế chính trị' (Traité d'économie politique) của nhà kinh tế học người Pháp Antoine de Montchrestien thuộc phái Trọng thương."
  },
  {
    "id": 2,
    "chapter": 1,
    "part": "ch1_2",
    "question": "Trường phái nào được coi là hệ thống lý luận kinh tế chính trị đầu tiên nghiên cứu về phương thức sản xuất tư bản chủ nghĩa?",
    "options": [
      "Kinh tế chính trị tư sản cổ điển Anh",
      "Chủ nghĩa Trọng thương",
      "Chủ nghĩa Trọng nông",
      "Kinh tế chính trị Mác - Lênin"
    ],
    "correct": 1,
    "explanation": "Chủ nghĩa Trọng thương (từ thế kỷ XV đến cuối thế kỷ XVII) là trường phái đầu tiên nghiên cứu có hệ thống về kinh tế TBCN, tập trung vào lĩnh vực lưu thông và ngoại thương."
  },
  {
    "id": 3,
    "chapter": 1,
    "part": "ch1_2",
    "question": "Hạn chế lớn nhất trong phương pháp luận của chủ nghĩa Trọng thương là gì?",
    "options": [
      "Tuyệt đối hóa vai trò của sản xuất nông nghiệp",
      "Chỉ nghiên cứu lĩnh vực lưu thông, coi thương nghiệp là nguồn gốc duy nhất sinh ra của cải và lợi nhuận",
      "Chưa nhận thấy vai trò của máy móc và năng lượng hơi nước",
      "Đề cao quá mức quy luật giá trị"
    ],
    "correct": 1,
    "explanation": "Chủ nghĩa Trọng thương chỉ dừng lại ở bề mặt lưu thông trao đổi, coi tiền tệ (vàng, bạc) là của cải duy nhất và thương nghiệp (đặc biệt là ngoại thương) là nguồn sinh ra lợi nhuận do mua rẻ bán đắt."
  },
  {
    "id": 4,
    "chapter": 1,
    "part": "ch1_2",
    "question": "Trường phái kinh tế nào đã chuyển trọng tâm nghiên cứu từ lưu thông sang sản xuất lần đầu tiên?",
    "options": [
      "Chủ nghĩa Trọng thương",
      "Chủ nghĩa Trọng nông",
      "Kinh tế chính trị cổ điển Anh",
      "Chủ nghĩa xã hội không tưởng"
    ],
    "correct": 1,
    "explanation": "Chủ nghĩa Trọng nông (nửa sau TK XVII - nửa đầu XVIII ở Pháp, đại diện tiêu biểu là F. Quesnay) có công lao lớn khi lần đầu tiên chuyển trọng tâm nghiên cứu từ lưu thông sang lĩnh vực sản xuất (dù chỉ giới hạn ở nông nghiệp)."
  },
  {
    "id": 5,
    "chapter": 1,
    "part": "ch1_2",
    "question": "Ai là người sáng lập ra trường phái Kinh tế chính trị tư sản cổ điển Anh?",
    "options": [
      "Adam Smith",
      "David Ricardo",
      "William Petty",
      "Karl Marx"
    ],
    "correct": 2,
    "explanation": "William Petty là người đặt nền móng đầu tiên cho KTCT cổ điển Anh. Sau đó, Adam Smith hoàn chỉnh hệ thống và David Ricardo phát triển lên đỉnh cao."
  },
  {
    "id": 6,
    "chapter": 1,
    "part": "ch1_2",
    "question": "Đối tượng nghiên cứu của Kinh tế chính trị Mác - Lênin là gì?",
    "options": [
      "Quá trình kỹ thuật - công nghệ của sản xuất vật chất",
      "Các quan hệ xã hội của sản xuất và trao đổi trong mối liên hệ biện chứng với lực lượng sản xuất và kiến trúc thượng tầng",
      "Hành vi kinh tế vi mô nhằm tối đa hóa lợi nhuận của doanh nghiệp",
      "Sự biến động cung - cầu của thị trường chứng khoán"
    ],
    "correct": 1,
    "explanation": "Theo Slide Chương 1: Đối tượng nghiên cứu của KTCT Mác - Lênin là các quan hệ xã hội của sản xuất và trao đổi (quan hệ sở hữu, tổ chức quản lý, phân phối), đặt trong mối liên hệ biện chứng với LLSX và kiến trúc thượng tầng."
  },
  {
    "id": 7,
    "chapter": 1,
    "part": "ch1_2",
    "question": "Mục đích nghiên cứu cao nhất của Kinh tế chính trị Mác - Lênin là gì?",
    "options": [
      "Dự báo biến động giá cả thị trường trong ngắn hạn",
      "Tìm ra các giải pháp làm giàu nhanh chóng cho các tập đoàn",
      "Phát hiện ra các quy luật kinh tế chi phối sự vận động của sản xuất và trao đổi",
      "Thiết lập các mô hình cân bằng toán học tĩnh"
    ],
    "correct": 2,
    "explanation": "Mục đích cao nhất của KTCT Mác - Lênin là phát hiện ra các quy luật kinh tế khách quan chi phối quan hệ sản xuất và trao đổi, làm cơ sở khoa học để con người nhận thức và vận dụng vào thực tiễn."
  },
  {
    "id": 8,
    "chapter": 1,
    "part": "ch1_2",
    "question": "Điểm khác biệt căn bản giữa 'Quy luật kinh tế' và 'Chính sách kinh tế' là gì?",
    "options": [
      "Quy luật kinh tế mang tính chủ quan, chính sách kinh tế mang tính khách quan",
      "Quy luật kinh tế tồn tại khách quan không phụ thuộc ý muốn con người; chính sách kinh tế là sản phẩm chủ quan của nhà nước ban hành",
      "Quy luật kinh tế do quốc hội ban hành, chính sách kinh tế do thị trường tự điều tiết",
      "Quy luật kinh tế thay đổi hàng năm, chính sách kinh tế tồn tại vĩnh viễn"
    ],
    "correct": 1,
    "explanation": "Quy luật kinh tế tồn tại khách quan, không ai tùy tiện xóa bỏ được. Chính sách kinh tế là sản phẩm chủ quan của nhà nước đặt ra trên cơ sở nhận thức và vận dụng quy luật kinh tế."
  },
  {
    "id": 9,
    "chapter": 1,
    "part": "ch1_2",
    "question": "Phương pháp nghiên cứu chủ yếu và đặc thù nhất của Kinh tế chính trị Mác - Lênin là gì?",
    "options": [
      "Phương pháp điều tra xã hội học",
      "Phương pháp thực nghiệm trong phòng thí nghiệm",
      "Phương pháp trừu tượng hóa khoa học",
      "Phương pháp toán học và thống kê thuần túy"
    ],
    "correct": 2,
    "explanation": "Phương pháp trừu tượng hóa khoa học là phương pháp chủ yếu của KTCT: gạt bỏ những hiện tượng bề ngoài, ngẫu nhiên, tạm thời để đi sâu nhận thức những yếu tố bản chất, điển hình, ổn định và lặp đi lặp lại."
  },
  {
    "id": 10,
    "chapter": 1,
    "part": "ch1_2",
    "question": "Kinh tế chính trị Mác - Lênin bao gồm những chức năng cơ bản nào?",
    "options": [
      "Nhận thức và Thực tiễn",
      "Nhận thức, Thực tiễn và Tư tưởng",
      "Nhận thức, Thực tiễn, Tư tưởng và Phương pháp luận",
      "Nhận thức, Thực tiễn, Giáo dục và Phê phán"
    ],
    "correct": 2,
    "explanation": "KTCT Mác - Lênin có 4 chức năng cơ bản: (1) Nhận thức, (2) Thực tiễn, (3) Tư tưởng, (4) Phương pháp luận (làm cơ sở lý luận cho các môn kinh tế chuyên ngành)."
  },
  {
    "id": 11,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Sản xuất hàng hóa ra đời và tồn tại dựa trên hai điều kiện nào?",
    "options": [
      "Năng suất lao động cao và thị trường tự do",
      "Phân công lao động xã hội và sự tách biệt tương đối về mặt kinh tế giữa các chủ thể sản xuất",
      "Sự xuất hiện của tiền tệ và máy móc hiện đại",
      "Chế độ tư bản chủ nghĩa và sự phát triển của thương mại quốc tế"
    ],
    "correct": 1,
    "explanation": "Sản xuất hàng hóa đòi hỏi 2 điều kiện bắt buộc: (1) Phân công lao động xã hội (điều kiện cần) và (2) Sự tách biệt tương đối về mặt kinh tế giữa các chủ thể sản xuất do các hình thức sở hữu khác nhau về TLSX quy định (điều kiện đủ)."
  },
  {
    "id": 12,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Hàng hóa là gì theo định nghĩa của Kinh tế chính trị Mác - Lênin?",
    "options": [
      "Mọi sản phẩm do tự nhiên ban tặng có ích cho con người",
      "Sản phẩm của lao động, có thể thỏa mãn nhu cầu nào đó của con người thông qua trao đổi, mua bán",
      "Mọi vật phẩm có giá trị cao trên thị trường",
      "Mọi sản phẩm được sản xuất ra phục vụ cho việc tự cung tự cấp"
    ],
    "correct": 1,
    "explanation": "Hàng hóa là sản phẩm của lao động, có công dụng thỏa mãn một nhu cầu nào đó của con người và phải đi vào tiêu dùng thông qua trao đổi, mua bán."
  },
  {
    "id": 13,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Hai thuộc tính của hàng hóa là gì?",
    "options": [
      "Giá trị cá biệt và Giá trị xã hội",
      "Giá trị sử dụng và Giá trị",
      "Giá cả và Giá trị trao đổi",
      "Chi phí sản xuất và Lợi nhuận"
    ],
    "correct": 1,
    "explanation": "Hàng hóa có hai thuộc tính cơ bản là Giá trị sử dụng (công dụng thỏa mãn nhu cầu) và Giá trị (lao động xã hội của người sản xuất kết tinh trong hàng hóa)."
  },
  {
    "id": 14,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Thuộc tính nào của hàng hóa do thuộc tính tự nhiên của vật quy định và là một phạm trù vĩnh viễn?",
    "options": [
      "Giá trị",
      "Giá trị trao đổi",
      "Giá trị sử dụng",
      "Giá cả"
    ],
    "correct": 2,
    "explanation": "Giá trị sử dụng do thuộc tính tự nhiên của thực thể vật phẩm quy định, chỉ phục vụ thỏa mãn nhu cầu con người nên nó là một phạm trù vĩnh viễn tồn tại trong mọi xã hội."
  },
  {
    "id": 15,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Giá trị của hàng hóa là gì?",
    "options": [
      "Mức độ quý hiếm của vật phẩm trên thị trường",
      "Lao động xã hội của người sản xuất kết tinh trong hàng hóa",
      "Công dụng của vật phẩm đối với người sử dụng",
      "Số tiền mà người mua đồng ý trả cho người bán"
    ],
    "correct": 1,
    "explanation": "Giá trị của hàng hóa là lao động xã hội của người sản xuất hàng hóa kết tinh trong hàng hóa đó. Giá trị biểu hiện ra bên ngoài thông qua giá trị trao đổi."
  },
  {
    "id": 16,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Mâu thuẫn giữa hai thuộc tính của hàng hóa biểu hiện ở nội dung nào?",
    "options": [
      "Hàng hóa có giá trị cao thì không có giá trị sử dụng",
      "Người sản xuất tạo ra GTSD nhưng cần Giá trị; người mua cần GTSD nhưng phải trả Giá trị; Giá trị thực hiện trước trên thị trường, GTSD thực hiện sau trong tiêu dùng",
      "Hàng hóa không thể vừa được mua vừa được bán",
      "Giá cả hàng hóa luôn bằng chi phí sản xuất"
    ],
    "correct": 1,
    "explanation": "Mâu thuẫn thể hiện ở: (1) Mục đích đối lập giữa người bán (cần giá trị) và người mua (cần GTSD); (2) Tách rời không gian và thời gian: Giá trị thực hiện trước trong lưu thông, nếu không bán được thì hàng hóa bị ứ đọng, khủng hoảng thừa."
  },
  {
    "id": 17,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Phát kiến vĩ đại nào của C. Mác được coi là chìa khóa giải quyết toàn bộ các mâu thuẫn trong lý luận giá trị lao động?",
    "options": [
      "Phát hiện ra quy luật cung cầu",
      "Phát hiện ra tính hai mặt của lao động sản xuất hàng hóa (lao động cụ thể và lao động trừu tượng)",
      "Phát hiện ra 5 chức năng của tiền tệ",
      "Phát hiện ra quy luật cạnh tranh"
    ],
    "correct": 1,
    "explanation": "C. Mác là người đầu tiên phát hiện ra tính hai mặt của lao động sản xuất hàng hóa: Lao động cụ thể tạo ra Giá trị sử dụng; Lao động trừu tượng tạo ra Giá trị hàng hóa."
  },
  {
    "id": 18,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Lao động cụ thể có đặc điểm nào dưới đây?",
    "options": [
      "Tạo ra giá trị hàng hóa và là phạm trù lịch sử",
      "Là sự tiêu phí sức lao động nói chung của con người",
      "Là lao động dưới một hình thức nghề nghiệp cụ thể, tạo ra giá trị sử dụng và là phạm trù vĩnh viễn",
      "Chỉ xuất hiện trong chủ nghĩa tư bản"
    ],
    "correct": 2,
    "explanation": "Lao động cụ thể là lao động có mục đích, đối tượng, phương pháp và kết quả riêng; nó tạo ra giá trị sử dụng của hàng hóa và là phạm trù vĩnh viễn."
  },
  {
    "id": 19,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Lao động trừu tượng là gì?",
    "options": [
      "Lao động của các nhà nghiên cứu lý luận",
      "Sự tiêu hao sức lao động nói chung của con người (cơ bắp, thần kinh, trí óc) không kể hình thức cụ thể; tạo ra giá trị hàng hóa",
      "Lao động chưa tạo ra được sản phẩm thực tế",
      "Lao động trong trí tưởng tượng của con người"
    ],
    "correct": 1,
    "explanation": "Lao động trừu tượng là sự tiêu phí sức lực nói chung của con người khi đã gạt bỏ hình thức cụ thể; nó tạo ra giá trị hàng hóa và là một phạm trù lịch sử."
  },
  {
    "id": 20,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Tính hai mặt của lao động sản xuất hàng hóa phản ánh mâu thuẫn cơ bản nào của sản xuất hàng hóa giản đơn?",
    "options": [
      "Mâu thuẫn giữa lao động chân tay và lao động trí óc",
      "Mâu thuẫn giữa Lao động tư nhân và Lao động xã hội",
      "Mâu thuẫn giữa tư bản và lao động làm thuê",
      "Mâu thuẫn giữa nông nghiệp và công nghiệp"
    ],
    "correct": 1,
    "explanation": "Lao động cụ thể biểu hiện thành lao động tư nhân (tự do sản xuất cái mình muốn), còn lao động trừu tượng là một bộ phận của lao động xã hội $\\rightarrow$ phát sinh mâu thuẫn cơ bản giữa Lao động tư nhân và Lao động xã hội."
  },
  {
    "id": 21,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Thước đo lượng giá trị của hàng hóa được xác định bằng gì?",
    "options": [
      "Thời gian lao động cá biệt của doanh nghiệp tiên tiến nhất",
      "Thời gian lao động xã hội cần thiết",
      "Trọng lượng và kích thước vật lý của sản phẩm",
      "Số lượng tiền giấy mà người bán định giá"
    ],
    "correct": 1,
    "explanation": "Lượng giá trị hàng hóa được đo bằng lượng thời gian lao động xã hội cần thiết để sản xuất ra hàng hóa đó trong điều kiện sản xuất bình thường của xã hội."
  },
  {
    "id": 22,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Thời gian lao động xã hội cần thiết thường sát hợp với thời gian lao động cá biệt của ai?",
    "options": [
      "Người sản xuất có năng suất lao động cao nhất",
      "Người sản xuất có năng suất lao động thấp nhất",
      "Người sản xuất cung cấp đại bộ phận lượng hàng hóa đó trên thị trường",
      "Người sản xuất ở các doanh nghiệp có vốn đầu tư nước ngoài"
    ],
    "correct": 2,
    "explanation": "Thời gian LĐXH cần thiết trên thực tế thường sát hợp với thời gian lao động cá biệt của nhóm người sản xuất cung ứng đại bộ phận số lượng hàng hóa đó trên thị trường."
  },
  {
    "id": 23,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Khi năng suất lao động tăng lên thì lượng giá trị trong một đơn vị sản phẩm và tổng giá trị tạo ra trong cùng khoảng thời gian thay đổi như thế nào?",
    "options": [
      "Lượng giá trị 1 sản phẩm tăng, tổng giá trị tăng",
      "Lượng giá trị 1 sản phẩm giảm, tổng giá trị không đổi",
      "Lượng giá trị 1 sản phẩm không đổi, tổng giá trị tăng",
      "Lượng giá trị 1 sản phẩm giảm, tổng giá trị giảm"
    ],
    "correct": 1,
    "explanation": "Năng suất lao động tỷ lệ nghịch với lượng giá trị trong 1 đơn vị sản phẩm (sản phẩm tăng, thời gian làm ra 1 SP giảm $\\rightarrow$ giá trị 1 SP giảm). Tổng giá trị tạo ra trong cùng thời gian là KHÔNG ĐỔI."
  },
  {
    "id": 24,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Khi cường độ lao động tăng lên thì lượng giá trị của một đơn vị sản phẩm và tổng giá trị hàng hóa tạo ra trong một ngày thay đổi thế nào?",
    "options": [
      "Lượng giá trị 1 sản phẩm giảm, tổng giá trị không đổi",
      "Lượng giá trị 1 sản phẩm không đổi, tổng giá trị tăng tương ứng",
      "Cả hai đại lượng đều tăng gấp đôi",
      "Lượng giá trị 1 sản phẩm tăng, tổng giá trị không đổi"
    ],
    "correct": 1,
    "explanation": "Tăng cường độ lao động làm tăng mức hao phí sức lực trong cùng thời gian $\\rightarrow$ sản lượng tăng lên, tổng giá trị tăng tương ứng, nhưng hao phí lao động để sản xuất 1 đơn vị sản phẩm KHÔNG ĐỔI."
  },
  {
    "id": 25,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Quan hệ giữa lao động giản đơn và lao động phức tạp trong việc tạo ra giá trị được xác định như thế nào?",
    "options": [
      "Lao động giản đơn tạo ra nhiều giá trị hơn lao động phức tạp",
      "Trong cùng một thời gian, lao động phức tạp tạo ra lượng giá trị lớn hơn nhiều lần so với lao động giản đơn",
      "Hai loại lao động tạo ra lượng giá trị hoàn toàn bằng nhau",
      "Lao động phức tạp không tạo ra giá trị mà chỉ bảo tồn giá trị"
    ],
    "correct": 1,
    "explanation": "Lao động phức tạp là lao động đòi hỏi đào tạo, huấn luyện. C. Mác coi 'lao động phức tạp là lao động giản đơn được nhân bội lên', tạo ra lượng giá trị lớn hơn nhiều so với lao động giản đơn."
  },
  {
    "id": 26,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Lịch sử phát triển của các hình thái giá trị trải qua 4 giai đoạn theo thứ tự nào sau đây?",
    "options": [
      "Giản đơn $\\rightarrow$ Chung $\\rightarrow$ Mở rộng $\\rightarrow$ Tiền tệ",
      "Giản đơn $\\rightarrow$ Mở rộng $\\rightarrow$ Chung $\\rightarrow$ Tiền tệ",
      "Chung $\\rightarrow$ Giản đơn $\\rightarrow$ Mở rộng $\\rightarrow$ Tiền tệ",
      "Mở rộng $\\rightarrow$ Giản đơn $\\rightarrow$ Chung $\\rightarrow$ Tiền tệ"
    ],
    "correct": 1,
    "explanation": "4 hình thái giá trị: (1) Giản đơn/ngẫu nhiên $\\rightarrow$ (2) Toàn bộ/mở rộng $\\rightarrow$ (3) Chung $\\rightarrow$ (4) Tiền tệ (khi vàng độc tôn làm vật ngang giá chung)."
  },
  {
    "id": 27,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Bản chất của tiền tệ là gì?",
    "options": [
      "Là quy ước pháp lý do nhà nước đặt ra",
      "Là hàng hóa đặc biệt được tách ra làm vật ngang giá chung cho toàn bộ thế giới hàng hóa",
      "Là công cụ do hệ thống ngân hàng phát minh để cấp tín dụng",
      "Là thước đo tâm lý về mức độ giàu có"
    ],
    "correct": 1,
    "explanation": "Tiền tệ là hàng hóa đặc biệt đóng vai trò vật ngang giá chung cho mọi hàng hóa, là biểu hiện tập trung của lao động xã hội và quan hệ sản xuất hàng hóa."
  },
  {
    "id": 28,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Tiền tệ thực hiện chức năng nào khi dùng để đo lường và biểu hiện giá trị của tất cả các hàng hóa khác?",
    "options": [
      "Phương tiện lưu thông",
      "Thước đo giá trị",
      "Phương tiện thanh toán",
      "Phương tiện cất trữ"
    ],
    "correct": 1,
    "explanation": "Chức năng 'Thước đo giá trị': Tiền tệ đo lường và biểu hiện giá trị của hàng hóa khác thành một mức giá cả. Ở chức năng này, chỉ cần dùng tiền tưởng tượng (nhẩm trong đầu)."
  },
  {
    "id": 29,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Khi tiền làm môi giới trung gian trong lưu thông hàng hóa theo công thức H - T - H, tiền đang thực hiện chức năng gì?",
    "options": [
      "Thước đo giá trị",
      "Phương tiện lưu thông",
      "Phương tiện cất trữ",
      "Phương tiện thanh toán"
    ],
    "correct": 1,
    "explanation": "Chức năng 'Phương tiện lưu thông': tiền làm trung gian vận động của hàng hóa từ người bán sang người mua theo công thức $H - T - H$. Ở chức năng này, tiền phải là tiền mặt/tiền thực."
  },
  {
    "id": 30,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Hiện tượng lạm phát xuất hiện khi nào?",
    "options": [
      "Khi giá vàng trên thị trường quốc tế giảm mạnh",
      "Khi khối lượng tiền giấy đưa vào lưu thông vượt quá khối lượng tiền vàng thực tế cần thiết",
      "Khi tổng sản lượng hàng hóa tăng nhanh hơn lượng tiền",
      "Khi nhà nước tăng cường dự trữ ngoại hối"
    ],
    "correct": 1,
    "explanation": "Lạm phát xảy ra khi tiền giấy (vốn không có giá trị nội tại) được phát hành vượt quá lượng tiền vàng thực tế cần thiết cho lưu thông, khiến đồng tiền mất giá và mặt bằng giá cả leo thang."
  },
  {
    "id": 31,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Quy luật giá trị yêu cầu việc sản xuất và trao đổi hàng hóa phải tuân thủ điều kiện gì?",
    "options": [
      "Phải dựa trên cơ sở hao phí lao động xã hội cần thiết",
      "Hao phí lao động cá biệt luôn phải bằng 0",
      "Giá cả trên thị trường phải do người mua quyết định hoàn toàn",
      "Cung hàng hóa luôn phải nhỏ hơn cầu"
    ],
    "correct": 0,
    "explanation": "Quy luật giá trị là quy luật kinh tế căn bản của sản xuất hàng hóa, đòi hỏi sản xuất và trao đổi phải căn cứ trên hao phí lao động xã hội cần thiết (trao đổi ngang giá)."
  },
  {
    "id": 32,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Cơ chế tác động của quy luật giá trị điều tiết sản xuất hàng hóa thông qua yếu tố nào?",
    "options": [
      "Mệnh lệnh hành chính của nhà nước",
      "Sự biến động của giá cả xoay quanh giá trị trên thị trường do quan hệ cung - cầu",
      "Hợp đồng lao động tập thể",
      "Chỉ thị của hiệp hội bảo vệ người tiêu dùng"
    ],
    "correct": 1,
    "explanation": "Quy luật giá trị điều tiết sản xuất và lưu thông tự phát thông qua sự lên xuống của giá cả xoay quanh giá trị: nơi nào cung < cầu, giá cả > giá trị $\\rightarrow$ tư bản đổ về; nơi nào cung > cầu, giá cả < giá trị $\\rightarrow$ tư bản rút đi."
  },
  {
    "id": 33,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Thị trường có những chức năng kinh tế cơ bản nào?",
    "options": [
      "Thừa nhận, thông tin và điều tiết/kích thích sản xuất - tiêu dùng",
      "Định giá cố định, phân phối tem phiếu và kiểm toán",
      "Chỉ có chức năng cung cấp hàng hóa cho người tiêu dùng",
      "Xóa bỏ hoàn toàn khoảng cách giàu nghèo"
    ],
    "correct": 0,
    "explanation": "Thị trường có 3 chức năng chính: (1) Thừa nhận công dụng xã hội và giá trị hàng hóa; (2) Cung cấp thông tin thị trường cho các chủ thể; (3) Điều tiết, kích thích hoặc hạn chế sản xuất và tiêu dùng."
  },
  {
    "id": 34,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Ai là chủ thể đóng vai trò định hướng và là mục đích cuối cùng của toàn bộ quá trình sản xuất hàng hóa trên thị trường?",
    "options": [
      "Người sản xuất",
      "Người tiêu dùng",
      "Các thương nhân trung gian",
      "Nhà đầu tư chứng khoán"
    ],
    "correct": 1,
    "explanation": "Người tiêu dùng là chủ thể quyết định sự tồn tại của sản phẩm. Nhu cầu và sự lựa chọn của người tiêu dùng là mục đích và là thước đo định hướng sản xuất của doanh nghiệp."
  },
  {
    "id": 35,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Trong nền kinh tế thị trường, chủ thể nào giữ vai trò quản lý vĩ mô, tạo lập môi trường thể chế và khắc phục các khuyết tật của thị trường?",
    "options": [
      "Các công ty đa quốc gia",
      "Nhà nước",
      "Hệ thống ngân hàng thương mại",
      "Thị trường chứng khoán"
    ],
    "correct": 1,
    "explanation": "Nhà nước là chủ thể thực hiện quản lý nền kinh tế thông qua pháp luật, chính sách, quy hoạch nhằm định hướng phát triển, bảo vệ môi trường, khắc phục thất bại thị trường (độc quyền, ngoại ứng tiêu cực, bất bình đẳng)."
  },
  {
    "id": 36,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Hàng hóa dịch vụ khác với hàng hóa thông thường ở đặc điểm cơ bản nào?",
    "options": [
      "Dịch vụ không có giá trị và không có giá trị sử dụng",
      "Quá trình sản xuất và quá trình tiêu dùng dịch vụ diễn ra đồng thời, không thể cất trữ",
      "Dịch vụ không phải là sản phẩm của lao động",
      "Dịch vụ chỉ do nhà nước cung cấp"
    ],
    "correct": 1,
    "explanation": "Hàng hóa dịch vụ là hàng hóa phi vật thể, quá trình sản xuất và tiêu dùng diễn ra đồng thời, không thể tích lũy hoặc cất trữ trong kho như hàng hóa thông thường."
  },
  {
    "id": 37,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Quyền sử dụng đất, thương hiệu, cổ phiếu được coi là gì trong nền kinh tế thị trường?",
    "options": [
      "Hàng hóa thông thường như bao hàng hóa khác",
      "Các loại 'hàng hóa đặc biệt' vì có giá cả, có thể mua bán nhưng không do hao phí lao động trực tiếp tạo ra như hàng hóa thông thường",
      "Vật phẩm phi kinh tế",
      "Tư liệu sản xuất bất biến thuần túy"
    ],
    "correct": 1,
    "explanation": "Đất đai tự nhiên, thương hiệu, chứng khoán được gọi là các 'hàng hóa đặc biệt': chúng có giá cả và được mua bán trên thị trường nhưng giá cả của chúng phản ánh địa tô hoặc kỳ vọng sinh lời, chứ không cấu thành thuần túy từ hao phí lao động trực tiếp."
  },
  {
    "id": 38,
    "chapter": 1,
    "part": "ch1_2",
    "question": "C. Mác và Ph. Ăngghen đã xây dựng hệ thống lý luận kinh tế chính trị khoa học dựa trên việc kế thừa trực tiếp thành tựu của trường phái nào?",
    "options": [
      "Chủ nghĩa Trọng thương",
      "Chủ nghĩa Trọng nông",
      "Kinh tế chính trị tư sản cổ điển Anh",
      "Trường phái Tân cổ điển"
    ],
    "correct": 2,
    "explanation": "C. Mác và Ph. Ăngghen kế thừa có phê phán các hạt nhân hợp lý của Kinh tế chính trị cổ điển Anh (đặc biệt là lý luận giá trị lao động của A. Smith và D. Ricardo) để sáng lập ra KTCT Mác."
  },
  {
    "id": 39,
    "chapter": 1,
    "part": "ch1_2",
    "question": "V.I. Lênin có công lao to lớn nào trong việc phát triển Kinh tế chính trị Mác?",
    "options": [
      "Phát hiện ra quy luật giá trị thặng dư trong giai đoạn cạnh tranh tự do",
      "Bổ sung, phát triển lý luận về chủ nghĩa tư bản độc quyền, độc quyền nhà nước và thời kỳ quá độ lên CNXH",
      "Sáng lập ra lý thuyết bàn tay vô hình",
      "Xóa bỏ hoàn toàn lý luận về hàng hóa sức lao động của Mác"
    ],
    "correct": 1,
    "explanation": "V.I. Lênin kế thừa và phát triển KTCT Mác khi CNTB chuyển sang giai đoạn tột cùng là chủ nghĩa đế quốc (độc quyền và độc quyền nhà nước) và phác thảo các vấn đề kinh tế của thời kỳ quá độ."
  },
  {
    "id": 40,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Một người thợ dệt vải may 1 cái áo mất 2 giờ lao động cá biệt. Thời gian lao động xã hội cần thiết trên thị trường để may cái áo đó là 3 giờ. Người này bán áo theo giá trị xã hội thì:",
    "options": [
      "Sẽ bị thua lỗ vì thời gian cá biệt ít hơn",
      "Sẽ thu được lợi thế và có lãi cao hơn mức bình thường",
      "Không thể bán được áo trên thị trường",
      "Bắt buộc phải hạ giá bán xuống mức 2 giờ"
    ],
    "correct": 1,
    "explanation": "Hao phí cá biệt (2 giờ) < Hao phí xã hội cần thiết (3 giờ). Khi bán theo giá trị xã hội, người này thu được khoản chênh lệch thặng dư và có lãi vượt trội, đây là động lực kích thích tăng NSLĐ."
  },
  {
    "id": 41,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Công thức chung của tư bản là gì?",
    "options": [
      "H - T - H",
      "T - H - T'",
      "H - T - H'",
      "T - T'"
    ],
    "correct": 1,
    "explanation": "Công thức chung của tư bản là $T - H - T'$, trong đó $T' = T + \\Delta T = T + m$ ($m$ là giá trị thặng dư). Mục đích của vận động tư bản là giá trị và giá trị tăng thêm vô hạn."
  },
  {
    "id": 42,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Mâu thuẫn của công thức chung của tư bản được C. Mác khái quát như thế nào?",
    "options": [
      "Tư bản chỉ sinh ra trong lưu thông trao đổi hàng hóa",
      "Tư bản không thể xuất hiện từ lưu thông và cũng không thể xuất hiện ở bên ngoài lưu thông. Nó phải xuất hiện trong lưu thông và đồng thời không phải trong lưu thông",
      "Tư bản chỉ sinh ra từ máy móc thiết bị hiện đại",
      "Tư bản sinh ra do nhà tư bản tiết kiệm chi tiêu cá nhân"
    ],
    "correct": 1,
    "explanation": "Đây là luận điểm kinh điển của C. Mác. Trong lưu thông không tạo ra giá trị mới (ngang giá hay không ngang giá đều không làm tăng tổng giá trị); ngoài lưu thông tiền cất giữ không sinh sôi. Do đó, mâu thuẫn chỉ giải quyết được khi nhà tư bản tìm thấy hàng hóa sức lao động."
  },
  {
    "id": 43,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Sức lao động trở thành hàng hóa khi có đủ hai điều kiện nào?",
    "options": [
      "Người lao động có trình độ cao và có vốn tự có",
      "Người lao động được tự do về thân thể và bị tước đoạt hết tư liệu sản xuất, không có tư liệu sinh sống",
      "Sự ra đời của thị trường chứng khoán và ngân hàng thương mại",
      "Nhà nước cho phép các doanh nghiệp thuê mướn lao động"
    ],
    "correct": 1,
    "explanation": "2 điều kiện để SLĐ thành hàng hóa: (1) Người lao động tự do về thân thể để tự mình bán SLĐ; (2) Người lao động không có TLSX và tư liệu sinh sống nên buộc phải đi bán SLĐ để tồn tại."
  },
  {
    "id": 44,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Giá trị của hàng hóa sức lao động được đo gián tiếp thông qua yếu tố nào?",
    "options": [
      "Năng suất lao động của nhà máy",
      "Giá trị của toàn bộ tư liệu sinh hoạt cần thiết để duy trì sự sống của công nhân, nuôi con cái họ và chi phí đào tạo kỹ năng",
      "Lợi nhuận bình quân của ngành dệt may",
      "Số giờ lao động trong ngày của công nhân"
    ],
    "correct": 1,
    "explanation": "Giá trị hàng hóa SLĐ được đo bằng giá trị các tư liệu sinh hoạt cần thiết để tái sản xuất ra sức lao động: nuôi bản thân công nhân, nuôi gia đình con cái và chi phí đào tạo; mang yếu tố lịch sử và tinh thần."
  },
  {
    "id": 45,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Thuộc tính Giá trị sử dụng của hàng hóa sức lao động có đặc điểm độc nhất vô nhị nào?",
    "options": [
      "Tự biến mất sau khi người công nhân làm việc",
      "Khi tiêu dùng (sử dụng), nó có khả năng tạo ra một lượng giá trị mới lớn hơn giá trị của bản thân nó",
      "Chỉ tạo ra được sản phẩm tinh thần",
      "Giá trị sử dụng của nó không thay đổi qua các thời kỳ lịch sử"
    ],
    "correct": 1,
    "explanation": "Giá trị sử dụng của hàng hóa sức lao động là chìa khóa giải mã nguồn gốc GTTD: quá trình tiêu dùng nó chính là quá trình lao động tạo ra giá trị mới ($v + m$) lớn hơn giá trị của bản thân nó ($v$)."
  },
  {
    "id": 46,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Bản chất của tiền công trong chủ nghĩa tư bản là gì?",
    "options": [
      "Là giá cả của lao động",
      "Là giá cả của hàng hóa sức lao động",
      "Là phần thưởng lòng tốt của nhà tư bản dành cho công nhân",
      "Là toàn bộ giá trị mới do công nhân tạo ra"
    ],
    "correct": 1,
    "explanation": "Tiền công là giá cả của hàng hóa sức lao động. C. Mác nhấn mạnh: 'Lao động' không phải là hàng hóa (lao động là quá trình tiêu dùng SLĐ), chỉ có 'sức lao động' mới là hàng hóa."
  },
  {
    "id": 47,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Căn cứ để C. Mác phân chia tư bản thành Tư bản bất biến (c) và Tư bản khả biến (v) là gì?",
    "options": [
      "Phương thức chu chuyển giá trị vào sản phẩm",
      "Vai trò khác nhau của các bộ phận tư bản trong việc tạo ra giá trị thặng dư",
      "Hình thức hiện vật tồn tại là nhà xưởng hay tiền mặt",
      "Tốc độ luân chuyển nhanh hay chậm của dòng tiền"
    ],
    "correct": 1,
    "explanation": "Căn cứ phân chia $c$ và $v$ là vai trò của chúng trong việc tạo ra GTTD: $c$ (tư liệu sản xuất) chỉ bảo tồn và chuyển dịch giá trị; $v$ (sức lao động) là bộ phận duy nhất biến đổi và sinh ra giá trị thặng dư $m$."
  },
  {
    "id": 48,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Ý nghĩa lý luận to lớn nhất của việc phân chia Tư bản bất biến (c) và Tư bản khả biến (v) là gì?",
    "options": [
      "Giúp nhà tư bản tính toán khấu hao máy móc",
      "Vạch rõ nguồn gốc duy nhất sinh ra giá trị thặng dư là do lao động làm thuê của công nhân tạo ra (v)",
      "Chứng minh máy móc thiết bị cũng tạo ra giá trị thặng dư",
      "Giúp định giá cổ phiếu trên thị trường"
    ],
    "correct": 1,
    "explanation": "Phân chia $c$ và $v$ vạch trần luận điệu tư sản cho rằng máy móc sinh ra giá trị, khẳng định lao động sống của công nhân ($v$) mới là nguồn gốc duy nhất sinh ra GTTD ($m$); $c$ chỉ là điều kiện khách quan."
  },
  {
    "id": 49,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Tỷ suất giá trị thặng dư (m') phản ánh điều gì?",
    "options": [
      "Hiệu quả sinh lời của toàn bộ tư bản đầu tư",
      "Trình độ bóc lột của nhà tư bản đối với công nhân làm thuê",
      "Quy mô bóc lột của nhà tư bản",
      "Tốc độ chu chuyển của dòng tiền"
    ],
    "correct": 1,
    "explanation": "Tỷ suất GTTD ($m' = m/v \\times 100\\% = t'/t \\times 100\\%$) phản ánh trình độ bóc lột sức lao động của tư bản đối với công nhân."
  },
  {
    "id": 50,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Khối lượng giá trị thặng dư (M) được tính theo công thức nào và phản ánh điều gì?",
    "options": [
      "$M = m' \\times k$, phản ánh doanh thu của công ty",
      "$M = m' \\times V$, phản ánh quy mô bóc lột của nhà tư bản",
      "$M = p' \\times (c+v)$, phản ánh tổng chi phí sản xuất",
      "$M = c + v + m$, phản ánh giá trị hàng hóa"
    ],
    "correct": 1,
    "explanation": "Khối lượng GTTD ($M = m' \\times V$, trong đó $V$ là tổng tư bản khả biến được sử dụng) phản ánh quy mô bóc lột mà nhà tư bản thu được."
  },
  {
    "id": 51,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Phương pháp sản xuất giá trị thặng dư tuyệt đối được thực hiện bằng cách nào?",
    "options": [
      "Tăng năng suất lao động xã hội để rút ngắn thời gian lao động tất yếu",
      "Kéo dài độ dài ngày lao động vượt quá thời gian lao động tất yếu trong khi năng suất lao động không đổi",
      "Ứng dụng công nghệ tự động hóa và robot",
      "Đầu tư mua máy móc hiện đại nhất từ nước ngoài"
    ],
    "correct": 1,
    "explanation": "Sản xuất GTTD tuyệt đối là phương pháp kéo dài ngày lao động (hoặc tăng cường độ lao động) vượt quá thời gian tất yếu trong khi NSLĐ và thời gian tất yếu không đổi."
  },
  {
    "id": 52,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Phương pháp sản xuất giá trị thặng dư tương đối được thực hiện bằng cách nào?",
    "options": [
      "Kéo dài ngày làm việc lên 14-16 giờ",
      "Rút ngắn thời gian lao động tất yếu nhờ tăng năng suất lao động xã hội, qua đó kéo dài thời gian lao động thặng dư trong điều kiện độ dài ngày lao động không đổi",
      "Cắt giảm tối đa tiền lương thực tế của công nhân",
      "Tăng ca làm đêm bắt buộc"
    ],
    "correct": 1,
    "explanation": "Sản xuất GTTD tương đối thu được bằng cách tăng NSLĐ xã hội (ở các ngành sản xuất tư liệu sinh hoạt), làm hạ giá trị tư liệu sinh hoạt $\\rightarrow$ hạ giá trị SLĐ $\\rightarrow$ rút ngắn thời gian tất yếu, kéo dài thời gian thặng dư trong khi độ dài ngày lao động không đổi."
  },
  {
    "id": 53,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Giá trị thặng dư siêu ngạch là gì?",
    "options": [
      "Là giá trị thặng dư thu được từ việc kinh doanh bất động sản",
      "Là phần giá trị thặng dư dôi ra thu được do doanh nghiệp áp dụng kỹ thuật tiên tiến, nâng cao năng suất lao động cá biệt cao hơn năng suất lao động xã hội",
      "Là khoản lợi nhuận phi pháp do trốn thuế",
      "Là phần giá trị thặng dư thu được từ viện trợ nước ngoài"
    ],
    "correct": 1,
    "explanation": "GTTD siêu ngạch do doanh nghiệp đi đầu cải tiến kỹ thuật, có NSLĐ cá biệt cao hơn xã hội $\\rightarrow$ giá trị cá biệt thấp hơn giá trị thị trường nhưng bán theo giá trị thị trường. C. Mác gọi đây là 'hình thái biến tướng của GTTD tương đối' và là động lực mạnh nhất của cạnh tranh tư bản."
  },
  {
    "id": 54,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Bản chất của tích lũy tư bản là gì?",
    "options": [
      "Gửi toàn bộ tiền lãi vào ngân hàng thụ hưởng lợi tức",
      "Tư bản hóa giá trị thặng dư (biến một phần giá trị thặng dư thành tư bản phụ thêm để mở rộng sản xuất)",
      "Chia đều lợi nhuận cho toàn bộ người lao động trong công ty",
      "Bán bớt máy móc cũ để mua sắm tiêu dùng cá nhân"
    ],
    "correct": 1,
    "explanation": "Thực chất của tích lũy tư bản là tái đầu tư, biến một phần giá trị thặng dư thành tư bản phụ thêm để mở rộng quy mô sản xuất (tư bản hóa GTTD)."
  },
  {
    "id": 55,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Điểm khác biệt căn bản giữa 'Tích tụ tư bản' và 'Tập trung tư bản' là gì?",
    "options": [
      "Tích tụ tư bản làm tăng quy mô tư bản toàn xã hội; tập trung tư bản không làm tăng ngay quy mô tư bản toàn xã hội mà chỉ phân phối lại",
      "Tập trung tư bản làm tăng quy mô tư bản xã hội; tích tụ tư bản không làm tăng",
      "Tích tụ tư bản dựa trên sáp nhập công ty; tập trung tư bản dựa trên tiết kiệm",
      "Hai quá trình này hoàn toàn giống nhau về nguồn gốc và giới hạn"
    ],
    "correct": 0,
    "explanation": "Tích tụ tư bản tăng vốn từ $m$ nội tại $\\rightarrow$ tăng tư bản xã hội. Tập trung tư bản hợp nhất các tư bản nhỏ có sẵn qua cạnh tranh/tín dụng $\\rightarrow$ không làm tăng ngay tư bản toàn xã hội nhưng diễn ra rất nhanh chóng."
  },
  {
    "id": 56,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Cấu tạo hữu cơ của tư bản (ký hiệu c/v) có xu hướng biến đổi như thế nào trong quá trình tích lũy tư bản?",
    "options": [
      "Có xu hướng ngày càng giảm",
      "Có xu hướng ngày càng tăng do tiến bộ kỹ thuật làm tư bản bất biến (c) tăng nhanh hơn tư bản khả biến (v)",
      "Luôn giữ nguyên không đổi",
      "Biến động hoàn toàn ngẫu nhiên"
    ],
    "correct": 1,
    "explanation": "Tiến bộ KHKT làm cấu tạo kỹ thuật tăng $\\rightarrow$ máy móc thiết bị ($c$) tăng nhanh hơn sức lao động ($v$) $\\rightarrow$ Cấu tạo hữu cơ $c/v$ có xu hướng ngày càng tăng cao, dẫn tới tạo ra đội quân lao động dư thừa (thất nghiệp)."
  },
  {
    "id": 57,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Căn cứ phân chia tư bản thành Tư bản cố định (c1) và Tư bản lưu động (c2 + v) là gì?",
    "options": [
      "Vai trò trong việc tạo ra giá trị thặng dư",
      "Phương thức chuyển dịch giá trị của các bộ phận tư bản vào sản phẩm mới",
      "Nguồn gốc trong nước hay nhập khẩu",
      "Mức độ rủi ro trong đầu tư tài chính"
    ],
    "correct": 1,
    "explanation": "Căn cứ phân chia: Phương thức chu chuyển giá trị. Tư bản cố định ($c_1$, máy móc nhà xưởng) chuyển dần từng phần vào sản phẩm; Tư bản lưu động ($c_2+v$, nguyên liệu, tiền lương) chuyển toàn bộ một lần sau 1 chu kỳ sản xuất."
  },
  {
    "id": 58,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Hao mòn vô hình của tư bản cố định xảy ra do nguyên nhân nào?",
    "options": [
      "Do tác động của thời tiết, rỉ sét, ẩm mốc tự nhiên",
      "Do ma sát cơ học trong quá trình vận hành sản xuất",
      "Do tiến bộ khoa học kỹ thuật làm xuất hiện các máy móc tương tự có giá rẻ hơn hoặc máy móc hiện đại hơn làm máy cũ bị mất giá",
      "Do người vận hành bất cẩn làm hỏng máy"
    ],
    "correct": 2,
    "explanation": "Hao mòn vô hình là sự mất giá thuần túy do tiến bộ kỹ thuật (chế tạo ra máy móc tương tự rẻ hơn hoặc máy mới năng suất cao hơn). Doanh nghiệp ứng phó bằng khấu hao nhanh và tăng ca máy."
  },
  {
    "id": 59,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Chi phí sản xuất tư bản chủ nghĩa (k) và Giá trị hàng hóa (G) có mối quan hệ như thế nào?",
    "options": [
      "$k = G$",
      "$k = c + v$, trong khi $G = c + v + m \\implies k < G$",
      "$k > G$",
      "$k = v + m$"
    ],
    "correct": 1,
    "explanation": "Chi phí sản xuất $k = c + v$ là chi phí thực tế mà nhà tư bản bỏ ra. Giá trị hàng hóa $G = c + v + m = k + m$. Do đó luôn có $k < G$."
  },
  {
    "id": 60,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Về bản chất, Lợi nhuận (p) là gì?",
    "options": [
      "Là khoản tiền do nhà nước trợ cấp",
      "Là hình thái chuyển hóa của giá trị thặng dư (m), được quan niệm là con đẻ của toàn bộ tư bản ứng trước (k)",
      "Là chi phí phát sinh ngoài ý muốn trong lưu thông",
      "Là phần giá trị thặng dư sinh ra do lưu thông buôn bán"
    ],
    "correct": 1,
    "explanation": "Lợi nhuận $p$ thực chất là hình thái chuyển hóa của $m$. Nhưng vì quy cho toàn bộ $k = c + v$ sinh ra, nên $p$ đã che đậy thực chất bóc lột của CNTB."
  },
  {
    "id": 61,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Tỷ suất lợi nhuận (p') luôn nhỏ hơn tỷ suất giá trị thặng dư (m') vì sao?",
    "options": [
      "Vì $p < m$",
      "Vì mẫu số của $p'$ là toàn bộ tư bản $(c+v)$, còn mẫu số của $m'$ chỉ là tư bản khả biến $v$",
      "Vì chi phí sản xuất luôn lớn hơn doanh thu",
      "Vì nhà tư bản phải nộp thuế cho nhà nước"
    ],
    "correct": 1,
    "explanation": "Ta có $p' = \\frac{m}{c+v} \\times 100\\%$ và $m' = \\frac{m}{v} \\times 100\\%$. Vì $c+v > v$ nên luôn có $p' < m'$."
  },
  {
    "id": 62,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Cạnh tranh giữa các ngành trong giai đoạn tự do cạnh tranh dẫn tới hình thành cái gì?",
    "options": [
      "Giá trị cá biệt của sản phẩm",
      "Tỷ suất lợi nhuận bình quân ($\\bar{p}'$) và Giá cả sản xuất",
      "Sự phá sản của toàn bộ các nhà máy cơ khí",
      "Sự sụp đổ của đồng tiền vàng"
    ],
    "correct": 1,
    "explanation": "Cạnh tranh giữa các ngành dẫn tới việc di chuyển tự do tư bản từ ngành có $p'$ thấp sang ngành có $p'$ cao, san bằng các mức $p'$ khác nhau thành Tỷ suất lợi nhuận bình quân ($\\bar{p}'$), biến giá trị hàng hóa thành Giá cả sản xuất ($GCSX = k + \\bar{p}$)."
  },
  {
    "id": 63,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Địa tô tuyệt đối trong nông nghiệp tư bản chủ nghĩa hình thành do nguyên nhân nào?",
    "options": [
      "Do độ màu mỡ tự nhiên của đất đai màu mỡ",
      "Do thâm canh đầu tư thêm vốn",
      "Do độc quyền tư hữu ruộng đất ngăn cản dòng tư bản tự do đầu tư vào nông nghiệp",
      "Do giá phân bón tăng cao"
    ],
    "correct": 2,
    "explanation": "Địa tô tuyệt đối thu trên mọi loại đất (kể cả đất xấu nhất) do độc quyền tư hữu ruộng đất tạo ra; ngành nông nghiệp có $c/v$ thấp hơn công nghiệp nên giá trị nông sản cao hơn giá cả sản xuất, phần chênh lệch này biến thành địa tô tuyệt đối nộp cho địa chủ."
  },
  {
    "id": 64,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Giá cả đất đai trong nền kinh tế thị trường được xác định như thế nào?",
    "options": [
      "Do hao phí lao động khai phá đất đai quyết định",
      "Tỷ lệ thuận với địa tô hàng năm và tỷ lệ nghịch với tỷ suất lợi tức tiền gửi ngân hàng",
      "Luôn bằng chi phí san lấp mặt bằng",
      "Do quy hoạch hành chính quyết định cố định"
    ],
    "correct": 1,
    "explanation": "Công thức giá cả đất đai: $P_{đất} = \\frac{\\text{Địa tô hàng năm}}{\\text{Tỷ suất lợi tức tiền gửi}}$. Nó tỷ lệ thuận với địa tô và tỷ lệ nghịch với lãi suất ngân hàng."
  },
  {
    "id": 65,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Nguyên nhân trực tiếp và quyết định dẫn đến sự chuyển biến từ CNTB tự do cạnh tranh sang CNTB độc quyền cuối thế kỷ XIX là gì?",
    "options": [
      "Sự xuất hiện của tiền giấy",
      "Sự phát triển mạnh mẽ của lực lượng sản xuất dưới tác động của tiến bộ KHKT và cạnh tranh gay gắt làm tập trung sản xuất quy mô lớn",
      "Chiến tranh thế giới thứ nhất bùng nổ",
      "Sự can thiệp sâu của nhà nước phong kiến"
    ],
    "correct": 1,
    "explanation": "Tiến bộ KHKT, LLSX phát triển và cạnh tranh tự do thúc đẩy tích tụ và tập trung sản xuất đến đỉnh cao, sinh ra các tổ chức độc quyền nắm quyền thống trị thị trường."
  },
  {
    "id": 66,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Theo V.I. Lênin, các tổ chức độc quyền thời kỳ đầu phát triển qua các hình thức từ thấp đến cao theo thứ tự nào?",
    "options": [
      "Trust $\\rightarrow$ Cartel $\\rightarrow$ Syndicate $\\rightarrow$ Consortium",
      "Cartel $\\rightarrow$ Syndicate $\\rightarrow$ Trust $\\rightarrow$ Consortium",
      "Consortium $\\rightarrow$ Trust $\\rightarrow$ Syndicate $\\rightarrow$ Cartel",
      "Syndicate $\\rightarrow$ Cartel $\\rightarrow$ Trust $\\rightarrow$ Concern"
    ],
    "correct": 1,
    "explanation": "Trình tự phát triển các tổ chức độc quyền truyền thống: Cartel (thỏa thuận giá/thị trường) $\\rightarrow$ Syndicate (thống nhất lưu thông) $\\rightarrow$ Trust (thống nhất cả sản xuất và lưu thông) $\\rightarrow$ Consortium (liên minh đa ngành)."
  },
  {
    "id": 67,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Trong giai đoạn hiện nay, các tổ chức độc quyền có biểu hiện mới nổi bật nào?",
    "options": [
      "Quay trở lại hình thức sản xuất thủ công nhỏ lẻ",
      "Sự xuất hiện và thống trị của các tập đoàn khổng lồ đa ngành: Concern và Conglomerate, kết hợp với các doanh nghiệp vừa và nhỏ vệ tinh",
      "Chỉ hoạt động thuần túy trong một ngành hẹp",
      "Xóa bỏ hoàn toàn sở hữu cổ phần"
    ],
    "correct": 1,
    "explanation": "Biểu hiện mới của tổ chức độc quyền: Hình thành Concern (liên hiệp đa ngành chặt chẽ) và Conglomerate (tập đoàn kinh doanh nhiều lĩnh vực hoàn toàn không liên quan để phân tán rủi ro), cùng hệ thống vệ tinh các doanh nghiệp nhỏ."
  },
  {
    "id": 68,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Tư bản tài chính là sự kết hợp giữa hai bộ phận tư bản nào?",
    "options": [
      "Tư bản nông nghiệp và tư bản thương nghiệp",
      "Tư bản độc quyền ngân hàng và tư bản độc quyền công nghiệp",
      "Tư bản nhà nước và tư bản tư nhân nhỏ",
      "Tư bản cho vay và tư bản tiêu dùng"
    ],
    "correct": 1,
    "explanation": "V.I. Lênin định nghĩa: Tư bản tài chính là sự thâm nhập, hợp nhất lẫn nhau giữa tư bản độc quyền công nghiệp và tư bản độc quyền ngân hàng, nắm giữ huyết mạch kinh tế của xã hội."
  },
  {
    "id": 69,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Cơ chế thống trị chủ yếu về mặt kinh tế của các đầu sỏ tài chính được thực hiện thông qua hình thức nào?",
    "options": [
      "Chế độ bao cấp tem phiếu",
      "Chế độ tham dự và Chế độ ủy nhiệm",
      "Bán hàng rong trên đường phố",
      "Cưỡng chế quân sự trực tiếp"
    ],
    "correct": 1,
    "explanation": "Đầu sỏ tài chính thống trị thông qua 'Chế độ tham dự' (nắm cổ phần khống chế công ty mẹ, công ty con, công ty cháu) và biểu hiện mới là 'Chế độ ủy nhiệm' (thông qua quỹ tín thác/ủy nhiệm bỏ phiếu)."
  },
  {
    "id": 70,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Tại sao trong giai đoạn độc quyền, Xuất khẩu tư bản lại trở thành tất yếu khách quan?",
    "options": [
      "Do các nước phát triển hoàn toàn hết nguyên liệu",
      "Do xuất hiện 'hiện tượng thừa tư bản tương đối' trong các nước tư bản phát triển, cần tìm nơi đầu tư sinh lời cao hơn ở các nước lạc hậu",
      "Do các nước đang phát triển yêu cầu bắt buộc",
      "Do đồng tiền vàng bị mất giá hoàn toàn"
    ],
    "correct": 1,
    "explanation": "Ở các nước tư bản độc quyền phát triển, tư bản tích lũy quá lớn dẫn đến hiện tượng 'thừa tư bản tương đối' (khó tìm nơi đầu tư có tỷ suất lợi nhuận cao trong nước), trong khi các nước kém phát triển thiếu vốn, nhân công và nguyên liệu rẻ $\\rightarrow$ xuất khẩu tư bản trở thành tất yếu."
  },
  {
    "id": 71,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Biểu hiện mới của xuất khẩu tư bản trong giai đoạn hiện nay là gì?",
    "options": [
      "Dòng vốn tư bản chỉ chảy từ nước giàu sang nước nghèo như trước đây",
      "Dòng vốn chuyển dịch mạnh mẽ giữa các nước tư bản phát triển với nhau, hình thức đầu tư đa dạng (FDI, BOT, M&A) và chủ thể chính là các tập đoàn xuyên quốc gia (TNCs)",
      "Chỉ có nhà nước mới được xuất khẩu tư bản",
      "Ngừng hẳn hoạt động đầu tư trực tiếp nước ngoài"
    ],
    "correct": 1,
    "explanation": "Biểu hiện mới: Hướng xuất khẩu tư bản mở rộng mạnh mẽ giữa các nước phát triển với nhau; hình thức đa dạng (BOT, BTO, M&A); chủ thể đóng vai trò chi phối là các công ty xuyên quốc gia (TNCs)."
  },
  {
    "id": 72,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Sự phân chia lãnh thổ thế giới giữa các cường quốc tư bản trong giai đoạn hiện nay có biểu hiện mới nào?",
    "options": [
      "Chiến tranh phân chia lại toàn bộ thuộc địa địa lý như thế kỷ XIX",
      "Sự sụp đổ của hệ thống thuộc địa cũ chuyển sang Chủ nghĩa thực dân mới, bành trướng qua 'biên giới mềm' bằng ảnh hưởng kinh tế, tài chính, công nghệ và chính trị",
      "Các nước lớn từ bỏ hoàn toàn mọi tham vọng bành trướng",
      "Thế giới trở thành một quốc gia duy nhất không có biên giới"
    ],
    "correct": 1,
    "explanation": "Ngày nay, thay vì chiếm đóng thuộc địa kiểu cũ, các nước lớn thực hiện chủ nghĩa thực dân mới: bành trướng qua 'biên giới mềm' (thao túng tài chính, công nghệ, bẫy nợ, văn hóa và ràng buộc địa chính trị)."
  },
  {
    "id": 73,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Bản chất của Chủ nghĩa tư bản độc quyền nhà nước là gì?",
    "options": [
      "Sự chuyển biến hòa bình của CNTB sang CNXH",
      "Sự kết hợp sức mạnh của các tổ chức độc quyền tư nhân với sức mạnh của bộ máy nhà nước tư sản thành một thể thống nhất nhằm phục vụ lợi ích độc quyền và duy trì chế độ TBCN",
      "Nhà nước tư sản tước đoạt toàn bộ tài sản của các tập đoàn tư nhân",
      "Sự xóa bỏ hoàn toàn quyền tư hữu tư bản chủ nghĩa"
    ],
    "correct": 1,
    "explanation": "Bản chất CNTB độc quyền nhà nước: Sự dung hợp sức mạnh của tài phiệt độc quyền với nhà nước tư sản nhằm phục vụ lợi ích của giai cấp tư sản độc quyền và cứu nguy cho chế độ TBCN trước các cuộc khủng hoảng."
  },
  {
    "id": 74,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Ba biểu hiện chủ yếu của Chủ nghĩa tư bản độc quyền nhà nước bao gồm:",
    "options": [
      "Sự kết hợp về nhân sự, sự hình thành sở hữu nhà nước và sự điều tiết kinh tế của nhà nước tư sản",
      "Sở hữu tập thể, phân phối theo nhu cầu và bao cấp toàn diện",
      "Thương mại tự do, xóa bỏ thuế quan và bãi bỏ luật pháp",
      "Đóng cửa biên giới, cấm vận kinh tế và quốc hữu hóa toàn bộ"
    ],
    "correct": 0,
    "explanation": "3 biểu hiện chủ yếu của CNTB độc quyền nhà nước: (1) Sự kết hợp về nhân sự giữa tổ chức độc quyền và chính phủ; (2) Sự hình thành và phát triển sở hữu nhà nước; (3) Sự điều tiết kinh tế vĩ mô của nhà nước tư sản."
  },
  {
    "id": 75,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Giới hạn lịch sử lớn nhất của chủ nghĩa tư bản nằm ở mâu thuẫn cơ bản nào?",
    "options": [
      "Mâu thuẫn giữa lao động cụ thể và lao động trừu tượng",
      "Mâu thuẫn giữa tính chất xã hội hóa ngày càng cao của lực lượng sản xuất với chế độ chiếm hữu tư nhân TBCN về tư liệu sản xuất",
      "Mâu thuẫn giữa nhà nước và thị trường tự do",
      "Mâu thuẫn giữa các đồng tiền thanh toán quốc tế"
    ],
    "correct": 1,
    "explanation": "Mâu thuẫn cơ bản của CNTB: Lực lượng sản xuất ngày càng phát triển mang tính xã hội hóa cao độ nhưng quan hệ sản xuất lại dựa trên chế độ chiếm hữu tư nhân TBCN về TLSX. Mâu thuẫn này làm bùng phát khủng hoảng và là tiền đề tất yếu thay thế bằng CNXH."
  },
  {
    "id": 76,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Đại hội nào của Đảng Cộng sản Việt Nam đã lần đầu tiên chính thức xác định: 'Kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát của thời kỳ quá độ lên CNXH ở nước ta'?",
    "options": [
      "Đại hội VI (1986)",
      "Đại hội IX (2001)",
      "Đại hội XI (2011)",
      "Đại hội XIII (2021)"
    ],
    "correct": 1,
    "explanation": "Đại hội IX của Đảng (năm 2001) là mốc lịch sử chính thức xác định: Kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát trong suốt thời kỳ quá độ lên CNXH ở Việt Nam."
  },
  {
    "id": 77,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Tính tất yếu khách quan của việc phát triển kinh tế thị trường định hướng XHCN ở Việt Nam xuất phát từ lý do nào?",
    "options": [
      "Do sự áp đặt từ các tổ chức tài chính quốc tế",
      "Phù hợp quy luật phát triển khách quan, phát huy tính ưu việt của KTTT trong phân bổ nguồn lực và đáp ứng nguyện vọng 'Dân giàu, nước mạnh' của nhân dân",
      "Do mô hình kinh tế bao cấp đã phát huy hết vai trò trong thời bình",
      "Nhằm mục đích chuyển dịch hoàn toàn sang nền kinh tế tư bản tư nhân"
    ],
    "correct": 1,
    "explanation": "Phát triển KTTT định hướng XHCN là tất yếu vì: (1) Phù hợp quy luật khách quan của LLSX; (2) KTTT phân bổ nguồn lực hiệu quả vượt trội; (3) Đáp ứng mục tiêu xây dựng cơ sở vật chất cho CNXH và nguyện vọng ấm no của nhân dân."
  },
  {
    "id": 78,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Mục tiêu phát triển cao nhất của kinh tế thị trường định hướng XHCN ở Việt Nam là gì?",
    "options": [
      "Tối đa hóa lợi nhuận cho các doanh nghiệp nhà nước",
      "Giải phóng sức sản xuất, xây dựng cơ sở vật chất cho CNXH, thực hiện 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'",
      "Đưa thị trường chứng khoán vào nhóm dẫn đầu thế giới",
      "Tập trung toàn bộ của cải vào tay ngân sách nhà nước"
    ],
    "correct": 1,
    "explanation": "Mục tiêu bao trùm của KTTT định hướng XHCN là phát triển LLSX, xây dựng CSVC-KT cho CNXH, nâng cao đời sống nhân dân, thực hiện 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'."
  },
  {
    "id": 79,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Trong nền kinh tế thị trường định hướng XHCN ở Việt Nam, thành phần kinh tế nào giữ vai trò 'chủ đạo'?",
    "options": [
      "Kinh tế tư nhân",
      "Kinh tế tập thể",
      "Kinh tế nhà nước",
      "Kinh tế có vốn đầu tư nước ngoài"
    ],
    "correct": 2,
    "explanation": "Đảng ta khẳng định nhất quán: Kinh tế nhà nước giữ vai trò chủ đạo, nắm giữ các huyết mạch kinh tế trọng yếu và định hướng, hỗ trợ các thành phần kinh tế khác cùng phát triển."
  },
  {
    "id": 80,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Trong các văn kiện Đại hội Đảng gần đây, thành phần kinh tế tư nhân được xác định có vai trò gì?",
    "options": [
      "Giữ vai trò chủ đạo của nền kinh tế",
      "Là một động lực quan trọng của nền kinh tế thị trường định hướng XHCN",
      "Chỉ được phép hoạt động trong lĩnh vực bán lẻ",
      "Là thành phần kinh tế tạm thời chờ xóa bỏ"
    ],
    "correct": 1,
    "explanation": "Nghị quyết Trung ương 5 khóa XII và Văn kiện Đại hội XIII khẳng định: Kinh tế tư nhân là một động lực quan trọng của nền kinh tế thị trường định hướng XHCN."
  },
  {
    "id": 81,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Trong nền KTTT định hướng XHCN ở Việt Nam, hình thức phân phối thu nhập nào giữ vai trò chủ yếu?",
    "options": [
      "Phân phối bình quân cào bằng",
      "Phân phối theo kết quả lao động và hiệu quả kinh tế",
      "Phân phối theo nguồn vốn đóng góp là chính",
      "Phân phối theo chức vụ hành chính"
    ],
    "correct": 1,
    "explanation": "Quan hệ phân phối ở VN thực hiện nhiều hình thức, trong đó: Phân phối theo kết quả lao động và hiệu quả kinh tế là chủ yếu; đồng thời phân phối theo vốn/nguồn lực đóng góp và qua quỹ phúc lợi an sinh xã hội."
  },
  {
    "id": 82,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Quan điểm của Đảng ta về mối quan hệ giữa tăng trưởng kinh tế với tiến bộ và công bằng xã hội được xác định như thế nào?",
    "options": [
      "Cần hy sinh công bằng xã hội và môi trường trước để ưu tiên tăng trưởng GDP bằng mọi giá",
      "Thực hiện tiến bộ và công bằng xã hội ngay trong từng bước đi và từng chính sách phát triển kinh tế",
      "Chờ khi nào kinh tế phát triển thật giàu có mới bắt đầu thực hiện công bằng xã hội",
      "Công bằng xã hội chỉ thực hiện trong các cơ quan nhà nước"
    ],
    "correct": 1,
    "explanation": "Đặc trưng cốt lõi của định hướng XHCN ở VN: 'Thực hiện tiến bộ và công bằng xã hội ngay trong từng bước và từng chính sách phát triển', không chờ kinh tế phát triển cao mới làm công bằng và không hy sinh công bằng xã hội để chạy theo tăng trưởng đơn thuần."
  },
  {
    "id": 83,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Thể chế kinh tế thị trường định hướng XHCN bao gồm những yếu tố cấu thành nào?",
    "options": [
      "Hệ thống luật pháp, quy tắc; các chủ thể tham gia; cơ chế vận hành và giám sát",
      "Chỉ bao gồm các văn bản luật do Quốc hội ban hành",
      "Chỉ bao gồm bộ máy các doanh nghiệp nhà nước",
      "Hệ thống giá cả do nhà nước áp đặt"
    ],
    "correct": 0,
    "explanation": "Thể chế KTTT gồm: (1) Khung khổ pháp luật, quy tắc điều chỉnh; (2) Các chủ thể kinh tế tham gia thị trường; (3) Cơ chế vận hành thị trường (giá cả, cạnh tranh, cung cầu) và thanh tra giám sát."
  },
  {
    "id": 84,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Lợi ích kinh tế là gì?",
    "options": [
      "Là lòng vị tha và tình cảm giữa con người",
      "Là lợi ích vật chất, lợi ích thu được khi các chủ thể thực hiện các hoạt động kinh tế",
      "Là danh hiệu thi đua và bằng khen",
      "Là các chỉ tiêu tăng trưởng mang tính hình thức"
    ],
    "correct": 1,
    "explanation": "Lợi ích kinh tế là lợi ích vật chất thu được từ hoạt động kinh tế; phản ánh mục đích, động cơ thúc đẩy con người và doanh nghiệp hành động; là động lực trực tiếp của phát triển kinh tế."
  },
  {
    "id": 85,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Trong các loại quan hệ lợi ích kinh tế, lợi ích nào đóng vai trò là cơ sở, nền tảng của các lợi ích khác?",
    "options": [
      "Lợi ích xã hội",
      "Lợi ích tập thể",
      "Lợi ích cá nhân",
      "Lợi ích của các cơ quan quản lý"
    ],
    "correct": 2,
    "explanation": "Lợi ích cá nhân là cơ sở, nền tảng của các lợi ích khác, bởi vì cá nhân là chủ thể cấu thành nên tập thể và xã hội. Chỉ khi lợi ích cá nhân được đáp ứng chính đáng thì mới tạo động lực cống hiến cho xã hội."
  },
  {
    "id": 86,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Hiện tượng 'Lợi ích nhóm' tiêu cực trong nền kinh tế thị trường có tác hại gì?",
    "options": [
      "Giúp thị trường tự do cạnh tranh hoàn hảo",
      "Làm méo mó chính sách, thất thoát tài sản nhà nước, xâm phạm lợi ích của cộng đồng và kìm hãm sự phát triển lành mạnh",
      "Nâng cao hiệu quả đầu tư công",
      "Thúc đẩy phân phối thu nhập công bằng hơn"
    ],
    "correct": 1,
    "explanation": "Lợi ích nhóm tiêu cực (sự liên minh giữa doanh nghiệp thoái hóa với quan chức suy thoái để trục lợi chính sách) gây lãng phí, tham nhũng, méo mó phân bổ nguồn lực và xói mòn lòng tin xã hội."
  },
  {
    "id": 87,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Vai trò của Nhà nước trong việc điều hòa các quan hệ lợi ích kinh tế thể hiện ở nội dung nào?",
    "options": [
      "Xóa bỏ hoàn toàn lợi ích cá nhân để gom vào ngân sách",
      "Bảo đảm lợi ích hợp pháp, điều hòa lợi ích qua thuế và an sinh xã hội, ngăn ngừa tiêu cực và giải quyết mâu thuẫn lợi ích",
      "Không can thiệp để thị trường tự phát giải quyết",
      "Cố định mức lương của tất cả người lao động trong xã hội"
    ],
    "correct": 1,
    "explanation": "Nhà nước điều hòa lợi ích thông qua: (1) Môi trường pháp luật bảo vệ quyền lợi hợp pháp; (2) Chính sách thuế, ngân sách tái phân phối, trợ cấp an sinh; (3) Chống tham nhũng, kiểm soát lợi ích nhóm; (4) Giải quyết mâu thuẫn tranh chấp."
  },
  {
    "id": 88,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Khái niệm Công nghiệp hóa, Hiện đại hóa ở Việt Nam lần đầu tiên được Đảng ta nêu ra tại Hội nghị nào?",
    "options": [
      "Hội nghị Trung ương 7 khóa VII (1994)",
      "Đại hội VI (1986)",
      "Đại hội VIII (1996)",
      "Hội nghị Trung ương 6 khóa XIII (2022)"
    ],
    "correct": 0,
    "explanation": "Hội nghị Ban Chấp hành Trung ương 7 khóa VII (năm 1994) là dấu mốc đưa ra định nghĩa chính thức và toàn diện về CNH, HĐH ở nước ta, sau đó được tiếp tục bổ sung, làm sâu sắc ở Đại hội XIII."
  },
  {
    "id": 89,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Cuộc Cách mạng công nghiệp lần thứ nhất (CMCN 1.0) có đặc trưng cốt lõi là gì?",
    "options": [
      "Sử dụng điện năng và dây chuyền sản xuất hàng loạt",
      "Chuyển từ lao động thủ công sang sử dụng máy móc cơ khí chạy bằng năng lượng nước và hơi nước",
      "Sự xuất hiện của máy vi tính và internet",
      "Sự bùng nổ của trí tuệ nhân tạo (AI) và công nghệ sinh học"
    ],
    "correct": 1,
    "explanation": "CMCN lần thứ nhất (cuối TK XVIII - giữa TK XIX) khởi đầu từ ngành dệt Anh với phát minh động cơ hơi nước của James Watt, cơ khí hóa sản xuất thay thế lao động thủ công."
  },
  {
    "id": 90,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Đặc trưng đột phá cốt lõi của cuộc Cách mạng công nghiệp lần thứ tư (CMCN 4.0) là gì?",
    "options": [
      "Máy hơi nước và đường sắt",
      "Điện năng và động cơ đốt trong",
      "Máy tính điện tử và tự động hóa đơn lẻ",
      "Sự kết hợp công nghệ cao trên các lĩnh vực Kỹ thuật số (AI, Big Data, IoT), Vật lý (Robot thông minh, in 3D) và Sinh học"
    ],
    "correct": 3,
    "explanation": "CMCN 4.0 phát triển trên nền tảng tích hợp công nghệ kỹ thuật số, vật lý và công nghệ sinh học với các trụ cột: Trí tuệ nhân tạo (AI), Vạn vật kết nối (IoT), Dữ liệu lớn (Big Data), Điện toán đám mây..."
  },
  {
    "id": 91,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Vì sao Công nghiệp hóa, Hiện đại hóa là tính tất yếu khách quan đối với Việt Nam?",
    "options": [
      "Là quy luật phổ biến của sự phát triển LLSX; là điều kiện tiên quyết xây dựng CSVC-KT cho CNXH và rút ngắn nguy cơ tụt hậu",
      "Chỉ vì mong muốn đuổi kịp các nước công nghiệp phương Tây",
      "Do cam kết bắt buộc khi gia nhập các tổ chức tài chính quốc tế",
      "Để giải quyết triệt để vấn đề ô nhiễm môi trường nông thôn"
    ],
    "correct": 0,
    "explanation": "CNH, HĐH là quy luật khách quan để biến một nước nông nghiệp lạc hậu thành nước có nền sản xuất hiện đại, tạo lập cơ sở vật chất - kỹ thuật cho CNXH và bảo đảm độc lập tự chủ kinh tế."
  },
  {
    "id": 92,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Đặc điểm nổi bật của quá trình CNH, HĐH ở Việt Nam hiện nay là gì?",
    "options": [
      "Tập trung ưu tiên phát triển công nghiệp nặng theo mô hình Liên Xô cũ",
      "CNH, HĐH theo định hướng XHCN, gắn với phát triển kinh tế tri thức và chủ động nắm bắt cơ hội của cuộc CMCN 4.0",
      "Dựa hoàn toàn vào khai thác tài nguyên thiên nhiên sẵn có",
      "Đóng cửa sản xuất trong nước, hạn chế nhập khẩu công nghệ"
    ],
    "correct": 1,
    "explanation": "CNH, HĐH ở Việt Nam mang đặc thù: Định hướng XHCN; gắn CNH với HĐH; gắn với phát triển kinh tế tri thức và chuyển đổi số, 'đi tắt, đón đầu' thời cơ của CMCN 4.0."
  },
  {
    "id": 93,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Kinh tế tri thức được định nghĩa là nền kinh tế như thế nào?",
    "options": [
      "Nền kinh tế chỉ có các trường đại học và viện nghiên cứu",
      "Nền kinh tế trong đó sự sản sinh, phổ biến và sử dụng tri thức giữ vai trò quyết định nhất đối với sự phát triển kinh tế và tạo ra của cải",
      "Nền kinh tế hoàn toàn không cần đến lao động chân tay",
      "Nền kinh tế dựa thuần túy vào khai khoáng và nông nghiệp"
    ],
    "correct": 1,
    "explanation": "Theo OECD, Kinh tế tri thức là nền kinh tế mà sự sản sinh, truyền bá và ứng dụng tri thức đóng vai trò động lực then chốt, quyết định hàng đầu đến tăng trưởng kinh tế."
  },
  {
    "id": 94,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Tính tất yếu khách quan của Hội nhập kinh tế quốc tế đối với Việt Nam xuất phát từ:",
    "options": [
      "Xu thế toàn cầu hóa và khu vực hóa kinh tế; nhu cầu tận dụng nguồn lực quốc tế (vốn, công nghệ, thị trường) kết hợp với nội lực dân tộc",
      "Ý muốn chủ quan của các nhà hoạch định chính sách",
      "Áp lực bắt buộc từ các nước láng giềng",
      "Để giải quyết tình trạng dư thừa hàng hóa trong nước"
    ],
    "correct": 0,
    "explanation": "Hội nhập quốc tế là tất yếu do xu thế toàn cầu hóa kinh tế, là cơ hội mở rộng thị trường, thu hút FDI, tiếp thu KH-CN và phương thức quản trị tiên tiến của nhân loại."
  },
  {
    "id": 95,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Nguyên tắc 'Không phân biệt đối xử' trong các hiệp định thương mại quốc tế (như WTO) bao gồm hai chế chế nào?",
    "options": [
      "Chế độ hạn ngạch và Chế độ thuế quan linh hoạt",
      "Quy chế Tối huệ quốc (MFN) và Quy chế Đãi ngộ quốc gia (NT)",
      "Chế độ bảo hộ mậu dịch và Trợ cấp xuất khẩu",
      "Chế độ tự do hóa hoàn toàn và Miễn thị thực"
    ],
    "correct": 1,
    "explanation": "Nguyên tắc không phân biệt đối xử của WTO gồm: (1) MFN (Most Favoured Nation - Tối huệ quốc: đối xử bình đẳng giữa các đối tác nước ngoài) và (2) NT (National Treatment - Đãi ngộ quốc gia: đối xử bình đẳng giữa hàng hóa nước ngoài với hàng hóa trong nước)."
  },
  {
    "id": 96,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Một trong những thách thức / rủi ro lớn nhất của hội nhập kinh tế quốc tế đối với nền kinh tế nước ta là gì?",
    "options": [
      "Thiếu nguồn lao động phổ thông",
      "Sức ép cạnh tranh gay gắt, nguy cơ rơi vào 'bẫy gia công giá trị thấp', ô nhiễm môi trường do công nghệ lạc hậu và phụ thuộc kinh tế",
      "Không thể xuất khẩu nông sản ra thị trường thế giới",
      "Mất quyền kiểm soát hệ thống tiền tệ nội tệ"
    ],
    "correct": 1,
    "explanation": "Thách thức lớn của hội nhập: Cạnh tranh khốc liệt, nguy cơ trở thành bãi thải công nghệ lạc hậu, cạn kiệt tài nguyên, gia tăng phụ thuộc và mắc kẹt ở phân khúc gia công lắp ráp giá trị gia tăng thấp."
  },
  {
    "id": 97,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Quan điểm cốt lõi để xây dựng nền kinh tế độc lập, tự chủ đi đôi với chủ động, tích cực hội nhập quốc tế là gì?",
    "options": [
      "Ngoại lực là quyết định, nội lực là bổ sung",
      "Nội lực là nhân tố quyết định nhất, ngoại lực là nhân tố quan trọng; kết hợp hài hòa sức mạnh dân tộc với sức mạnh thời đại",
      "Đóng cửa thị trường tài chính để tránh rủi ro lây lan",
      "Chỉ ưu tiên xuất khẩu, hạn chế tối đa đầu tư nước ngoài"
    ],
    "correct": 1,
    "explanation": "Quan điểm chỉ đạo của Đảng: Giữ vững độc lập tự chủ kinh tế trên nguyên tắc 'Nội lực là quyết định, ngoại lực là quan trọng', độc lập tự chủ là cơ sở để hội nhập hiệu quả."
  },
  {
    "id": 98,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Thành phần kinh tế có vốn đầu tư nước ngoài (FDI) có vai trò như thế nào trong nền kinh tế Việt Nam?",
    "options": [
      "Giữ vai trò chủ đạo thay thế kinh tế nhà nước",
      "Được khuyến khích phát triển, đóng vai trò quan trọng trong thu hút vốn, chuyển giao công nghệ, mở rộng thị trường xuất khẩu và tạo việc làm",
      "Chỉ được đầu tư vào các ngành nông nghiệp thủ công",
      "Bị hạn chế tối đa để bảo vệ doanh nghiệp trong nước"
    ],
    "correct": 1,
    "explanation": "Kinh tế có vốn đầu tư nước ngoài là bộ phận hữu cơ quan trọng của nền kinh tế quốc dân, được khuyến khích phát triển lâu dài để tranh thủ vốn, công nghệ và hội nhập chuỗi cung ứng toàn cầu."
  },
  {
    "id": 99,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Chuyển dịch cơ cấu ngành kinh tế trong quá trình CNH, HĐH ở Việt Nam diễn ra theo xu hướng hợp lý nào?",
    "options": [
      "Tăng nhanh tỷ trọng ngành nông nghiệp, giảm tỷ trọng công nghiệp và dịch vụ",
      "Giảm tỷ trọng nông nghiệp trong GDP, tăng tỷ trọng công nghiệp, xây dựng và dịch vụ (đặc biệt là công nghiệp chế biến, chế tạo và dịch vụ công nghệ cao)",
      "Chỉ tập trung vào công nghiệp khai thác mỏ",
      "Xóa bỏ hoàn toàn ngành nông nghiệp truyền thống"
    ],
    "correct": 1,
    "explanation": "Cơ cấu kinh tế hiện đại thể hiện ở việc giảm tỷ trọng nông - lâm - thủy sản, tăng tỷ trọng công nghiệp chế biến chế tạo và các ngành dịch vụ chất lượng cao có hàm lượng tri thức lớn."
  },
  {
    "id": 100,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Lợi ích kinh tế của người lao động được biểu hiện chủ yếu thông qua hình thức nào sau đây?",
    "options": [
      "Lợi nhuận cổ tức và chênh lệch giá cổ phiếu",
      "Tiền lương (tiền công) và các khoản phụ cấp, phúc lợi xã hội",
      "Địa tô thu được từ cho thuê đất đai",
      "Lợi tức thu được từ hoạt động cho vay vốn"
    ],
    "correct": 1,
    "explanation": "Người lao động bán sức lao động để kiếm sống, do đó lợi ích kinh tế trực tiếp của họ là tiền lương (thu nhập) và các khoản trợ cấp, bảo hiểm, phúc lợi gắn liền với việc làm."
  },
  {
    "id": 101,
    "chapter": 1,
    "part": "ch1_2",
    "question": "Quy luật kinh tế có vai trò như thế nào đối với các hoạt động kinh tế của con người?",
    "options": [
      "Con người hoàn toàn bất lực trước quy luật kinh tế",
      "Tác động một cách khách quan; con người có thể nhận thức và vận dụng quy luật để phục vụ lợi ích của mình",
      "Con người có thể tự do sáng tạo ra các quy luật mới theo ý muốn chủ quan",
      "Quy luật kinh tế chỉ tác động khi có lệnh của chính phủ"
    ],
    "correct": 1,
    "explanation": "Quy luật kinh tế tác động khách quan. Khi con người nhận thức đúng đắn và vận dụng phù hợp thì quy luật sẽ mang lại hiệu quả cao; nếu làm trái quy luật sẽ gánh chịu tổn thất."
  },
  {
    "id": 102,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Nếu thời gian lao động cá biệt của người sản xuất lớn hơn thời gian lao động xã hội cần thiết thì người đó sẽ rơi vào tình trạng nào?",
    "options": [
      "Thu được lợi nhuận siêu ngạch",
      "Có ưu thế tuyệt đối trên thị trường",
      "Bị thua lỗ, thậm chí có nguy cơ phá sản nếu tình trạng kéo dài",
      "Được nhà nước vinh danh vì làm việc nhiều giờ hơn"
    ],
    "correct": 2,
    "explanation": "Hàng hóa trao đổi theo giá trị xã hội. Nếu hao phí cá biệt > hao phí xã hội, người sản xuất không bù đắp được chi phí và sẽ bị thua lỗ, thậm chí phá sản."
  },
  {
    "id": 103,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Vàng trở thành hàng hóa đóng vai trò tiền tệ độc tôn trong lịch sử do nguyên nhân chủ yếu nào?",
    "options": [
      "Do vàng có màu sắc đẹp mắt được vua chúa ưa chuộng",
      "Do vàng là hàng hóa có giá trị cao trong một thể tích nhỏ, thuần nhất, dễ chia nhỏ, không bị hư hỏng theo thời gian",
      "Do Liên Hợp Quốc ban hành nghị quyết ấn định",
      "Do vàng là kim loại duy nhất tồn tại trên trái đất thời cổ đại"
    ],
    "correct": 1,
    "explanation": "Vàng bạc có những đặc tính tự nhiên ưu việt: giá trị cao tập trung trong khối lượng nhỏ, đồng nhất, dễ chia nhỏ gộp lại, không bị rỉ sét ẩm mốc $\\rightarrow$ trở thành vật ngang giá chung độc tôn."
  },
  {
    "id": 104,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Công thức tính lượng tiền cần thiết cho lưu thông (theo quy luật lưu thông tiền tệ của C. Mác) khi có tính đến mua bán chịu và thanh toán bù trừ là gì?",
    "options": [
      "$M = \\frac{P \\cdot Q}{V}$",
      "$M = \\frac{P \\cdot Q - (G_1 + G_2) + G_3}{V}$",
      "$M = P \\cdot Q \\cdot V$",
      "$M = \\frac{G_1 + G_2 + G_3}{V}$"
    ],
    "correct": 1,
    "explanation": "Công thức tổng quát: $M = \\frac{P \\cdot Q - (G_1 + G_2) + G_3}{V}$, trong đó $P \\cdot Q$ là tổng giá cả; $G_1$ là bán chịu; $G_2$ là khấu trừ nhau; $G_3$ là đến kỳ trả nợ; $V$ là số vòng quay của tiền."
  },
  {
    "id": 105,
    "chapter": 2,
    "part": "ch1_2",
    "question": "Một xí nghiệp may mặc trong 8 giờ sản xuất được 16 cái áo có tổng giá trị là 160 USD. Nếu năng suất lao động tăng lên gấp đôi thì tổng số áo và giá trị của một cái áo sẽ là bao nhiêu?",
    "options": [
      "32 cái áo; giá trị 1 áo là 10 USD",
      "32 cái áo; giá trị 1 áo là 5 USD",
      "16 cái áo; giá trị 1 áo là 5 USD",
      "32 cái áo; giá trị 1 áo là 20 USD"
    ],
    "correct": 1,
    "explanation": "NSLĐ tăng gấp đôi: Sản lượng tăng gấp đôi = $16 \\times 2 = 32$ cái áo. Tổng giá trị trong 8 giờ không đổi = 160 USD. Giá trị 1 cái áo giảm một nửa = $160 / 32 = 5$ USD."
  },
  {
    "id": 106,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Tuần hoàn của tư bản công nghiệp trải qua 3 giai đoạn theo trình tự nào?",
    "options": [
      "Sản xuất $\\rightarrow$ Lưu thông mua $\\rightarrow$ Lưu thông bán",
      "Lưu thông mua $\\rightarrow$ Sản xuất $\\rightarrow$ Lưu thông bán",
      "Lưu thông bán $\\rightarrow$ Sản xuất $\\rightarrow$ Lưu thông mua",
      "Sản xuất $\\rightarrow$ Tiêu dùng $\\rightarrow$ Lưu thông"
    ],
    "correct": 1,
    "explanation": "Tuần hoàn tư bản trải qua 3 giai đoạn kế tiếp: (1) Lưu thông - Mua ($T - H$), (2) Sản xuất ($H ... SX ... H'$), (3) Lưu thông - Bán ($H' - T'$)."
  },
  {
    "id": 107,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Tốc độ chu chuyển của tư bản được đo lường bằng đại lượng nào?",
    "options": [
      "Số lượng công nhân làm việc trong xí nghiệp",
      "Số vòng chu chuyển của tư bản trong thời gian một năm ($n = CH / ch$)",
      "Số lượng cổ phiếu phát hành trên thị trường",
      "Trọng lượng hàng hóa vận chuyển được"
    ],
    "correct": 1,
    "explanation": "Tốc độ chu chuyển tư bản đo bằng số vòng chu chuyển trong 1 năm: $n = CH / ch$, trong đó $CH$ là 12 tháng, $ch$ là thời gian 1 vòng chu chuyển của tư bản đó."
  },
  {
    "id": 108,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Doanh nghiệp A đầu tư tư bản: $c = 80.000\\ \\$, $v = 20.000\\ \\$. Tỷ suất giá trị thặng dư $m' = 150\\%$. Tổng giá trị hàng hóa (G) sản xuất ra là bao nhiêu?",
    "options": [
      "$100.000\\ \\$$",
      "$110.000\\ \\$$",
      "$130.000\\ \\$$",
      "$150.000\\ \\$$"
    ],
    "correct": 2,
    "explanation": "Ta có: $m = m' \\times v = 150\\% \\times 20.000 = 30.000\\ \\$. Tổng giá trị hàng hóa $G = c + v + m = 80.000 + 20.000 + 30.000 = 130.000\\ \\$."
  },
  {
    "id": 109,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Lợi nhuận thương nghiệp có nguồn gốc thực sự từ đâu?",
    "options": [
      "Do tài khéo léo lừa gạt khách hàng của thương nhân",
      "Là một phần của giá trị thặng dư do công nhân sản xuất tạo ra, được nhà tư bản công nghiệp nhượng lại cho tư bản thương nghiệp",
      "Do hàng hóa tự tăng giá trị khi được vận chuyển trên đường",
      "Do nhà nước trợ cấp giá cho ngành thương mại"
    ],
    "correct": 1,
    "explanation": "Lưu thông buôn bán thuần túy không tạo ra giá trị mới. Lợi nhuận thương nghiệp thực chất là một phần GTTD do công nhân ngành sản xuất tạo ra, được tư bản công nghiệp chia lại cho tư bản thương nghiệp vì đã đảm nhận khâu bán hàng."
  },
  {
    "id": 110,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Giới hạn vận động của Tỷ suất lợi tức (z') trong nền kinh tế tư bản chủ nghĩa là gì?",
    "options": [
      "$z' = \\bar{p}'$",
      "$0 < z' < \\bar{p}'$",
      "$z' > \\bar{p}'$",
      "$z' = m'$"
    ],
    "correct": 1,
    "explanation": "Lợi tức $z$ là một phần của lợi nhuận bình quân $\\bar{p}$ chia cho người cho vay. Do đó tỷ suất lợi tức $z'$ luôn lớn hơn 0 và nhỏ hơn tỷ suất lợi nhuận bình quân: $0 < z' < \\bar{p}'$."
  },
  {
    "id": 111,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Cổ phiếu và trái phiếu giao dịch trên thị trường chứng khoán được C. Mác gọi là gì?",
    "options": [
      "Tư bản thực tế",
      "Tư bản giả",
      "Tư bản bất biến",
      "Tư bản lưu động"
    ],
    "correct": 1,
    "explanation": "Chứng khoán (cổ phiếu, trái phiếu) được gọi là 'Tư bản giả' vì bản thân chúng không có giá trị nội tại, chúng là chứng chỉ quyền sở hữu mang lại thu nhập và có thể mua bán được."
  },
  {
    "id": 112,
    "chapter": 3,
    "part": "ch3_4",
    "question": "Địa tô chênh lệch II trong nông nghiệp hình thành do yếu tố nào?",
    "options": [
      "Do độ màu mỡ tự nhiên màu mỡ của thửa đất",
      "Do vị trí địa lý thuận lợi gần đô thị",
      "Do thâm canh, đầu tư thêm vốn và kỹ thuật cải tạo nâng cao độ phì nhiêu nhân tạo của đất",
      "Do độc quyền sở hữu ruộng đất của địa chủ"
    ],
    "correct": 2,
    "explanation": "Địa tô chênh lệch I do độ màu mỡ tự nhiên và vị trí thuận lợi; Địa tô chênh lệch II hình thành do thâm canh, áp dụng kỹ thuật và đầu tư thêm vốn làm tăng độ phì nhiêu nhân tạo."
  },
  {
    "id": 113,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Mô hình tập đoàn 'Conglomerate' trong nền kinh tế hiện đại có đặc điểm nổi bật nào?",
    "options": [
      "Chỉ sản xuất một mặt hàng truyền thống duy nhất",
      "Là tập đoàn đa lĩnh vực kết hợp các ngành kinh doanh hoàn toàn không liên quan về kỹ thuật công nghệ nhằm phân tán rủi ro",
      "Do nhà nước sở hữu 100% vốn",
      "Không bao giờ đầu tư vào tài chính"
    ],
    "correct": 1,
    "explanation": "Conglomerate là hình thái tập đoàn khổng lồ kiểu mới, thâu tóm và kinh doanh đồng thời nhiều ngành nghề hoàn toàn khác biệt nhau (từ bất động sản, bán lẻ, công nghệ đến thực phẩm) để tối đa hóa lợi nhuận và chia nhỏ rủi ro."
  },
  {
    "id": 114,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Tổ chức độc quyền áp đặt 'Giá cả độc quyền' nhằm mục đích gì?",
    "options": [
      "Bán hàng giá rẻ nhất để phục vụ cộng đồng",
      "Mua nguyên liệu với giá rẻ dưới giá trị và bán hàng hóa với giá đắt trên giá trị để chiếm đoạt lợi nhuận độc quyền cao",
      "Ổn định giá cả theo lệnh của chính phủ",
      "Xóa bỏ hoàn toàn chi phí sản xuất"
    ],
    "correct": 1,
    "explanation": "Giá cả độc quyền gồm: Giá mua độc quyền (rẻ dưới giá trị của người sản xuất nhỏ) và Giá bán độc quyền (đắt trên giá trị đối với người tiêu dùng) nhằm thu về Lợi nhuận độc quyền cao."
  },
  {
    "id": 115,
    "chapter": 4,
    "part": "ch3_4",
    "question": "Sự kết hợp về nhân sự giữa tổ chức độc quyền và nhà nước tư sản biểu hiện như thế nào?",
    "options": [
      "Các trùm tài phiệt tham gia chính phủ hoặc đưa tay chân vào cơ quan công quyền; ngược lại quan chức mãn nhiệm sang giữ chức vụ cao trong tập đoàn độc quyền",
      "Nhà nước bãi bỏ toàn bộ các chức danh bộ trưởng",
      "Tổ chức độc quyền chỉ được phép tuyển dụng người lao động nước ngoài",
      "Chính phủ chỉ tiếp xúc với các tiểu thương nhỏ"
    ],
    "correct": 0,
    "explanation": "Sự liên minh nhân sự: có sự hoán đổi, thâm nhập qua lại chặt chẽ giữa các nhà tài phiệt và giới chính khách tư sản, hình thành liên minh quyền lực chi phối chính sách quốc gia."
  },
  {
    "id": 116,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Tính đồng bộ của thể chế kinh tế thị trường định hướng XHCN đòi hỏi phát triển những loại thị trường nào?",
    "options": [
      "Chỉ phát triển thị trường hàng hóa tiêu dùng",
      "Phát triển đồng bộ thị trường hàng hóa - dịch vụ, thị trường vốn/tài chính, thị trường lao động, thị trường bất động sản và thị trường khoa học - công nghệ",
      "Chỉ chú trọng phát triển thị trường bất động sản",
      "Đóng cửa thị trường tài chính"
    ],
    "correct": 1,
    "explanation": "Thể chế KTTT hoàn chỉnh đòi hỏi phát triển đồng bộ và vận hành lành mạnh tất cả các phân khúc thị trường: hàng hóa dịch vụ, tài chính tiền tệ, lao động, đất đai bất động sản và KH-CN."
  },
  {
    "id": 117,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Trong quan hệ lợi ích giữa người lao động và người sử dụng lao động, tính mâu thuẫn thể hiện rõ nhất ở điểm nào?",
    "options": [
      "Cả hai cùng muốn công ty phát triển mở rộng",
      "Mâu thuẫn trong việc phân chia giá trị mới tạo ra: người sử dụng lao động muốn tối đa hóa lợi nhuận trong khi người lao động muốn tăng tiền lương và phúc lợi",
      "Mâu thuẫn trong việc chọn lựa mẫu mã bao bì",
      "Cả hai cùng từ chối nộp thuế cho nhà nước"
    ],
    "correct": 1,
    "explanation": "Mâu thuẫn trực tiếp: Giá trị mới $v + m$ được phân chia giữa tiền lương ($v$) của công nhân và lợi nhuận ($m$) của chủ. Lợi ích bên này tăng lên thường dẫn đến áp lực giảm tỷ phần bên kia nếu năng suất không tăng."
  },
  {
    "id": 118,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Để giải quyết hài hòa quan hệ lợi ích giữa cá nhân, doanh nghiệp và xã hội, công cụ nào sau đây là quan trọng nhất của Nhà nước?",
    "options": [
      "Tịch thu tài sản của các doanh nghiệp kinh doanh có lãi",
      "Chính sách phân phối lại thông qua thuế (thuế thu nhập lũy tiến) kết hợp với các chương trình an sinh xã hội, phúc lợi công cộng",
      "Cấm cạnh tranh giữa các doanh nghiệp tư nhân",
      "Phát tiền mặt trực tiếp hàng ngày cho người dân"
    ],
    "correct": 1,
    "explanation": "Nhà nước sử dụng công cụ tài khóa (thuế lũy tiến) để điều tiết một phần thu nhập của người giàu và doanh nghiệp, tái đầu tư vào hạ tầng, y tế, giáo dục và trợ cấp an sinh xã hội cho người nghèo."
  },
  {
    "id": 119,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Cuộc Cách mạng công nghiệp lần thứ hai (CMCN 2.0) diễn ra trong khoảng thời gian nào và gắn liền với thành tựu đột phá nào?",
    "options": [
      "Thế kỷ XV, gắn với kỹ thuật in ấn",
      "Nửa cuối thế kỷ XIX đến đầu thế kỷ XX, gắn với phát minh điện năng, động cơ đốt trong và dây chuyền sản xuất hàng loạt",
      "Những năm 1970, gắn với trí tuệ nhân tạo",
      "Đầu thế kỷ XXI, gắn với mạng xã hội"
    ],
    "correct": 1,
    "explanation": "CMCN lần thứ hai (cuối TK XIX - đầu TK XX) đặc trưng bởi việc sử dụng năng lượng điện, động cơ đốt trong và phương thức tổ chức sản xuất dây chuyền chuyên môn hóa quy mô lớn của Henry Ford."
  },
  {
    "id": 120,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Cuộc Cách mạng công nghiệp lần thứ ba (CMCN 3.0) còn được gọi là gì?",
    "options": [
      "Cách mạng cơ khí",
      "Cách mạng kỹ thuật số hay Cách mạng máy tính và thông tin",
      "Cách mạng năng lượng nguyên tử thuần túy",
      "Cách mạng nông nghiệp hữu cơ"
    ],
    "correct": 1,
    "explanation": "CMCN lần thứ ba (từ những năm 1960 - cuối TK XX) còn gọi là Cách mạng kỹ thuật số, gắn liền với máy tính điện tử, bóng bán dẫn, internet và tự động hóa điều khiển."
  },
  {
    "id": 121,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Trong nền kinh tế tri thức, tài sản quý giá nhất và là động lực quan trọng nhất quyết định năng lực cạnh tranh là gì?",
    "options": [
      "Tài nguyên đất đai và dầu mỏ dồi dào",
      "Tri thức, kỹ năng, thông tin và năng lực sáng tạo của con người",
      "Số lượng nhà xưởng cơ khí nặng",
      "Lượng dự trữ vàng miếng trong kho"
    ],
    "correct": 1,
    "explanation": "Trong kinh tế tri thức, vốn tri thức (con người, dữ liệu, sở hữu trí tuệ, công nghệ sáng tạo) vượt lên trên tư bản vật chất và đất đai để trở thành nguồn lực quyết định giá trị gia tăng."
  },
  {
    "id": 122,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO) vào năm nào?",
    "options": [
      "Năm 1995",
      "Năm 2000",
      "Năm 2007",
      "Năm 2015"
    ],
    "correct": 2,
    "explanation": "Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO) vào ngày 11/01/2007, đánh dấu bước hội nhập sâu rộng vào kinh tế toàn cầu."
  },
  {
    "id": 123,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Quy chế Đãi ngộ quốc gia (National Treatment - NT) trong thương mại quốc tế quy định điều gì?",
    "options": [
      "Dành cho hàng hóa của một nước ưu đãi đặc biệt hơn tất cả các nước khác",
      "Hàng hóa, dịch vụ và nhà đầu tư nước ngoài sau khi vào thị trường nội địa phải được đối xử công bằng, bình đẳng không kém gì hàng hóa, dịch vụ trong nước",
      "Nhà nước được quyền đánh thuế hàng ngoại cao gấp 10 lần",
      "Miễn kiểm dịch toàn bộ hàng hóa nước ngoài"
    ],
    "correct": 1,
    "explanation": "Quy chế Đãi ngộ quốc gia (NT) yêu cầu: Hàng hóa/dịch vụ nhập khẩu khi đã qua cửa khẩu vào thị trường nội địa thì phải chịu các khoản thuế nội địa và điều kiện kinh doanh hoàn toàn bình đẳng với hàng nội địa."
  },
  {
    "id": 124,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Các hiệp định thương mại tự do thế hệ mới mà Việt Nam tham gia gần đây (như CPTPP, EVFTA) có điểm khác biệt nổi bật gì so với các FTA truyền thống?",
    "options": [
      "Chỉ đàm phán về việc cắt giảm thuế nhập khẩu hàng dệt may",
      "Phạm vi bao quát toàn diện, cắt giảm gần như 100% thuế quan và kèm theo các cam kết tiêu chuẩn cao về lao động, môi trường, sở hữu trí tuệ và mua sắm công",
      "Không yêu cầu bất kỳ cam kết pháp lý nào",
      "Chỉ dành riêng cho các doanh nghiệp nhà nước"
    ],
    "correct": 1,
    "explanation": "FTA thế hệ mới (CPTPP, EVFTA) là các hiệp định tiêu chuẩn cao: mở cửa thị trường sâu rộng (gần 100% dòng thuế) và bao gồm các quy định phi truyền thống (lao động, công đoàn, môi trường, minh bạch mua sắm công, thương mại điện tử)."
  },
  {
    "id": 125,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Mối quan hệ biện chứng giữa 'Xây dựng nền kinh tế độc lập, tự chủ' và 'Hội nhập kinh tế quốc tế' được thể hiện như thế nào?",
    "options": [
      "Đối lập và triệt tiêu lẫn nhau, muốn độc lập tự chủ thì phải đóng cửa",
      "Thống nhất và bổ trợ cho nhau: Kinh tế độc lập tự chủ là điểm tựa vững chắc để hội nhập tự tin, bình đẳng; ngược lại hội nhập giúp gia tăng sức mạnh nội lực và nâng cao độc lập tự chủ",
      "Hội nhập quốc tế sẽ làm biến mất hoàn toàn tính độc lập tự chủ",
      "Chỉ có các nước nghèo mới cần xây dựng kinh tế độc lập tự chủ"
    ],
    "correct": 1,
    "explanation": "Đây là mối quan hệ biện chứng hữu cơ: Độc lập tự chủ giúp hội nhập không bị hòa tan, không bị lệ thuộc; ngược lại hội nhập hiệu quả giúp mở rộng không gian phát triển, tăng cường sức mạnh kinh tế quốc gia."
  },
  {
    "id": 126,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Hình thức phân phối theo lao động trong nền KTTT định hướng XHCN ở Việt Nam dựa trên căn cứ nào?",
    "options": [
      "Số lượng và chất lượng lao động đã cống hiến cho xã hội",
      "Mức độ quan hệ họ hàng thân tộc với người quản lý",
      "Nhu cầu tiêu dùng chủ quan của mỗi cá nhân",
      "Tuổi tác và thâm niên sinh sống tại địa phương"
    ],
    "correct": 0,
    "explanation": "Phân phối theo kết quả lao động căn cứ vào số lượng và chất lượng lao động mà người đó đóng góp cho sản xuất: làm nhiều hưởng nhiều, làm ít hưởng ít, có sức lao động mà không làm thì không hưởng."
  },
  {
    "id": 127,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Điểm khác biệt cơ bản giữa 'Nhóm lợi ích chính đáng' và 'Nhóm lợi ích tiêu cực' là gì?",
    "options": [
      "Nhóm lợi ích chính đáng hoạt động hợp pháp, gắn lợi ích nhóm với lợi ích chung của xã hội; nhóm lợi ích tiêu cực câu kết trục lợi chính sách, làm tổn hại lợi ích quốc gia",
      "Nhóm lợi ích chính đáng có nhiều thành viên hơn",
      "Nhóm lợi ích tiêu cực do các tập đoàn nước ngoài thành lập",
      "Hai nhóm này hoàn toàn giống nhau về bản chất kinh tế"
    ],
    "correct": 0,
    "explanation": "Nhóm lợi ích chính đáng (như các hội nghề nghiệp, hiệp hội doanh nghiệp) liên kết công khai, hợp pháp, đóng góp cho cộng đồng; còn nhóm lợi ích tiêu cực là sự móc ngoặc ngầm nhằm tham nhũng, lũng đoạn chính sách vì lợi ích cục bộ."
  },
  {
    "id": 128,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Thỏa ước lao động tập thể và việc định kỳ nâng mức lương tối thiểu vùng là biểu hiện thực tiễn của nội dung nào?",
    "options": [
      "Triệt tiêu hoàn toàn sự cạnh tranh giữa các doanh nghiệp",
      "Sự can thiệp của Nhà nước và tổ chức Công đoàn nhằm bảo đảm hài hòa lợi ích giữa người lao động và người sử dụng lao động",
      "Xóa bỏ hình thức phân phối theo lao động",
      "Khuyến khích các cuộc đình công tự phát"
    ],
    "correct": 1,
    "explanation": "Thỏa ước lao động tập thể và quy định mức lương tối thiểu vùng là công cụ pháp lý và xã hội để bảo vệ quyền lợi người lao động, tạo sự cân bằng và hài hòa trong quan hệ lợi ích với chủ sử dụng lao động."
  },
  {
    "id": 129,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Vì sao quá trình CNH, HĐH ở Việt Nam hiện nay bắt buộc phải gắn liền với bảo vệ môi trường và phát triển bền vững?",
    "options": [
      "Để tránh nguy cơ biến đất nước thành bãi thải công nghệ và đảm bảo cho sự phát triển lâu dài của các thế hệ mai sau",
      "Vì các nước phát triển cấm sản xuất công nghiệp",
      "Vì công nghiệp hóa không cần đến năng lượng",
      "Để ưu tiên ngân sách cho nhập khẩu hàng tiêu dùng"
    ],
    "correct": 0,
    "explanation": "Phát triển bền vững đòi hỏi kết hợp hài hòa giữa tăng trưởng kinh tế, công bằng xã hội và bảo vệ môi trường, kiên quyết 'không đánh đổi môi trường lấy tăng trưởng kinh tế đơn thuần'."
  },
  {
    "id": 130,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Trong thương mại quốc tế, Thỏa thuận Thương mại Ưu đãi (PTA) khác Khu vực Mậu dịch Tự do (FTA) ở điểm nào?",
    "options": [
      "PTA chỉ giảm thuế quan đối với một số danh mục hàng hóa nhất định; còn FTA hướng tới xóa bỏ thuế quan đối với hầu hết các dòng hàng hóa",
      "PTA áp dụng chung cho toàn thế giới, FTA chỉ áp dụng cho 2 nước",
      "PTA do WTO ký kết, FTA do Liên Hợp Quốc ký kết",
      "PTA xóa bỏ hoàn toàn biên giới hải quan"
    ],
    "correct": 0,
    "explanation": "PTA (Preferential Trade Agreement) là cấp độ hội nhập sơ khai, chỉ giảm thuế cho một số mặt hàng ưu tiên; còn FTA (Free Trade Area) có mức độ tự do hóa cao hơn, tiến tới xóa bỏ hầu hết các hàng rào thuế quan và phi thuế quan."
  },
  {
    "id": 131,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Quy chế Tối huệ quốc (Most Favoured Nation - MFN) trong WTO mang lại ý nghĩa quan trọng gì cho các nước đang phát triển như Việt Nam?",
    "options": [
      "Được miễn giảm thuế xuất khẩu sang mọi thị trường mà không cần điều kiện",
      "Bảo đảm hàng hóa của Việt Nam được đối xử bình đẳng, không bị phân biệt đối xử bất lợi so với hàng hóa của bất kỳ quốc gia thành viên nào khác",
      "Cho phép Việt Nam độc quyền định giá hàng nông sản thế giới",
      "Bảo hộ tuyệt đối các doanh nghiệp trong nước khỏi cạnh tranh"
    ],
    "correct": 1,
    "explanation": "MFN bảo đảm nguyên tắc không phân biệt đối xử giữa các nước thành viên: nếu một nước dành ưu đãi thuế quan cho một nước thành viên thì ưu đãi đó tự động áp dụng bình đẳng cho Việt Nam."
  },
  {
    "id": 132,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Để không bị rơi vào 'Bẫy thu nhập trung bình', quá trình CNH, HĐH ở Việt Nam cần tập trung chuyển đổi động lực tăng trưởng sang yếu tố nào?",
    "options": [
      "Tiếp tục khai thác tài nguyên khoáng sản thô",
      "Tập trung thâm dụng lao động giá rẻ và lắp ráp gia công giản đơn",
      "Đổi mới sáng tạo, ứng dụng khoa học công nghệ, phát triển kinh tế số và nâng cao chất lượng nguồn nhân lực",
      "Tăng cường vay nợ nước ngoài để đầu tư bất động sản"
    ],
    "correct": 2,
    "explanation": "Để vượt bẫy thu nhập trung bình, nền kinh tế phải chuyển từ mô hình tăng trưởng dựa vào vốn và lao động giá rẻ sang mô hình dựa vào năng suất các nhân tố tổng hợp (TFP), đổi mới sáng tạo và công nghệ cao."
  },
  {
    "id": 133,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Yếu tố nào được Đảng ta xác định là trung tâm, chủ thể, nguồn lực quan trọng nhất và là mục tiêu của sự phát triển trong quá trình CNH, HĐH?",
    "options": [
      "Vốn đầu tư trực tiếp nước ngoài (FDI)",
      "Con người (nguồn lực con người)",
      "Công nghệ thông tin và trí tuệ nhân tạo",
      "Hệ thống đường cao tốc và sân bay"
    ],
    "correct": 1,
    "explanation": "Đại hội XIII của Đảng nhấn mạnh: Con người là trung tâm, chủ thể, nguồn lực quan trọng nhất và là mục tiêu của sự phát triển; phát triển nguồn nhân lực chất lượng cao là khâu đột phá chiến lược của CNH, HĐH."
  },
  {
    "id": 134,
    "chapter": 6,
    "part": "ch5_6",
    "question": "Nghị quyết số 29-NQ/TW của Hội nghị Trung ương 6 khóa XIII (tháng 11/2022) ban hành về chủ đề chiến lược nào?",
    "options": [
      "Chiến lược phát triển thị trường chứng khoán Việt Nam",
      "Tiếp tục đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước đến năm 2030, tầm nhìn đến năm 2045",
      "Chiến lược cải cách tiền lương và bảo hiểm xã hội",
      "Chính sách phát triển nhà ở xã hội cho công nhân"
    ],
    "correct": 1,
    "explanation": "Nghị quyết số 29-NQ/TW (ngày 17/11/2022) chuyên đề về 'Tiếp tục đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước đến năm 2030, tầm nhìn đến năm 2045' nhằm tạo bứt phá đưa nước ta trở thành nước phát triển, có thu nhập cao."
  },
  {
    "id": 135,
    "chapter": 5,
    "part": "ch5_6",
    "question": "Kinh tế tập thể (mà nòng cốt là các hợp tác xã kiểu mới) trong nền KTTT định hướng XHCN ở Việt Nam có vị trí như thế nào?",
    "options": [
      "Là thành phần kinh tế chiếm tỷ trọng lớn nhất trong GDP",
      "Cùng với kinh tế nhà nước ngày càng trở thành nền tảng vững chắc của nền kinh tế quốc dân",
      "Chỉ tồn tại ở vùng sâu, vùng xa",
      "Là mô hình tạm thời trước khi tư nhân hóa hoàn toàn"
    ],
    "correct": 1,
    "explanation": "Cương lĩnh và các Văn kiện Đại hội Đảng khẳng định: Kinh tế nhà nước cùng với kinh tế tập thể ngày càng trở thành nền tảng vững chắc của nền kinh tế quốc dân."
  }
];
