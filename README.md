# MERN Authentication System 

A full-stack MERN (MongoDB, Express.js, React, Node.js) application featuring secure user authentication with JSON Web Tokens (JWT), email verification, and password reset functionality. This project demonstrates‌ a robust authentication system with a clean and responsive UI, built following best practices and Git Flow for version control.

---

##  Features

- **User Registration and Login**: Secure user signup and login with JWT-based authentication.
- **Email Verification**: OTP-based email verification for new accounts.
- **Password Reset**: Secure password reset via OTP sent to the user's email.
- **Protected Routes**: JWT middleware ensures only authenticated users access protected routes.
- **Responsive UI**: A clean and modern React-based frontend with Tailwind CSS for styling.
- **Toast Notifications**: User-friendly feedback using `react-toastify`.
- **Environment Variables**: Secure management of sensitive data (e.g., JWT secret, email credentials).

---

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Axios, React Toastify
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT), bcrypt for password hashing
- **Email Service**: Nodemailer for sending OTP emails
- **Version Control**: Git with Git Flow branching strategy

---

##  Project Structure

The project is divided into two main folders:

- `client/`: React + Vite frontend
- `server/`: Node.js + Express backend

> See [`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md) for full structure breakdown.

---

##  Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-username/mern-auth-system.git
cd mern-auth-system
```

### 2. Install dependencies

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 3. Set Up Environment Variables:

Create a `.env` file in the `server/` directory with the following:
```bash
VITE_BACKEND_URL=http://localhost:5000 (custom)
JWT_SECRET=your_jwt_secret
SENDER_EMAIL=your_email@gmail.com
SENDER_PASSWORD=your_email_password
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the project

```bash
# In root folder, open 2 terminals or use concurrently
# Run frontend
cd client
npm run dev

# Run backend
cd ../server
nodemon server.js
```
### 5. Access the Application:

Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

---


##  Usage

- **Sign Up**: Create a new account by providing a name, email, and password. An OTP will be sent to your email for verification.
- **Email Verification**: Enter the 6-digit OTP sent to your email to verify your account.
- **Login**: Log in with your email and password after verification.
- **Password Reset**: Request a password reset OTP and set a new password if you forget your password.
- **Protected Routes**: Access protected routes (e.g., user data) only after logging in.

---

##  License

This project is licensed under the MIT License. See the `LICENSE` file for more info.

---

## Contact
For questions or feedback, reach out to tranhau5065@gmail.com