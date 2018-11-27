import actionTypes from "../actionTypes/cartographer";

const actionCreators = {
  initialize: () => ({
    type: actionTypes.Initialize
  }),
  configLoaded: (nodeTypes, paths, linkers) => ({
    type: actionTypes.ConfigLoaded,
    payload: {
      nodeTypes,
      paths, 
      linkers
    }
  }),
  initialized: (instance) => ({
    type: actionTypes.Initialized,
    payload: {
      instance
    }
  }),
  queryApi: (nodeType, searchValue) => ({
    type: actionTypes.QueryApi,
    payload: {
      nodeType,
      searchValue
    }
  })
};

export default actionCreators;
