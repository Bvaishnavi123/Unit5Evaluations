import { loginReducer } from "./AuthReducer/AuthReducer";
import {AllDataReducer} from "./orderReducer/orderReducer"
import { combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
  login: loginReducer,
  data: AllDataReducer
});
export const store = legacy_createStore(rootReducer); 

//console.log(store.getState());