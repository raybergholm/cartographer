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
  query: (payload) => ({
    type: actionTypes.Query,
    payload
  }),
  updateSearchableFields: (nodeType) => ({
    type: actionTypes.UpdateSearchableFields,
    payload: {
      nodeType
    }
  })

};

export default actionCreators;
