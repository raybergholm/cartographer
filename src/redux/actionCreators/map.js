import actionTypes from "../actionTypes/map";

const actionCreators = {
  updateCurrentNode: (node) => ({
    type: actionTypes.UpdateCurrentNode,
    payload: {
      node
    }
  }),
  fetchCurrentNodeEdge: (node, edge) => ({
    type: actionTypes.FetchCurrentNodeEdge,
    payload: {
      node,
      edge
    }
  }),
  updateCache: (entry) => ({
    type: actionTypes.UpdateCache,
    payload: {
      entry
    }
  })
};

export default actionCreators;
