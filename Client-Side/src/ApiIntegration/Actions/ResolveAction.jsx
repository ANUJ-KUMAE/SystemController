import axios from "axios";
import {
  RESOLVE_COMPLAINT_FAILURE,
  RESOLVE_COMPLAINT_REQUEST,
  RESOLVE_COMPLAINT_SUCCESS,
} from "../Constants/ResolveComplaint";
import { toast } from "react-toastify";

export const ResolveComplaintAction = (complaintId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("Token");
    const AuthorizationToken = `Bearer ${token}`;

    dispatch({ type: RESOLVE_COMPLAINT_REQUEST });

    const configData = {
      headers: {
        Authorization: AuthorizationToken,
      },
    };

    const { data } = await axios.put(
      `http://localhost:8965/Api/resolve/electrician/${complaintId}`,
      configData
    );
    dispatch({ type: RESOLVE_COMPLAINT_SUCCESS, payload: data.message });
    toast.success(data.message);
  } catch (error) {
    dispatch({ type: RESOLVE_COMPLAINT_FAILURE, payload: error.response });
  }
};
