import actionTypes from "../actionTypes/cartographer";

const actionCreators = {
  initialize: () => ({
    type: actionTypes.Initialize
  }),
  configLoaded: ({ nodeTypes, paths, linkers }) => ({
    type: actionTypes.ConfigLoaded,
    payload: {
      nodeTypes,
      paths, 
      linkers
    }
  })
};

export default actionCreators;
