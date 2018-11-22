import actionTypes from "../actionTypes/map";

const initialState = {
  currentNode: null,
  nodeTypes: [],
  history: [],
  cache: new Map()
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.StartSearch:
      return state;
    case actionTypes.SearchResponse:
      return state;
    case actionTypes.PushHistory:
      return Object.assign({}, state, {
        history: state.history.concat([payload.entry])
      });
    case actionTypes.UpdateCache:
      return Object.assign({}, state, {
        cache: new Map([...Array.from(state.cache), [payload.entry.name, payload.entry]])
      });
    default:
      return state;
  }
};

export default reducer;
