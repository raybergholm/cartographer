import { call, put, takeEvery } from "redux-saga/effects";

import baseActionCreators from "../actionCreators/base";
import cartographerActionCreators from "../actionCreators/cartographer";
import mapActionCreators from "../actionCreators/map";
import searchActionCreators from "../actionCreators/search";

import baseActionTypes from "../actionTypes/base";
import cartographerActionTypes from "../actionTypes/cartographer";
import mapActionTypes from "../actionTypes/map";
import searchActionTypes from "../actionTypes/search";

import Cartographer from "../../cartographer/Cartographer";

export function* initializeApp() {
  const { nodeTypes, paths, linkers } = yield getCartographerConfigs();
  yield put(cartographerActionCreators.configLoaded(nodeTypes, paths, linkers));

  const instance = yield initializeCartographer({ nodeTypes, paths, linkers });
  yield put(cartographerActionCreators.initialized(instance));

  yield put({
    type: baseActionTypes.Initialized
  });
}

const getCartographerConfigs = async () => {
  const toMap = (arr) => arr.reduce((accumulator, item) => {
    accumulator.set(item.type, item);
    return accumulator;
  }, new Map());

  const nodeTypesConfig = await import("../../config/nodeTypes.json");
  const pathsConfig = await import("../../config/paths.json");
  const linkersConfig = await import("../../config/linkers.json");

  return {
    nodeTypes: toMap(nodeTypesConfig.default),
    paths: toMap(pathsConfig.default),
    linkers: toMap(linkersConfig.default)
  };
};

const initializeCartographer = async (configs) => {
  const metadata = await import("../../config/cartographer.int3.json");

  return new Cartographer(Object.assign({}, metadata, configs));
};

export function* search({ payload }) {
  console.log("payload", payload);
  const { instance, searchValue, selectedNodeType } = payload;
  console.log("value", searchValue);
  console.log("nodeType", selectedNodeType);

  const result = yield instance.query({ searchValue, type: selectedNodeType });

  yield true;
}

export default function* mainSagas() {
  yield takeEvery(baseActionTypes.Initialize, initializeApp);
  yield takeEvery(searchActionTypes.StartSearch, search);
}
