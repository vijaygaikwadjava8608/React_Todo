import React from "react";
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const state = location.state || {};

  return (
    <div>
      Profile Page
      <h4> user Name from dashboard : {state.name}</h4>
    </div>
  );
}

export default Profile;
