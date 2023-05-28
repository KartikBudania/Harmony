import React from "react";
import { IconContext } from "react-icons";
import { FaSignOutAlt } from "react-icons/fa";
import "./signOut.css";

export default function SignOut() {
  function signOut() {
    localStorage.removeItem("token");
    window.location.href = "https://kartikbudania.github.io/Harmony/";
  }

  return (
    <div className="signOut-body" onClick={signOut}>
      <IconContext.Provider value={{ size: "24px", className: "signOut-icon" }}>
        <FaSignOutAlt />
        <p className="signOut-title">Sign Out</p>
      </IconContext.Provider>
    </div>
  );
}
