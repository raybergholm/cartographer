import actionTypes from "../actionTypes/base";

const initialState = {
  flags: new Map(),
  errors: new Map()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SetFlag:
      return Object.assign({}, state, {
        flags: new Map([...Array.from(state.flags), [action.name, action.status]])
      });
    case actionTypes.ClearFlag: {
      const nextStateFlags = new Map(Array.from(state.flags));
      nextStateFlags.delete(action.name);
      return Object.assign({}, state, {
        flags: nextStateFlags
      });
    }
    case actionTypes.SetError:
      return Object.assign({}, state, {
        errors: new Map([...Array.from(state.errors), [action.name, action.error]])
      });
    case actionTypes.ClearError: {
      const nextStateErrors = new Map(Array.from(state.errors));
      nextStateErrors.delete(action.name);
      return Object.assign({}, state, {
        errors: nextStateErrors
      });
    }
    default:
      return state;
  }
};

export default reducer;
