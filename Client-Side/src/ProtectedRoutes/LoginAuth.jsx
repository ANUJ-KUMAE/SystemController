import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LoginAuth = () => {
  const { isAuthenticated, AuthUsers } = useSelector((state) => state.AuthData);

  return isAuthenticated && AuthUsers ? <Outlet /> : <Navigate to="/" />;
};

export default LoginAuth;
