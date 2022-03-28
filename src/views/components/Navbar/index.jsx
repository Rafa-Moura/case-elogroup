import React from "react";

import "./styles.css";

function Navbar() {
  return (
    <header className="navbarGlobal">
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            Case ELOGROUP
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
