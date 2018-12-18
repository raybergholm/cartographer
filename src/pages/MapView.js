import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reactstrap";

import Searchbar from "../components/layout/Searchbar";

const MapView = ({ actions, currentNode, instance, nodeTypes, searchValue, searchableFields, selectedNodeType, selectedSearchField, mapHistory }) => (
  <div>
    <Container>
      <Row>
        <Col>
          <Searchbar 
            actions={actions}
            instance={instance}
            nodeTypes={(nodeTypes && nodeTypes.byId && Array.from(nodeTypes.byId.values())) || []}
            searchValue={searchValue}
            searchableFields={searchableFields}
            selectedNodeType={selectedNodeType}
            selectedSearchField={selectedSearchField}
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
  instance: PropTypes.object,
  mapHistory: PropTypes.array,
  nodeTypes: PropTypes.object,
  searchValue: PropTypes.string,
  searchableFields: PropTypes.array,
  selectedNodeType: PropTypes.string,
  selectedSearchField: PropTypes.string
};
