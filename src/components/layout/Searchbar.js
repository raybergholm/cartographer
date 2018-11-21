import React from "react";
import PropTypes from "prop-types";

import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const createNodeTypeOptions = (nodes) => {
  const nullSelection = (<option key="node-types-select-none" value="">Choose node...</option>);
  return nodes ? 
    [nullSelection, ...nodes.map(({ value, text }) => <option key={`node-types-select-${value}`} value={value}>{text}</option>)] :
    [nullSelection];
};

const onSearch = (params) => {
  console.log("hi");
  console.log("args?", params);
};

const Searchbar = ({ nodes }) => (
  <div id="searchbar">
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <select defaultValue="">
          {createNodeTypeOptions(nodes)}
        </select>
      </InputGroupAddon>
      <Input placeholder="Some sort of ID or search value..." />
      <InputGroupAddon addonType="append">
        <Button color="primary" onClick={onSearch}>Search</Button>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Searchbar;

Searchbar.propTypes = {
  nodes: PropTypes.array
};
