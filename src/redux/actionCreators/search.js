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
  updateSelectedSearchableField: (selectedSearchableField) => ({
    type: actionTypes.UpdateSelectedSearchableField,
    payload: {
      selectedSearchableField
    }
  }),
  updateSearchableFields: (searchableFields) => ({
    type: actionTypes.updateSearchableFields,
    payload: {
      searchableFields
    }
  }),
  startSearch: (instance, searchValue, selectedNodeType) => ({
    type: actionTypes.StartSearch,
    payload: {
      instance,
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
