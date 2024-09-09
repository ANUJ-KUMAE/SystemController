import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserProfile } from "../../ApiIntegration/Actions/AuthAction";

const LoadUser = ({ children }) => {
  const dispatch  = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (token) {
      dispatch(UserProfile());
    }
  }, []);

  return children;
};

export default LoadUser;
