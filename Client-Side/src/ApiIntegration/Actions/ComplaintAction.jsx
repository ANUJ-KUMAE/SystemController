import axios from "axios";
import {
  CLEAR_COMPLAINT_ADD_ERROR,
  COMPLAINT_ADD_FAIL,
  COMPLAINT_ADD_REQUEST,
  COMPLAINT_ADD_SUCCESS,
  COMPLAINT_DELETE_FAIL,
  COMPLAINT_DELETE_REQUEST,
  COMPLAINT_DELETE_SUCCESS,
  GET_COMPLAINT_DATA_FAIL,
  GET_COMPLAINT_DATA_REQUEST,
  GET_COMPLAINT_DATA_SUCCESS,
  GET_COMPLAINT_SINGLE_DATA_FAIL,
  GET_COMPLAINT_SINGLE_DATA_REQUEST,
  GET_COMPLAINT_SINGLE_DATA_SUCCESS,
} from "../Constants/ComplaintConstants";
import { toast } from "react-toastify";

export const AddComplaintAction =
  (customerName, customerAddress, category, description, mobile) =>
  async (dispatch) => {
    try {
      const token = localStorage.getItem("Token");
      const AuthorizationToken = `Bearer ${token}`;

      dispatch({ type: COMPLAINT_ADD_REQUEST });

      const configData = {
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthorizationToken,
        },
      };

      const { data } = await axios.post(
        "https://system-controllerapi.vercel.app/Api/Customer/create/complaint",
        { customerName, customerAddress, category, description, mobile },
        configData
      );

      dispatch({
        type: COMPLAINT_ADD_SUCCESS,
        payload: data.CreateComplaint,
      });

      toast.success(data.message);
    } catch (error) {
      dispatch({
        type: COMPLAINT_ADD_FAIL,
        payload: error.response,
      });
    }
  };

export const GetAllCompaintDataAction = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("Token");
    const AuthorizationToken = `Bearer ${token}`;

    dispatch({ type: GET_COMPLAINT_DATA_REQUEST });

    const configData = {
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthorizationToken,
      },
    };

    const { data } = await axios.get(
      "https://system-controllerapi.vercel.app/Api/Customer/All/Complaint",
      configData
    );

    dispatch({
      type: GET_COMPLAINT_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMPLAINT_DATA_FAIL,
      payload: error.response,
    });
  }
};

export const GetSingleComplaintAction = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("Token");
    const AuthorizationToken = `Bearer ${token}`;

    dispatch({ type: GET_COMPLAINT_SINGLE_DATA_REQUEST });

    const configData = {
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthorizationToken,
      },
    };

    const { data } = await axios.get(
      `https://system-controllerapi.vercel.app/Api/Customer/get/SingleComplaint/${id}`,
      configData
    );

    dispatch({
      type: GET_COMPLAINT_SINGLE_DATA_SUCCESS,
      payload: data.SingleData,
    });
  } catch (error) {
    dispatch({
      type: GET_COMPLAINT_SINGLE_DATA_FAIL,
      payload: error.response,
    });
  }
};

export const ClearAddComplaintError = () => async (dispatch) => {
  dispatch({ type: CLEAR_COMPLAINT_ADD_ERROR });
};

export const DeleteComplaintAction = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("Token");
    const AuthorizationToken = `Bearer ${token}`;

    dispatch({ type: COMPLAINT_DELETE_REQUEST });

    const configData = {
      headers: {
        Authorization: AuthorizationToken,
      },
    };

    const { data } = await axios.delete(
      `https://system-controllerapi.vercel.app/Api/Customer/delete/complaint/${id}`,
      configData
    );

    dispatch({
      type: COMPLAINT_DELETE_SUCCESS,
      payload: data.DeletedComplaint,
    });

    //toast.success(data.message)
  } catch (error) {
    dispatch({
      type: COMPLAINT_DELETE_FAIL,
      payload: error.response,
    });
  }
};
