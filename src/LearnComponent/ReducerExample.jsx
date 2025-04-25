import React, { useReducer } from "react";
import { useState } from "react";

function ReducerExample() {
  const [value, setValue] = useState(0);
  //dispatch is kind of action which we dispatched whenever we changed the set state
  const [state, dispatch] = useReducer(reducerFunction, 0);

  function reducerFunction(state, action) {
    if (action.type == "increment") {
      return state + action.payload;
    }
    if (action.type == "decrement") {
      return state - action.payload;
    }
  }

  return (
    <div>
      <span> useState : {value}</span>
      <button value={value} onClick={() => setValue(value + 1)}>
        Increment
      </button>
      <n />
      <br />
      <button value={value} onClick={() => setValue(value - 1)}>
        Decrement
      </button>
      <br />
      <div>------------------------</div>
      User Reducer : {state}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        ReducerIncrement
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        ReducerDecrement
      </button>
    </div>
  );
}

export default ReducerExample;
