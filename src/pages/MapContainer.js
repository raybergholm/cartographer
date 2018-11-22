import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import mapActionCreators from "../redux/actionCreators/map";
import searchActionCreators from "../redux/actionCreators/search";

import MapView from "./MapView";

const createView = (ViewComponent, hooks) => class extends React.Component {
  componentDidMount() {
    hooks.didMount && hooks.didMount(this.props);
  }
  render() {
    return <ViewComponent {...this.props} />;
  }
};

const hooks = {};

const MapContainer = connect(
  (state) => ({
    flags: state.base.flags,
    errors: state.base.errors,
    currentNode: state.map.currentNode,
    searchValue: state.search.searchValue,
    selectedNodeType: state.search.selectedNodeType,
    nodeTypes: state.cartographer.nodeTypes,
    paths: state.cartographer.paths,
    linkers: state.cartographer.linkers,
    mapHistory: state.map.mapHistory,
    cache: state.map.cache
  }),
  (dispatch) => {
    const mergedActions = Object.assign({}, mapActionCreators, searchActionCreators);
    const boundActions = bindActionCreators(mergedActions, dispatch);
    return {
      ...boundActions
    };
  },
  (state, dispatch, own) => ({
    ...state,
    ...own,
    actions: {
      ...dispatch
    }
  }),
)(createView(MapView, hooks));

export default MapContainer;
