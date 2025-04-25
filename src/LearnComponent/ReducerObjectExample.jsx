import React, { useReducer } from "react";

function ReducerObjectExample() {
  const [state, dispatch] = useReducer(operationFunction, { count: 0 });
  function operationFunction(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + action.payload };
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - action.payload };
    }
  }

  return (
    <div>
      {state.count}
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        {" "}
        Increment
      </button>
      <br />
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        {" "}
        Decrement
      </button>
    </div>
  );
}

export default ReducerObjectExample;
