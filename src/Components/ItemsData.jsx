import React from "react";
import { connect } from "react-redux";
const itemsData = (props) => {

  return (
    <div>
      <h1>Items Is - {props.items} </h1>
    </div>
  );
};

const mapStore = (state, ownProps) => {
    const itemsWhere = ownProps.caks ?  state.caks.cake_stor : state = "not found"
  return {
    items : itemsWhere
};
};
export default connect(mapStore)(itemsData);
