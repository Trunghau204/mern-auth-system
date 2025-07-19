import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import EmailVerify from "./pages/EmailVerify.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/email-verify"
          element={
            <PrivateRoutes>
              <EmailVerify />
            </PrivateRoutes>
          }
        />
        <Route
          path="/reset-password"
          element={
            <PrivateRoutes>
              <ResetPassword />
            </PrivateRoutes>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoutes allowHomeWithoutAuth={true}>
              <Home />
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
