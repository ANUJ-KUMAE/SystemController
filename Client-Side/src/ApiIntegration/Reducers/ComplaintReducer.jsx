import {
  CLEAR_COMPLAINT_ADD_ERROR,
  CLEAR_COMPLAINT_DATA_ERROR,
  CLEAR_COMPLAINT_SINGLE_DATA_ERROR,
  COMPLAINT_ADD_FAIL,
  COMPLAINT_ADD_REQUEST,
  COMPLAINT_ADD_SUCCESS,
  COMPLAINT_DELETE_FAIL,
  COMPLAINT_DELETE_REQUEST,
  COMPLAINT_DELETE_RESET,
  COMPLAINT_DELETE_SUCCESS,
  GET_COMPLAINT_DATA_FAIL,
  GET_COMPLAINT_DATA_REQUEST,
  GET_COMPLAINT_DATA_SUCCESS,
  GET_COMPLAINT_SINGLE_DATA_FAIL,
  GET_COMPLAINT_SINGLE_DATA_REQUEST,
  GET_COMPLAINT_SINGLE_DATA_SUCCESS,
  RESET_COMPLAINT_ADD
} from "../Constants/ComplaintConstants";

const AddComplaintinitialState = {
  loading: false,
  AddCustomerComplaint: null,
  complaintAddedSuccess:false,
  error: null,
};

const AllComplaintDataInitialState = {
  loadingData: false,
  AllComplaints: [],
  error: null,
};

const getSingleComplaintInitialState = {
  loadingSingle: false,
  SingleComplaint: null,
  deleteComplaintSuccess: false,
  error: null,
};

export const AddComplaintReducer = (
  state = AddComplaintinitialState,
  action
) => {
  switch (action.type) {
    case COMPLAINT_ADD_REQUEST:
      return {
        loading: true,
        complaintAddedSuccess:false,
      };

    case COMPLAINT_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        AddCustomerComplaint: action.payload,
        complaintAddedSuccess:true,
        error: null
      };

    case COMPLAINT_ADD_FAIL:
      return {
        ...state,
        loading: false,
        AddCustomerComplaint: null,
        complaintAddedSuccess:false,
        error: action.payload
      };

    case CLEAR_COMPLAINT_ADD_ERROR:
      return {
       ...state,
        error: null
      };

    case RESET_COMPLAINT_ADD:
      return {
        loading:false,
        AddCustomerComplaint:null,
        complaintAddedSuccess:false,
        error:null
      }

    default:
      return state;
  }
};

export const AllComplaintReducer = (
  state = AllComplaintDataInitialState,
  action
) => {
  switch (action.type) {
    case GET_COMPLAINT_DATA_REQUEST:
      return {
        ...state,
        loadingData: true,
        AllComplaints: [],
        error: null,
      };

    case GET_COMPLAINT_DATA_SUCCESS:
      return {
        ...state,
        loadingData: false,
        AllComplaints: action.payload.viewAllData,
        error: null,
      };

    case GET_COMPLAINT_DATA_FAIL:
      return {
        ...state,
        loadingData: false,
        AllComplaints: [],
        error: action.payload,
      };

    case CLEAR_COMPLAINT_DATA_ERROR:
      return {
        loadingData: false,
        AllComplaints: [],
        error: null,
      };

    default:
      return state;
  }
};

export const SingleComplaintReducer = (
  state = getSingleComplaintInitialState,
  action
) => {
  switch (action.type) {
    case GET_COMPLAINT_SINGLE_DATA_REQUEST:
    case COMPLAINT_DELETE_REQUEST:
      return {
        ...state,
        loadingSingle: true,
        error: null,
      };

    case GET_COMPLAINT_SINGLE_DATA_SUCCESS:
      return {
        ...state,
        loadingSingle: false,
        SingleComplaint: action.payload,
        error: null,
      };

    case GET_COMPLAINT_SINGLE_DATA_FAIL:
      return {
        ...state,
        loadingSingle: false,
        SingleComplaint: null,
        error: action.payload,
      };

    case COMPLAINT_DELETE_SUCCESS:
      return {
        ...state,
        loadingSingle: false,
        deleteComplaintSuccess: true,
        error: null,
      };

    case COMPLAINT_DELETE_FAIL:
      return {
        ...state,
        loadingSingle: false,
        deleteComplaintSuccess: false,
        error: action.payload,
      };

    case COMPLAINT_DELETE_RESET:
      return {
        loadingSingle: false,
        deleteComplaintSuccess: false,
        error: null,
      };

    case CLEAR_COMPLAINT_SINGLE_DATA_ERROR:
      return {
        loadingSingle: false,
        SingleComplaint: null,
        deleteComplaintSuccess: false,
        error: null,
      };

    default:
      return state;
  }
};
