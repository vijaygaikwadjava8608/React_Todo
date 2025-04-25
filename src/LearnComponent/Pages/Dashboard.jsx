import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>This is Dashboard</h1>
      <Link to="/">home</Link>
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="setting"> Setting </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Dashboard;
