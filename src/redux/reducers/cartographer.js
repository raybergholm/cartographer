import actionTypes from "../actionTypes/cartographer";

const initialState = {
  instance: null,
  nodeTypes: new Map(),
  paths: new Map(),
  linkers: new Map(),
  history: [],
  cache: new Map()
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.Initialize:
      return state;
    case actionTypes.ConfigLoaded: {
      const { nodeTypes, paths, linkers } = payload;
      return Object.assign({}, state, {
        nodeTypes,
        paths,
        linkers
      });
    }
    case actionTypes.Initialized: {
      const { instance } = payload;
      return Object.assign({}, state, {
        instance
      });
    }
    default:
      return state;
  }
};

export default reducer;
