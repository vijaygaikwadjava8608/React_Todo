import React, { useContext } from "react";
import { userContext } from "../../Context/UserContext.jsx";

function Checkout() {
  const { user } = useContext(userContext);
  return <div>Checkout users {user}</div>;
}

export default Checkout;
