import actionTypes from "../actionTypes/base";

const initialState = {
  initialized: false,
  flags: new Map(),
  errors: new Map()
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SetFlag:
      return Object.assign({}, state, {
        flags: new Map([...Array.from(state.flags), [payload.name, payload.status]])
      });
    case actionTypes.ClearFlag: {
      const nextStateFlags = new Map(Array.from(state.flags));
      nextStateFlags.delete(payload.name);
      return Object.assign({}, state, {
        flags: nextStateFlags
      });
    }
    case actionTypes.SetError:
      return Object.assign({}, state, {
        errors: new Map([...Array.from(state.errors), [payload.name, payload.error]])
      });
    case actionTypes.ClearError: {
      const nextStateErrors = new Map(Array.from(state.errors));
      nextStateErrors.delete(payload.name);
      return Object.assign({}, state, {
        errors: nextStateErrors
      });
    }
    case actionTypes.Initialized:
      return Object.assign({}, state, {
        initialized: true
      });
    case actionTypes.Initialize:
    default:
      return state;
  }
};

export default reducer;
