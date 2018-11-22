import actionTypes from "../actionTypes/base";

const actionCreators = {
  setFlag: (name, status = true) => ({
    type: actionTypes.SetFlag,
    payload: {
      name,
      status
    }
  }),
  clearFlag: (name) => ({
    type: actionTypes.ClearFlag,
    payload: {
      name
    }
  }),
  setError: (name, error = null) => ({
    type: actionTypes.SetError,
    payload: {
      name,
      error
    }
  }),
  clearError: (name) => ({
    type: actionTypes.ClearError,
    payload: {
      name
    }
  }),
  initialize: () => ({
    type: actionTypes.Initialize
  }),
  initialized: () => ({
    type: actionTypes.Initialized
  })
};

export default actionCreators;
