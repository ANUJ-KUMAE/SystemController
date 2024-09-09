import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ClearErrors,
  Registeruser,
} from "../../ApiIntegration/Actions/AuthAction";
import { toast } from "react-toastify";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const UserType = ["Customer", "Electrician", "Admin"];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error } = useSelector((state) => state.AuthData);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      const message = error.data.message;

      if (Array.isArray(message)) {
        message.forEach((msg) => {
          toast.error(msg);
        });
      } else {
        toast.error(message || error.data.extraDetails);
      }

      dispatch(ClearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userName, email, phone, password, userType)
    dispatch(Registeruser(userName, email, phone, password, userType));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              autoComplete="off"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="phone">Mobile:</label>
            <input
              type="number"
              id="phone"
              placeholder="Enter your Mobile"
              autoComplete="off"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              placeholder="Enter your password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="userType">User Type</label>
            <div className="input-type-bullet">
              {UserType.map((type, index) => (
                <div className="Select-User-InputType" key={index}>
                  <input
                    type="radio"
                    value={type}
                    checked={userType === type}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label key={index}>{type}</label>
                </div>
              ))}
            </div>
          </div>

          <button className="login-button">SignUp</button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="/login">Login here</a>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
