import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  function handleClick() {
    navigate("/dashboard/profile", { state: { name } });
  }

  return (
    <div>
      <h1>This is home page</h1>
      <Link to="/dashboard">Dashboard</Link>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Profile</button>
    </div>
  );
}

export default Homepage;
