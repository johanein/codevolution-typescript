import { useReducer } from "react";

type CounterState = {
  count: number;
};
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
type CounterAction = UpdateAction | ResetAction; // descriminated union in typescript
const initialState = {
  count: 0,
};

export const reducer = (state: CounterState, action: CounterAction) => {
  const { count } = state || {};
  //   const { type } = action || {};
  switch (action.type) {
    case "increment":
      return { ...state, count: count + action.payload };
    case "decrement":
      return { ...state, count: count - action.payload };
    case "reset":
      return initialState;

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state || {};
  const handleIncrementClick = () => {
    dispatch({ type: "increment", payload: 10 });
  };
  const handleDecrementClick = () => {
    dispatch({ type: "decrement", payload: 10 });
  };
  const handleResetClick = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <button type="button" onClick={handleIncrementClick}>
        increment
      </button>
      <button type="button" onClick={handleDecrementClick}>
        decrement
      </button>
      <button type="button" onClick={handleResetClick}>
        reset
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
