import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import mapActionCreators from "../redux/actionCreators/map";

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
    cache: state.map.cache
  }),
  (dispatch) => {
    const boundActions = bindActionCreators(mapActionCreators, dispatch);
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
