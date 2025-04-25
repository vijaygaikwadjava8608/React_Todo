import React, { useReducer, useState } from "react";

function ReducerBankExample() {
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(setBalance, { balance: 0 });
  function setBalance(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type == "withdrow") {
      return { ...state, balance: state.balance - action.payload };
    }
  }

  return (
    <div>
      <span>{state.balance}</span>
      <br />
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Deposite
      </button>
      <br />
      <button
        onClick={() => dispatch({ type: "withdrow", payload: Number(amount) })}
      >
        Withdrow
      </button>
    </div>
  );
}

export default ReducerBankExample;
