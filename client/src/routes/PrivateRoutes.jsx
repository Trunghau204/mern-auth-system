import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const PrivateRoutes = ({ children, allowHomeWithoutAuth = false }) => {
  const { isLoggedIn, setIsLoggedIn, backendUrl, getUserData } =
    useContext(AppContent);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const location = useLocation();

  useEffect(() => {
    // Skip authentication check for the home route if allowHomeWithoutAuth is true
    if (allowHomeWithoutAuth && location.pathname === "/") {
      setIsAuthenticated(true);
      setIsLoading(false);
      return;
    }

    const checkAuth = async () => {
      try {
        axios.defaults.withCredentials = true;
        const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`);
        if (data.success) {
          setIsAuthenticated(true);
          setIsLoggedIn(true);
          await getUserData();
        } else {
          setIsAuthenticated(false);
          setIsLoggedIn(false);
          toast.error("Please login to access this page");
        }
      } catch (error) {
        setIsAuthenticated(false);
        setIsLoggedIn(false);
        toast.error(
          error.response?.data?.message || "Please login to access this page"
        );
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [
    backendUrl,
    setIsLoggedIn,
    getUserData,
    location.pathname,
    allowHomeWithoutAuth,
  ]);

  if (isLoading) {
    return <div>Đang tải...</div>;
  }

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
