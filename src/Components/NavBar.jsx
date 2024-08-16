// src/NavBar.js
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-custom-light-blue py-4">
      <div className="max-w-4xl mx-auto flex justify-center items-center">
        <ul className="flex space-x-8">
          <li>
            <Link to="/">
              <button className="text-blue-800 bg-blue-300 hover:bg-blue-400 text-xl font-semibold px-6 py-3 rounded transition duration-300 ease-in-out">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <button className="text-blue-800 bg-blue-300 hover:bg-blue-400 text-xl font-semibold px-6 py-3 rounded transition duration-300 ease-in-out">
                Contact
              </button>
            </Link>
          </li>
          <li>
            <Link to="/Profile">
              <button className="text-blue-800 bg-blue-300 hover:bg-blue-400 text-xl font-semibold px-6 py-3 rounded transition duration-300 ease-in-out">
                Team
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
