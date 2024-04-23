import React from "react";
import { connect } from "react-redux";
import { BUY_CAKE } from "../Redux/Components/ActionFunction";
const Home = (props) => {
  return (
    <div>
      <div>
        <h1>My Store is - {props.cake_stor}</h1>
      </div>
      <button onClick={props.BUY_CAKE}>{props.stor}</button>
    </div>
  );
};
const mapStore = (state) => {
  return {
    cake_stor: state.caks.cake_stor,
  };
};
const map_dispatch = (dispatch) => {
  return {
    BUY_CAKE: () => dispatch(BUY_CAKE()),
    stor: "Click",
  };
};
export default connect(mapStore, map_dispatch)(Home);
