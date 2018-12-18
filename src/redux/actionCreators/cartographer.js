import actionTypes from "../actionTypes/cartographer";

const actionCreators = {
  setNodeTypes: (nodeTypes) => ({
    type: actionTypes.SetNodeTypes,
    payload: {
      nodeTypes
    }
  }),
  setPaths: (paths) => ({
    type: actionTypes.SetPaths,
    payload: {
      paths
    }
  }),
  setLinkers: (linkers) => ({
    type: actionTypes.SetLinkers,
    payload: {
      linkers
    }
  }),
  getData: (id, entity) => ({
    type: actionTypes.GetData,
    payload: {
      id,
      entity
    }
  }),
  queryApi: (nodeType, searchValue) => ({
    type: actionTypes.QueryApi,
    payload: {
      nodeType,
      searchValue
    }
  }),
  updateSearchableFields: (nodeType) => ({
    type: actionTypes.UpdateSearchableFields,
    payload: {
      nodeType
    }
  })

};

export default actionCreators;
