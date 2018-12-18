import actionTypes from "../actionTypes/cartographer";
import { all } from "redux-saga/effects";

const generateDefaultEntity = () => ({ byId: new Map(), allIds: [] });

export const getFromEntity = (id, entity) => id && entity.allIds.indexOf(id) > -1 ? entity.byId.get(id) : null;

export const normalize = (items, idField) => items.reduce((accumulator, entry) => {
  accumulator.byId.set(entry[idField], entry);
  accumulator.allIds.push(entry[idField]);
  return accumulator;
}, generateDefaultEntity());

const updateSearchableFields = (id, nodeTypes) => {
  const result = getFromEntity(id, nodeTypes);
  return result && result.searchableFields ? result.searchableFields : null;
};


const initialState = {
  nodeTypes: generateDefaultEntity(),
  paths: generateDefaultEntity(),
  linkers: generateDefaultEntity(),
  searchableFields: [],
  history: generateDefaultEntity(),
  result: null,
  cache: generateDefaultEntity()
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SetNodeTypes:
      return Object.assign({}, state, {
        nodeTypes: payload.nodeTypes
      });
    case actionTypes.SetPaths:
      return Object.assign({}, state, {
        paths: payload.paths
      });
    case actionTypes.SetLinkers:
      return Object.assign({}, state, {
        linkers: payload.linkers
      });
    case actionTypes.UpdateSearchableFields:
      return Object.assign({}, state, {
        searchableFields: updateSearchableFields(payload.nodeType, state.nodeTypes)
      });
    case actionTypes.GetData:
      return Object.assign({}, state, {
        result: getFromEntity(payload.id, state[payload.entity])
      });
    default:
      return state;
  }
};

export default reducer;
