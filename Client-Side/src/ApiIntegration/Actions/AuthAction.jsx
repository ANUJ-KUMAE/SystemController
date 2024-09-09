import axios from "axios";
import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_DETAILS_FAIL,
  LOGIN_USER_DETAILS_SUCCESS,
  LOGIN_USER_DETAILS_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_DETAILS,
  ALL_REGISTERED_USERS_FAIL,
  ALL_REGISTERED_USERS_REQUEST,
  ALL_REGISTERED_USERS_SUCCESS,
  GET_USER_SINGLE_DATA_REQUEST,
  GET_USER_SINGLE_DATA_SUCCESS,
  GET_USER_SINGLE_DATA_FAIL,
} from "../Constants/LoginSignupConstant";

import { toast } from "react-toastify";

export const Registeruser =
  (userName, email, phone, password, userType) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://system-controllerapi.vercel.app/Api/Auth/RegisterUser",
        { userName, email, phone, password, userType },
        config
      );

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: data.createUser,
      });
      localStorage.setItem("Token", data.token);
      toast.success(data.message);
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response,
      });
    }
  };

export const LoginUser = (email, password, userType) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://system-controllerapi.vercel.app/Api/Auth/LoginUser",
      { email, password, userType },
      config
    );

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data.loginUser,
    });
    localStorage.setItem("Token", data.token);
    toast.success(data.success);
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response,
    });
  }
};

export const UserProfile = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("Token");
    const AuthorizationToken = `Bearer ${token}`;

    dispatch({ type: LOGIN_USER_DETAILS_REQUEST });

    const configData = {
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthorizationToken,
      },
    };

    const { data } = await axios.get(
      "https://system-controllerapi.vercel.app/Api/Auth/loginuser/Data",
      configData
    );

    dispatch({
      type: LOGIN_USER_DETAILS_SUCCESS,
      payload: data.currentUser,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_DETAILS_FAIL,
      payload: error.response,
    });
  }
};

export const Logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("Token");

    dispatch({ type: LOGOUT_SUCCESS });

    toast.success("Logout Successfully");
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response,
    });
  }
};

export const ClearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_DETAILS,
  });
};

export const AllRegisteredElectricianAction = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("Token");
    const AuthorizationToken = `Bearer ${token}`;

    dispatch({ type: ALL_REGISTERED_USERS_REQUEST });

    const configData = {
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthorizationToken,
      },
    };

    const { data } = await axios.get(
      "https://system-controllerapi.vercel.app/Api/Auth/Allusers",
      configData
    );

    dispatch({
      type: ALL_REGISTERED_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_REGISTERED_USERS_FAIL,
      payload: error.response,
    });
  }
};

export const GetSingleUserAction = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("Token");
    const AuthorizationToken = `Bearer ${token}`;

    dispatch({ type: GET_USER_SINGLE_DATA_REQUEST });

    const configData = {
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthorizationToken,
      },
    };

    const { data } = await axios.get(
      `https://system-controllerapi.vercel.app/Api/Auth/register/user/singleData/${id}`,
      configData
    );

    dispatch({
      type: GET_USER_SINGLE_DATA_SUCCESS,
      payload: data.SingleData,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_SINGLE_DATA_FAIL,
      payload: error.response,
    });
  }
};
