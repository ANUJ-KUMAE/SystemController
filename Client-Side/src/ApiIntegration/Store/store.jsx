import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
  AllAuthAusersReducer,
  AuthReducer,
  UserSingleDataReducer,
} from "../Reducers/LoginSignupReducer";
import {
  AddComplaintReducer,
  AllComplaintReducer,
  SingleComplaintReducer,
} from "../Reducers/ComplaintReducer";
import {
  ElectricianRegisterReducer,
  GetAllElctricianDataReducer,
  GetSingleElectricianReducer,
} from "../Reducers/ElectricianReducer";
import { AutomaticComplaintReducer } from "../Reducers/AutomaticCompleteReducer";
import { complaintReducer } from "../Reducers/ResolveReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  AuthData: AuthReducer,
  ComplaintAdded: AddComplaintReducer,
  AllComplaintData: AllComplaintReducer,
  singleComplaintData: SingleComplaintReducer,
  AllElectrician: GetAllElctricianDataReducer,
  singleElectricianData: GetSingleElectricianReducer,
  adminUsers: AllAuthAusersReducer,
  adminSingleUser: UserSingleDataReducer,
  registerElectricianData: ElectricianRegisterReducer,
  assignComplain: AutomaticComplaintReducer,
  resolveComplaints: complaintReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
