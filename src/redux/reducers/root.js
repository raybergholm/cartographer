import { combineReducers } from "redux";

import baseReducer  from "../reducers/base";
import mapReducer from "../reducers/map";

const allReducers = {
  // throw in all the imported reducers
  base: baseReducer,
  map: mapReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
