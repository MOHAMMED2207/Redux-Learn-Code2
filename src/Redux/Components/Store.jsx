import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./Reducer";

import logger from "redux-logger";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const Root_Reducer = combineReducers({
  caks: Reducer,
});
export const Store = createStore(
  Root_Reducer,
  composeWithDevTools(applyMiddleware(logger))
);
