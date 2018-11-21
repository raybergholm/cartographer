import React from "react";
import PropTypes from "prop-types";

import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const createNodeTypeOptions = (nodeTypes) => {
  const nullSelection = (<option key="node-types-select-none" value="">Choose node type...</option>);
  return nodeTypes && nodeTypes.length > 0 ? 
    [nullSelection, ...nodeTypes.map(({ value, text }) => <option key={`node-types-select-${value}`} value={value}>{text}</option>)] :
    [nullSelection];
};

const renderHistory = (mapHistory) => {
  const nullSelection = (<option key="history-select-none" value="">History...</option>);

  return mapHistory && mapHistory.length > 0  ? 
    [nullSelection, ...mapHistory.map(({ nodeId, name, nodeType }) => <option key={`history-select-${nodeId}`} value={nodeId}>{`${name} - ${nodeType}`}</option>)] :
    [nullSelection];
};

const onSearch = (params) => {
  console.log("hi");
  console.log("args?", params);
};

const Searchbar = ({ mapHistory, nodeTypes }) => (
  <div id="searchbar">
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <select defaultValue="">
          {createNodeTypeOptions(nodeTypes)}
        </select>
      </InputGroupAddon>
      <Input placeholder="Some sort of ID or search value..." />
      <InputGroupAddon addonType="append">
        <Button color="primary" onClick={onSearch}>Search</Button>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <select defaultValue="">
        {renderHistory(mapHistory)}
      </select>
    </InputGroup>
  </div>
);

export default Searchbar;

Searchbar.propTypes = {
  mapHistory: PropTypes.array,
  nodeTypes: PropTypes.array
};
