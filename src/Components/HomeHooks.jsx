import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BUY_CAKE } from "../Redux/Components/ActionFunction";
const Home = () => {
  const cake_stor = useSelector((state) => state.caks.cake_stor);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);
  return (
    <div>
      <div>
        <h1>My Store is - {cake_stor}</h1>
      </div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={(number) => dispatch(BUY_CAKE(number))}>
        Buy {number} caks
      </button>
    </div>
  );
};

export default Home;
