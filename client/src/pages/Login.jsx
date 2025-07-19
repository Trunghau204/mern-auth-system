import React, { useContext, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import logo from "../assets/images/logo.png";
const Login = () => {
  const nav = useNavigate();
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleVerifyEmail = (userId) => {
    nav("/email-verify", { state: { userId } });
  };

  const checkAuthStatus = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/auth/is-auth", {
        withCredentials: true,
      });
      if (data.success) {
        setIsLoggedin(true);
        await getUserData();
        nav("/");
      } else {
        setIsLoggedin(false);
        toast.error(data.message);
      }
    } catch (error) {
      setIsLoggedin(false);
      toast.error(
        error.response?.data?.message || "Failed to verify login status"
      );
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          toast.success(data.message);
          nav("/email-verify", { state: { userId: data.userId } });
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });
        if (data.success) {
          setIsLoggedin(true);
          toast.success("Login Successful");
          await checkAuthStatus(); // Verify login status
        } else if (
          data.message === "Please verify your email before logging in"
        ) {
          toast.error(
            <div>
              {data.message}
              <button
                onClick={() => handleVerifyEmail(data.userId)}
                className="ml-2 text-blue-400 underline"
              >
                Verify Email
              </button>
            </div>
          );
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || "An error occurred";
      toast.error(errMsg);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <img
        onClick={() => nav("/")}
        src={logo}
        alt="Logo"
        className="absolute left-5 sm:left-20 top-5 w-12 sm:w-32 cursor-pointer"
      />
      <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
        <h2 className="text-3xl font-semibold text-white text-center mb-3">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-center mb-6">
          {state === "Sign Up"
            ? "Create your account"
            : "Login to your account"}
        </p>

        <form onSubmit={onSubmitHandler}>
          {state === "Sign Up" && (
            <div className="flex mb-4 gap-3 items-center w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <IoPersonOutline />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-transparent outline-none text-white"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}
          <div className="flex mb-4 gap-3 items-center w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <MdOutlineEmail />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-transparent outline-none text-white"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex mb-4 gap-3 items-center w-full px-5 py-2.5 rounded-full bg-[#333A5C] relative">
            <IoLockClosed />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-transparent outline-none flex-1 pr-10 text-white"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-300 flex items-center"
            >
              {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
            </button>
          </div>
          <p
            onClick={() => nav("/reset-password")}
            className="mb-4 text-indigo-500 cursor-pointer text-right underline hover:text-indigo-400 transition-all"
          >
            Forgot Password?
          </p>
          <button className="w-full py-2.5 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-900 text-white  hover:from-indigo-400 hover:to-indigo-700 transition-all">
            {state}
          </button>
        </form>
        {state === "Sign Up" ? (
          <p className="text-gray-400 text-center text-xs mt-4">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-400 cursor-pointer underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-gray-400 text-center text-xs mt-4">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-400 cursor-pointer underline"
            >
              Sign up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
