import axios from "axios";
import {
  ASSIGNMENT_ERROR,
  AUTOMATIC_COMPLAINT_ASSIGNMENT,
} from "../Constants/AutomaticComplain";
import { toast } from "react-toastify";

export const automaticComplaintAssignment = () => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://system-controllerapi.vercel.app/Api/AutoComplaint/assign-complaints"
    );

    dispatch({
      type: AUTOMATIC_COMPLAINT_ASSIGNMENT,
      payload: data.message,
    });

    toast.success(data.message);
  } catch (error) {
    console.error(error);
    dispatch({
      type: ASSIGNMENT_ERROR,
      payload: error.response,
    });
  }
};
