import {
  ASSIGNMENT_ERROR,
  AUTOMATIC_COMPLAINT_ASSIGNMENT,
  RESET_AUTOMATIC_COMPLETE,
} from "../Constants/AutomaticComplain";

const initialState = {
  messageData: "",
  error: null,
};

// Reducer for complaint assignment
export const AutomaticComplaintReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTOMATIC_COMPLAINT_ASSIGNMENT:
      return {
        ...state,
        messageData: action.payload,
      };
    case ASSIGNMENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case RESET_AUTOMATIC_COMPLETE:
      return {
        messageData: "",
        error: null,
      };

    default:
      return state;
  }
};
