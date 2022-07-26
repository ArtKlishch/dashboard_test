import { combineReducers, createStore } from "redux";
import AuthReducer from "./auth/reducer";

const rootReducer = combineReducers({
  authState: AuthReducer,
});

const store = createStore(rootReducer);
export default store;
