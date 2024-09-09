import {
  CLEAR_ERROR,
  CLEAR_REGISTER_ERROR,
  ELECTRICIAN_DELETE_FAIL,
  ELECTRICIAN_DELETE_REQUEST,
  ELECTRICIAN_DELETE_RESET,
  ELECTRICIAN_DELETE_SUCCESS,
  ELECTRICIAN_REGISTER_FAIL,
  ELECTRICIAN_REGISTER_REQUEST,
  ELECTRICIAN_REGISTER_RESET,
  ELECTRICIAN_REGISTER_SUCCESS,
  GET_ELECTRICIAN_DATA_FAIL,
  GET_ELECTRICIAN_DATA_REQUEST,
  GET_ELECTRICIAN_DATA_SUCCESS,
  GET_ELECTRICIAN_SINGLE_DATA_FAIL,
  GET_ELECTRICIAN_SINGLE_DATA_REQUEST,
  GET_ELECTRICIAN_SINGLE_DATA_SUCCESS,
} from "../Constants/ElectricianConstants";

const RegisterElectricianInitianState = {
  loading: false,
  electricianData: null,
  electricianRegisterSuccess: false,
  error: null,
};

const GetAllElectricianInitialState = {
  loadingData: false,
  AllElectriciandata: [],
  deleteuserSeccess: false,
  error: null,
};

const getSingleComplaintInitialState = {
  loadingSingle: false,
  SingleComplaint: null,
  error: null,
};

export const ElectricianRegisterReducer = (
  state = RegisterElectricianInitianState,
  action
) => {
  switch (action.type) {
    case ELECTRICIAN_REGISTER_REQUEST:
      return {
        loading: true,
        electricianData: null,
      };

    case ELECTRICIAN_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        electricianData: action.payload,
        electricianRegisterSuccess: true,
        error: null,
      };

    case ELECTRICIAN_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        electricianData: null,
        electricianRegisterSuccess: false,
        error: action.payload,
      };

    case CLEAR_REGISTER_ERROR:
      return {
        loading: false,
        electricianData: null,
        electricianRegisterSuccess: false,
        error: null,
      };

    case ELECTRICIAN_REGISTER_RESET:
      return {
        loading: false,
        electricianData: null,
        electricianRegisterSuccess: false,
        error: null,
      };

    default:
      return state;
  }
};

export const GetAllElctricianDataReducer = (
  state = GetAllElectricianInitialState,
  action
) => {
  switch (action.type) {
    case GET_ELECTRICIAN_DATA_REQUEST:
    case ELECTRICIAN_DELETE_REQUEST:
      return {
        ...state,
        loadingData: true,
        AllElectriciandata: [],
        error: null,
      };

    case GET_ELECTRICIAN_DATA_SUCCESS:
      return {
        ...state,
        loadingData: false,
        AllElectriciandata: action.payload.Alldata,
        error: null,
      };

    case GET_ELECTRICIAN_DATA_FAIL:
      return {
        ...state,
        loadingData: false,
        AllElectriciandata: [],
        error: action.payload,
      };

    case ELECTRICIAN_DELETE_SUCCESS:
      return {
        ...state,
        loadingData: false,
        deleteuserSeccess: true,
      };

    case ELECTRICIAN_DELETE_FAIL:
      return {
        ...state,
        loadingData: false,
        deleteuserSeccess: false,
        error: action.payload,
      };

    case ELECTRICIAN_DELETE_RESET:
      return {
        loadingData: false,
        deleteuserSeccess: false,
        error: null,
      };

    case CLEAR_ERROR:
      return {
        loadingData: false,
        AllElectriciandata: [],
        error: null,
      };

    default:
      return state;
  }
};

export const GetSingleElectricianReducer = (
  state = getSingleComplaintInitialState,
  action
) => {
  switch (action.type) {
    case GET_ELECTRICIAN_SINGLE_DATA_REQUEST:
      return {
        ...state,
        loadingSingle: true,
        error: null,
      };

    case GET_ELECTRICIAN_SINGLE_DATA_SUCCESS:
      return {
        ...state,
        loadingSingle: false,
        SingleComplaint: action.payload,
        error: null,
      };

    case GET_ELECTRICIAN_SINGLE_DATA_FAIL:
      return {
        ...state,
        loadingSingle: false,
        SingleComplaint: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
