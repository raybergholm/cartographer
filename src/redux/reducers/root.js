import { combineReducers } from "redux";

import baseReducer from "../reducers/base";
import cartographerReducer from "../reducers/cartographer";
import mapReducer from "../reducers/map";
import searchReducer from "../reducers/search";

const allReducers = {
  // throw in all the imported reducers
  base: baseReducer,
  cartographer: cartographerReducer,
  map: mapReducer,
  search: searchReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
