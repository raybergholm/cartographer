import actionTypes from "../actionTypes/search";

const actionCreators = {
  updateSearchValue: (searchValue) => ({
    type: actionTypes.UpdateSearchValue,
    payload: {
      searchValue
    }
  }),
  updateSelectedNodeType: (selectedNodeType) => ({
    type: actionTypes.UpdateSelectedNodeType,
    payload: {
      selectedNodeType
    }
  }),
  startSearch: (searchValue, selectedNodeType) => ({
    type: actionTypes.StartSearch,
    payload: {
      searchValue,
      selectedNodeType
    }
  }),
  SearchResponse: (result) => ({
    type: actionTypes.SearchResponse,
    payload: {
      result
    }
  })
};

export default actionCreators;
