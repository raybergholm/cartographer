import actionTypes from "../actionTypes/cartographer";

const initialState = {
  nodeTypes: new Map(),
  paths: new Map(),
  linkers: new Map(),
  history: [],
  cache: new Map()
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.Initialize:
      return Object.assign({}, state);
    case actionTypes.ConfigLoaded: {
      const { nodeTypes, paths, linkers } = payload;
      return Object.assign({}, state, {
        nodeTypes,
        paths,
        linkers
      });
    }
    default:
      return state;
  }
};

export default reducer;
