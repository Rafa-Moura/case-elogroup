import React from "react";

import "./styles.css";

function Navbar() {
  return (
    <header className="navbarGlobal">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ELOGROUP
          </a>
          <div className="d-flex align-items-center" id="navbarNav">
            <ul className="navbar d-flex align-items-center justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="/leads">
                  Leads
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Cadastrar Lead
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/usuario">
                  Cadastrar Usuario
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
