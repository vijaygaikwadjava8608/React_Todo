import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Nav;
