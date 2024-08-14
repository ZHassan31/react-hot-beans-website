import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Contact">
        <button>Contact</button>
      </Link>
      <Link to="/Profile">
        |<button>Profile</button>
      </Link>
    </>
  );
}

export default NavBar;
