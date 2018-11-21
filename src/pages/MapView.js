import React from "react";

import { Container, Row, Col } from "reactstrap";

import Searchbar from "../components/layout/Searchbar";

const MapView = ({ currentNode }) => (
  <div>
    <Container>
      <Row>
        <Col>
          <Searchbar />
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
