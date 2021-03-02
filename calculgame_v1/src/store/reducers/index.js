import { combineReducers } from "redux";
import calculate from "./calculate";

export default combineReducers({
  c: calculate,
});
