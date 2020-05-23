import { combineReducers } from "redux";
import weekReducer from "./weekReducer";
import sendReducer from "./sendReducer";

const rootReducer = combineReducers({
    week : weekReducer,
    send : sendReducer
});

export default rootReducer;