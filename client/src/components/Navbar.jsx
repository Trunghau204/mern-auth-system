import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp"
      );
      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true; // Cho phép gửi và nhận cookie từ trình duyệt backend
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      data.suceess && setIsLoggedin(false);
      data.success && setUserData(null);
      toast.success("Logout Successful");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      <img
        src={logo}
        alt="Logo"
        className="left-5 sm:left-20 top-5 w-12 sm:w-32 cursor-pointer"
      />
      {userData ? (
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group ">
          {userData.name[0].toUpperCase()}
          <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
            <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
              {!userData.isAccountVerified && (
                <li
                  onClick={sendVerificationOtp}
                  className="py-1 px-2 hover:bg-gray-200 text-sm cursor-pointer"
                >
                  Verify Email
                </li>
              )}
              <li
                onClick={logout}
                className="py-1 px-2 hover:bg-gray-200 text-sm cursor-pointer pr-10"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 border boder-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all group"
        >
          Login
          <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
