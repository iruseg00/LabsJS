import { combineReducers } from "redux";
import weekReducer from "./weekReducer";

export const rootReducer = combineReducers({
    week : weekReducer
});