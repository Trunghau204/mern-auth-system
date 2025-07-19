import React, { useContext } from "react";
import image_header from "../assets/images/image-header.png";
import image_waving_hand from "../assets/images/image-waving-hand.png";
import { AppContent } from "../context/AppContext";
const Header = () => {
  const { userData } = useContext(AppContent);
  return (
    <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-800">
      <img
        src={image_header}
        alt="Imgae Header"
        className="w-44 h-44 mb-6 rounded-full"
      />
      <h1 className="flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2">
        Hey {userData ? userData.name : "Developer"}!
        <img
          className="w-8 aspect-square"
          src={image_waving_hand}
          alt="Imgae Waving Hand"
        />
      </h1>
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
        Welcome to our app
      </h2>
      <p className="mb-8 max-w-[600px]">
        Start your journey with a secure and seamless authentication experience.
        Sign up, verify your email, and manage your account with ease.
      </p>
      <button className="border border-gray-500 rounded-full px-8 py-2 hover:bg-gray-100 transition-all">
        Get Started
      </button>
    </div>
  );
};

export default Header;
