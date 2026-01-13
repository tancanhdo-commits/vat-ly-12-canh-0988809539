Create a Physics 12 lesson aligned with Vietnamese knowledge and skills standards.

Subject: Physics
Grade: 12
Unit (Chapter): {{unit}}
Lesson: {{lesson}}

Requirements:
- Follow Vietnamese high school Physics 12 curriculum
- Emphasize core knowledge, skills, and exam-oriented thinking
- Include worked examples with clear step-by-step solutions

Output STRICTLY in JSON format with the following structure:

{
  "metadata": {
    "subject": "Vật lí",
    "grade": "12",
    "unit": "{{unit}}",
    "lesson": "{{lesson}}",
    "orientation": "Chuẩn kiến thức – kĩ năng & luyện thi THPT"
  },
  "slides": [
    {
      "slide_type": "theory",
      "title": "Kiến thức trọng tâm",
      "content": [
        {
          "concept": "Tên khái niệm",
          "definition": "Định nghĩa ngắn gọn, chính xác",
          "formula": "Công thức chuẩn",
          "units": "Đơn vị",
          "note": "Lưu ý thường gặp trong bài thi"
        }
      ]
    },
    {
      "slide_type": "exam_skills",
      "title": "Kĩ năng giải bài tập",
      "content": [
        "Nhận dạng dạng bài",
        "Công thức cần áp dụng",
        "Sai lầm học sinh hay mắc"
      ]
    },
    {
      "slide_type": "worked_example",
      "title": "Bài tập thực chiến 1",
      "content": {
        "question": "Đề bài dạng thi THPT, có số liệu cụ thể",
        "analysis": "Phân tích hiện tượng vật lí và hướng giải",
        "solution_steps": [
          "Bước 1: Xác định đại lượng đã cho và cần tìm",
          "Bước 2: Viết công thức áp dụng",
          "Bước 3: Thay số và tính toán",
          "Bước 4: Kết luận"
        ],
        "final_answer": "Đáp án cuối cùng, đúng đơn vị"
      }
    },
    {
      "slide_type": "worked_example",
      "title": "Bài tập thực chiến 2",
      "content": {
        "question": "Bài toán mức vận dụng hoặc vận dụng cao",
        "analysis": "Nhận xét mấu chốt của bài toán",
        "solution_steps": [
          "Lập luận vật lí",
          "Biến đổi công thức",
          "Tính toán"
        ],
        "final_answer": "Đáp án"
      }
    },
    {
      "slide_type": "practice",
      "title": "Bài tập tự luyện",
      "content": [
        {
          "level": "Thông hiểu",
          "question": "Câu hỏi hoặc bài toán"
        },
        {
          "level": "Vận dụng",
          "question": "Câu hỏi hoặc bài toán"
        }
      ]
    },
    {
      "slide_type": "summary",
      "title": "Tổng kết – ghi nhớ",
      "content": [
        "Công thức bắt buộc nhớ",
        "Dạng bài trọng tâm trong đề thi"
      ]
    }
  ]
}

Rules:
- Output ONLY valid JSON
- No markdown, no emojis, no explanations outside JSON
- All Physics content must be correct and exam-oriented
- Calculations must be logically consistent
- Suitable for direct rendering into Canva slides