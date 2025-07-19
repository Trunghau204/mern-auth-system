#  PROJECT_STRUCTURE.md

Cấu trúc thư mục của dự án `mern-auth-system/` gồm 2 phần chính: `client` (frontend) và `server` (backend). Dưới đây là cấu trúc chi tiết:

```plaintext
mern-auth-system/
├── client/                          # Frontend - React + Vite
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/                  # Hình ảnh, biểu tượng, file tĩnh
│   │   ├── components/             # Thành phần giao diện dùng lại
│   │   │   ├── Header.jsx
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx      # Quản lý trạng thái app (context API)
│   │   ├── pages/                  # Các trang chính
│   │   │   ├── EmailVerify.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── ResetPassword.jsx
│   │   ├── routes/
│   │   │   └── PrivateRoutes.jsx   # Bảo vệ route
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── README.md
│
├── server/                          # Backend - Node.js + Express + MongoDB
│   ├── node_modules/
│   ├── config/                      # Cấu hình DB, email, ..
│   │   ├── emailTemplates.js
│   │   ├── mongodb.js
│   │   └── nodemailer.js
│   ├── controller/                 # Xử lý logic API
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/                 # Middleware (JWT, error handler, etc.)
│   │   └── userAuth.js
│   ├── models/                     # Mongoose models
│   │   └── userModel.js
│   ├── routes/                     # Định tuyến
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js                   # Điểm khởi động ứng dụng backend
│
├── README.md                       # Mô tả dự án tổng thể
└── PROJECT_STRUCTURE.md            # File mô tả cấu trúc này
```