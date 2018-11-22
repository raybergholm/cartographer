import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reactstrap";

import Searchbar from "../components/layout/Searchbar";

const MapView = ({ actions, currentNode, nodeTypes, searchValue, selectedNodeType, mapHistory }) => (
  <div>
    <Container>
      <Row>
        <Col>
          <Searchbar 
            actions={actions}
            nodeTypes={Array.from(nodeTypes.values())}
            searchValue={searchValue}
            selectedNodeType={selectedNodeType}
            mapHistory={mapHistory}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          Test test test
        </Col>
      </Row>
    </Container>
  </div>
);

export default MapView;

MapView.propTypes = {
  actions: PropTypes.object,
  currentNode: PropTypes.object,
  mapHistory: PropTypes.array,
  nodeTypes: PropTypes.object,
  searchValue: PropTypes.string,
  selectedNodeType: PropTypes.string
};
