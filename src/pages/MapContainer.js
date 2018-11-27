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
  ({ base, map, search, cartographer }) => ({
    flags: base.flags,
    errors: base.errors,
    currentNode: map.currentNode,
    searchValue: search.searchValue,
    selectedNodeType: search.selectedNodeType,
    instance: cartographer.instance,
    nodeTypes: cartographer.nodeTypes,
    paths: cartographer.paths,
    linkers: cartographer.linkers,
    mapHistory: map.mapHistory,
    cache: map.cache
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
