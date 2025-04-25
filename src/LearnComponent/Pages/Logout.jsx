import React, { useContext } from "react";
import { userContext } from "../../Context/UserContext";

function Logout() {
  const { setUser } = useContext(userContext);
  function handleLogout() {
    setUser("Guest");
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
