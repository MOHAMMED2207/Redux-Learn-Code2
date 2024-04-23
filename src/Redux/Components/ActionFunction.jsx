import { My_Cake } from "./actionType";

export const BUY_CAKE = (number) => {
  return {
    type: My_Cake,
    payload: number,
  };
};
