import { call, put, takeEvery } from "redux-saga/effects";

import baseActionCreators from "../actionCreators/base";
import cartographerActionCreators from "../actionCreators/cartographer";
import mapActionCreators from "../actionCreators/map";
import searchActionCreators from "../actionCreators/search";

import baseActionTypes from "../actionTypes/base";
import cartographerActionTypes from "../actionTypes/cartographer";
import mapActionTypes from "../actionTypes/map";
import searchActionTypes from "../actionTypes/search";

import { normalize } from "../reducers/cartographer";

export function* initializeApp() {
  const nodeTypesConfig = yield import("../../config/nodeTypes.json");
  yield put(cartographerActionCreators.setNodeTypes(normalize(nodeTypesConfig.default, "type")));

  const pathsConfig = yield import("../../config/paths.json");
  yield put(cartographerActionCreators.setPaths(normalize(pathsConfig.default, "type")));

  const linkersConfig = yield import("../../config/linkers.json");
  yield put(cartographerActionCreators.setLinkers(normalize(linkersConfig.default, "type")));

  yield put({
    type: baseActionTypes.Initialized
  });
}

function* alsoUpdateSearchableFields ({ payload }) {
  yield put(cartographerActionCreators.updateSearchableFields(payload.selectedNodeType));
}

export function* search({ payload }) {
  console.log("payload", payload);
  const { searchValue, selectedNodeType, selectedSearchableField } = payload;

  yield true;
}

export default function* mainSagas() {
  yield takeEvery(baseActionTypes.Initialize, initializeApp);
  yield takeEvery(searchActionTypes.UpdateSelectedNodeType, alsoUpdateSearchableFields);
  yield takeEvery(searchActionTypes.StartSearch, search);
}
