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
  updateSelectedSearchField: (selectedSearchField) => ({
    type: actionTypes.UpdateSelectedSearchField,
    payload: {
      selectedSearchField
    }
  }),
  updateSearchableFields: (searchableFields) => ({
    type: actionTypes.updateSearchableFields,
    payload: {
      searchableFields
    }
  }),
  startSearch: (searchValue, nodeType, field) => ({
    type: actionTypes.StartSearch,
    payload: {
      searchValue,
      nodeType,
      field
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
