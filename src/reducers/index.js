//this simply combines all of the reducers and makes available to the store.
import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import dashboard from "./dashboard";

const rootReducer = combineReducers({
    dashboard: dashboard,
    auth: authReducer
});

export default rootReducer;