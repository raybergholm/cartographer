import React from "react";
import PropTypes from "prop-types";

import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const createNodeTypeOptions = (nodeTypes) => {
  const nullSelection = (<option key="node-types-select-none" value="">Choose node type...</option>);
  return nodeTypes && nodeTypes.length > 0 ? 
    [nullSelection, ...nodeTypes.map(({ type }) => <option key={`node-types-select-${type}`} value={type}>{type}</option>)] :
    [nullSelection];
};

const renderHistory = (mapHistory) => {
  const nullSelection = (<option key="history-select-none" value="">History...</option>);

  return mapHistory && mapHistory.length > 0  ? 
    [nullSelection, ...mapHistory.map(({ nodeId, name, nodeType }) => <option key={`history-select-${nodeId}`} value={nodeId}>{`${name} - ${nodeType}`}</option>)] :
    [nullSelection];
};

const Searchbar = ({ actions, instance, mapHistory, nodeTypes, searchValue, selectedNodeType }) => (
  <div id="searchbar">
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <select value={selectedNodeType} onChange={(event) => actions.updateSelectedNodeType(event.target.value)}>
          {createNodeTypeOptions(nodeTypes)}
        </select>
      </InputGroupAddon>
      <Input placeholder="Some sort of ID or search value..." value={searchValue} onChange={(event) => actions.updateSearchValue(event.target.value)} />
      <InputGroupAddon addonType="append">
        <Button color="primary" onClick={() => instance && actions.startSearch(instance, searchValue, selectedNodeType)}>Search</Button>
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
  actions: PropTypes.object,
  instance: PropTypes.object,
  mapHistory: PropTypes.array,
  nodeTypes: PropTypes.array,
  searchValue: PropTypes.string,
  selectedNodeType: PropTypes.string
};
