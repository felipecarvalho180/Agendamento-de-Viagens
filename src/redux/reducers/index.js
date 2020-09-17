import { combineReducers } from "redux";
import { tripsReducer } from "./trips";

export const Reducers = combineReducers({
  trips: tripsReducer,
});
