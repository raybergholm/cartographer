import actionTypes from "../actionTypes/search";

const initialState = {
  selectedNodeType: "",
  selectedSearchableField: "",
  searchValue: ""
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UpdateSearchValue:
    console.log(`about to update search value to ${payload.searchValue}`);
      return Object.assign({}, state, {
        searchValue: payload.searchValue
      });
    case actionTypes.UpdateSelectedNodeType:
      console.log(`about to update selected node type to ${payload.selectedNodeType}`);
      return Object.assign({}, state, {
        selectedNodeType: payload.selectedNodeType
      });
    case actionTypes.UpdateSelectedSearchField:
      return Object.assign({}, state, {
        selectedSearchField: payload.selectedSearchField
      });
    case actionTypes.StartSearch:
      return state;
    case actionTypes.SearchResponse:
      return state;
    default:
      return state;
  }
};

export default reducer;
