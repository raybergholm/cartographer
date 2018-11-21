import actionTypes from "../actionTypes/base";

const initialState = {
  currentNode: null,
  cache: new Map()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.Search:
      return state;
    case actionTypes.UpdateCache: {
      return Object.assign({}, state, {
        cache: new Map([...Array.from(state.cache), [action.entry.name, action.entry]])
      });
    }
    default:
      return state;
  }
};

export default reducer;
