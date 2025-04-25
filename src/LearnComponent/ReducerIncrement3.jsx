import React, { useReducer } from "react";

function ReducerIncrement3() {
  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    incrementBy: 1,
  });
  function reducerFunction(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy };
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - state.incrementBy };
    }
    if (action.type == "setIncremet") {
      return { ...state, incrementBy: action.payload };
    }
  }
  return (
    <div>
      {state.count}
      <input
        type="text"
        value={state.incrementBy}
        onChange={(e) =>
          dispatch({ type: "setIncremet", payload: Number(e.target.value) })
        }
      />
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <br></br>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}

export default ReducerIncrement3;
