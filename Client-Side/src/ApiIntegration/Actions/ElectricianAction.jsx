import axios from "axios";
import {
  ELECTRICIAN_DELETE_FAIL,
  ELECTRICIAN_DELETE_REQUEST,
  ELECTRICIAN_DELETE_SUCCESS,
  ELECTRICIAN_REGISTER_FAIL,
  ELECTRICIAN_REGISTER_REQUEST,
  ELECTRICIAN_REGISTER_SUCCESS,
  GET_ELECTRICIAN_DATA_FAIL,
  GET_ELECTRICIAN_DATA_REQUEST,
  GET_ELECTRICIAN_DATA_SUCCESS,
  GET_ELECTRICIAN_SINGLE_DATA_FAIL,
  GET_ELECTRICIAN_SINGLE_DATA_REQUEST,
  GET_ELECTRICIAN_SINGLE_DATA_SUCCESS,
} from "../Constants/ElectricianConstants";
import { toast } from "react-toastify";

export const RegisterElectricianAction =
  (name, contact, electricianId) => async (dispatch) => {
    try {
      const token = localStorage.getItem("Token");
      const AuthorizationToken = `Bearer ${token}`;

      dispatch({ type: ELECTRICIAN_REGISTER_REQUEST });

      const configData = {
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthorizationToken,
        },
      };

      const { data } = await axios.post(
        "http://localhost:8965/Api/Electrician/register/electrician",
        { name, contact, electricianId },
        configData
      );

      dispatch({
        type: ELECTRICIAN_REGISTER_SUCCESS,
        payload: data.CreateElectrician,
      });
      toast.success(data.message);
    } catch (error) {
      dispatch({
        type: ELECTRICIAN_REGISTER_FAIL,
        payload: error.response,
      });
    }
  };

export const AllElectriciandataAction = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("Token");
    const AuthorizationToken = `Bearer ${token}`;

    dispatch({ type: GET_ELECTRICIAN_DATA_REQUEST });

    const configData = {
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthorizationToken,
      },
    };

    const { data } = await axios.get(
      "http://localhost:8965/Api/Electrician/view/electrician",
      configData
    );

    dispatch({
      type: GET_ELECTRICIAN_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ELECTRICIAN_DATA_FAIL,
      payload: error.response,
    });
  }
};

export const SingleElectricianAction = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("Token");
    const AuthorizationToken = `Bearer ${token}`;

    dispatch({ type: GET_ELECTRICIAN_SINGLE_DATA_REQUEST });

    const configData = {
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthorizationToken,
      },
    };

    const { data } = await axios.get(
      `http://localhost:8965/Api/Electrician/electrician/singleDetail/${id}`,
      configData
    );

    dispatch({
      type: GET_ELECTRICIAN_SINGLE_DATA_SUCCESS,
      payload: data.SingleData,
    });
  } catch (error) {
    dispatch({
      type: GET_ELECTRICIAN_SINGLE_DATA_FAIL,
      payload: error.response,
    });
  }
};

export const DeleteComplaintAdminAction = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("Token");
    const AuthorizationToken = `Bearer ${token}`;

    dispatch({ type: ELECTRICIAN_DELETE_REQUEST });

    const configData = {
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthorizationToken,
      },
    };

    const { data } = await axios.delete(
      `http://localhost:8965/Api/Electrician/delete/electrician/${id}`,
      configData
    );

    dispatch({
      type: ELECTRICIAN_DELETE_SUCCESS,
      payload: data.DeletedElectrician,
    });
  } catch (error) {
    dispatch({
      type: ELECTRICIAN_DELETE_FAIL,
      payload: error.response,
    });
  }
};
