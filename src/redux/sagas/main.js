import { call, put, takeEvery } from "redux-saga/effects";

import mapActionCreators from "../actionCreators/map";
import mapActionTypes from "../actionTypes/map";

export function* search({ searchValue, nodeType }) {

}

export default function* mainSagas() {
  yield takeEvery(mapActionTypes.Search, search);
}
