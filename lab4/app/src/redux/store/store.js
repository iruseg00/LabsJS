import { createStore }  from "redux";
import rootReducer  from "../reducers/reducers";

var store = createStore(rootReducer);
 
export default store;