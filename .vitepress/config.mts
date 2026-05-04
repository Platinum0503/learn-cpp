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
          { text: 'Tổng quan C++', link: '/docs/cpp/tong-quan' },
          { text: 'Biến & Kiểu dữ liệu', link: '/docs/cpp/bien-kieu-du-lieu' },
          { text: 'Câu lệnh điều kiện', link: '/docs/cpp/dieu-kien' },
          { text: 'Vòng lặp', link: '/docs/cpp/vong-lap' },
          { text: 'Hàm', link: '/docs/cpp/ham' },
          { text: 'Mảng', link: '/docs/cpp/mang' },
        ]
      },
      {
        text: 'Nâng cao',
        items: [
          { text: 'Con trỏ (Pointer)', link: '/docs/cpp/pointer' },
          { text: 'OOP - Class & Object', link: '/docs/cpp/oop-class' },
          { text: 'Kế thừa', link: '/docs/cpp/ke-thua' },
          { text: 'Đa hình', link: '/docs/cpp/da-hinh' },
          { text: 'Template', link: '/docs/cpp/template' },
          { text: 'STL cơ bản', link: '/docs/cpp/stl' },
        ]
      },
      {
        text: 'Thực hành',
        items: [
          { text: 'Ví dụ thực tế', link: '/docs/cpp/vi-du' },
          { text: 'Câu hỏi thường gặp', link: '/docs/cpp/faq' },
        ]
      }
    ],
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})