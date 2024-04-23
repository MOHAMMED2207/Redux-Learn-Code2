import { BUY_CAKE } from "./ActionFunction";

const cake_InitialState = {
  cake_stor: 11,
};

export const Reducer = (state = cake_InitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        cake_stor: state.cake_stor - 1,
      };

    default:
      return state;
  }
};
