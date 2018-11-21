import React from "react";

import { Jumbotron } from "reactstrap";

const bannerStyle = {
  height: "200px",
  fontFamily: "\"Courier New\", Courier, monospace",
  textAlign: "center",
  verticalAlign: "middle",
  lineHeight: "normal"
};

const Header = () => (
  <header id="app-header" data-sticky-container>
    <Jumbotron id="app-header-banner" style={bannerStyle}>
      <span>Cartographer</span>
    </Jumbotron>
  </header>
);

export default Header;
