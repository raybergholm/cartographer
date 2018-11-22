import { call, put, takeEvery } from "redux-saga/effects";

import baseActionCreators from "../actionCreators/base";
import cartographerActionCreators from "../actionCreators/cartographer";
import mapActionCreators from "../actionCreators/map";
import searchActionCreators from "../actionCreators/search";

import baseActionTypes from "../actionTypes/base";
import mapActionTypes from "../actionTypes/map";
import searchActionTypes from "../actionTypes/search";

export function* initializeApp() {
  console.log("called initializeApp()");

  const cartographerConfigs = yield initializeCartographer();
  yield put(cartographerActionCreators.configLoaded(cartographerConfigs));

  yield put({
    type: baseActionTypes.Initialized
  });
}

const initializeCartographer = async () => {
  const toMap = (arr) => arr.reduce((accumulator, item) => {
    accumulator.set(item.type, item);
    return accumulator;
  }, new Map());

  console.log("called initializeCartographer()");
  const nodeTypesConfig = await import("../../config/nodeTypes.json");
  const pathsConfig = await import("../../config/paths.json");
  const linkersConfig = await import("../../config/linkers.json");

  return {
    nodeTypes: toMap(nodeTypesConfig.default),
    paths: toMap(pathsConfig.default),
    linkers: toMap(linkersConfig.default)
  };
};

export function* search({ payload }) {
  console.log("payload", payload);
  const { searchValue, selectedNodeType } = payload;
  console.log("value", searchValue);
  console.log("nodeType", selectedNodeType);

  yield true;
}


export default function* mainSagas() {
  yield takeEvery(baseActionTypes.Initialize, initializeApp);
  yield takeEvery(searchActionTypes.StartSearch, search);
}
