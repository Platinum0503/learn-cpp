import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Learn C++",
  description: "Tài liệu học C++ từ cơ bản đến nâng cao",
  srcDir: 'docs',
  themeConfig: {
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Tác giả', link: '/tac-gia' }
    ],
    sidebar: [
      {
        text: 'Cơ bản',
        items: [
          { text: 'Tổng quan C++', link: '/cpp/tong-quan' },
          { text: 'Biến & Kiểu dữ liệu', link: '/cpp/bien-kieu-du-lieu' },
          { text: 'Câu lệnh điều kiện', link: '/cpp/dieu-kien' },
          { text: 'Vòng lặp', link: '/cpp/vong-lap' },
          { text: 'Hàm', link: '/cpp/ham' },
          { text: 'Mảng', link: '/cpp/mang' },
        ]
      },
      {
        text: 'Nâng cao',
        items: [
          { text: 'Con trỏ (Pointer)', link: '/cpp/pointer' },
          { text: 'OOP - Class & Object', link: '/cpp/oop-class' },
          { text: 'Kế thừa', link: '/cpp/ke-thua' },
          { text: 'Đa hình', link: '/cpp/da-hinh' },
          { text: 'Template', link: '/cpp/template' },
          { text: 'STL cơ bản', link: '/cpp/stl' },
        ]
      },
      {
        text: 'Thực hành',
        items: [
          { text: 'Ví dụ thực tế', link: '/cpp/vi-du' },
          { text: 'Câu hỏi thường gặp', link: '/cpp/faq' },
        ]
      }
    ],
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})