import {
  RESET_RESOLVE_COMPLAINT,
  RESOLVE_COMPLAINT_FAILURE,
  RESOLVE_COMPLAINT_REQUEST,
  RESOLVE_COMPLAINT_SUCCESS,
} from "../Constants/ResolveComplaint";

const initialState = {
  loading: false,
  complaintResolved: false,
  messageData: "",
  electricians: [],
  error: null,
};

export const complaintReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESOLVE_COMPLAINT_REQUEST:
      return { ...state, loading: true };
    case RESOLVE_COMPLAINT_SUCCESS:
      return {
        ...state,
        loading: false,
        complaintResolved: true,
        messageData: action.payload,
      };
    case RESOLVE_COMPLAINT_FAILURE:
      return {
        ...state,
        loading: false,
        complaintReducer: false,
        error: action.payload,
      };

    case RESET_RESOLVE_COMPLAINT:
      return {
        loading: false,
        complaintResolved: false,
        messageData: "",
        error: null,
      };

    default:
      return state;
  }
};
