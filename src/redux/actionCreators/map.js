import actionTypes from "../actionTypes/base";

const actionCreators = {
  search: (value, nodeType) => ({
    type: actionTypes.Search,
    payload: {
      value,
      nodeType
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
