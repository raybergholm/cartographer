import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reactstrap";

import Searchbar from "../components/layout/Searchbar";

const MapView = ({ currentNode, nodeTypes, mapHistory }) => (
  <div>
    <Container>
      <Row>
        <Col>
          <Searchbar nodeTypes={nodeTypes} mapHistory={mapHistory} />
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
  currentNode: PropTypes.object,
  mapHistory: PropTypes.array,
  nodeTypes: PropTypes.array
};
