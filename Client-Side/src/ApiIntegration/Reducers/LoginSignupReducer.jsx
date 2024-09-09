import {
  ALL_REGISTERED_USERS_FAIL,
  ALL_REGISTERED_USERS_REQUEST,
  ALL_REGISTERED_USERS_SUCCESS,
  CLEAR_DETAILS,
  GET_USER_SINGLE_DATA_FAIL,
  GET_USER_SINGLE_DATA_REQUEST,
  GET_USER_SINGLE_DATA_SUCCESS,
  LOGIN_USER_DETAILS_FAIL,
  LOGIN_USER_DETAILS_REQUEST,
  LOGIN_USER_DETAILS_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../Constants/LoginSignupConstant";

const AuthInitialState = {
  Loading: false,
  isAuthenticated: false,
  AuthUsers: null,
  error: null,
};

const AllRegisteredUserInitialState = {
  loadingAll: false,
  AllUsersregister: [],
  error: null,
};

const getSingleComplaintInitialState = {
  loadingSingle: false,
  SingleUser: null,
  error: null,
};

const AuthReducer = (state = AuthInitialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
    case LOGIN_USER_REQUEST:
    case LOGIN_USER_DETAILS_REQUEST:
      return {
        Loading: true,
        isAuthenticated: false,
      };

    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
    case LOGIN_USER_DETAILS_SUCCESS:
      return {
        ...state,
        Loading: false,
        isAuthenticated: true,
        AuthUsers: action.payload,
        error: null,
      };

    case REGISTER_USER_FAIL:
    case LOGIN_USER_FAIL:
    case LOGIN_USER_DETAILS_FAIL:
      return {
        ...state,
        Loading: false,
        isAuthenticated: false,
        AuthUsers: null,
        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        Loading: false,
        isAuthenticated: false,
        AuthUsers: null,
        error: null,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        Loading: false,
        isAuthenticated: false,
        AuthUsers: null,
        error: action.payload,
      };

    case CLEAR_DETAILS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

const AllAuthAusersReducer = (
  state = AllRegisteredUserInitialState,
  action
) => {
  switch (action.type) {
    case ALL_REGISTERED_USERS_REQUEST:
      return {
        loadingAll: true,
        AllUsersregister: [],
      };

    case ALL_REGISTERED_USERS_SUCCESS:
      return {
        loadingAll: false,
        AllUsersregister: action.payload.AllUsers,
        error: null,
      };

    case ALL_REGISTERED_USERS_FAIL:
      return {
        loadingAll: false,
        AllUsersregister: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const UserSingleDataReducer = (
  state = getSingleComplaintInitialState,
  action
) => {
  switch (action.type) {
    case GET_USER_SINGLE_DATA_REQUEST:
      return {
        ...state,
        loadingSingle: true,
        error: null,
      };

    case GET_USER_SINGLE_DATA_SUCCESS:
      return {
        ...state,
        loadingSingle: false,
        SingleUser: action.payload,
        error: null,
      };

    case GET_USER_SINGLE_DATA_FAIL:
      return {
        ...state,
        loadingSingle: false,
        SingleUser: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { AuthReducer, AllAuthAusersReducer, UserSingleDataReducer };
