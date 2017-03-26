//this simply combines all of the reducers and makes available to the store.
import { combineReducers } from "redux";
import dashboard from "./dashboard";
export default combineReducers({
    dashboard
});