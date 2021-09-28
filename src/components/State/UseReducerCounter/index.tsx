import { useReducer } from "react";

type CounterState = {
  count: number;
};
type CounterAction = { type: string; payload: number };
const initialState = {
  count: 0,
};

export const reducer = (
  state: CounterState,
  { type, payload }: CounterAction
) => {
  const { count } = state || {};
  switch (type) {
    case "increment":
      return { ...state, count: count + payload };
    case "decrement":
      return { ...state, count: count - payload };

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

  return (
    <div>
      <button type="button" onClick={handleIncrementClick}>
        increment
      </button>
      <button type="button" onClick={handleDecrementClick}>
        decrement
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
