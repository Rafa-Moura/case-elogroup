import React from "react";
import ListLead from "../ListLead";

import { MdAdd } from "react-icons/md";

import "./styles.css";
import { Link } from "react-router-dom";

function BoardLeads() {
  return (
    <div id="board--container">
      <header className="header--board">
        <div className="logo--board">
          <h3>ELOGROUP</h3>
        </div>
        <div className="title">
          <h4>Painel de Leads</h4>
        </div>
      </header>
      <div className="board--action">
        <Link to="/cadastrarlead">
          <button className="btn">
            Novo Lead
            <span>
              <MdAdd size={24} color="#fff" />
            </span>
          </button>
        </Link>
      </div>
      <div className="body--board">
        <ListLead />
      </div>
    </div>
  );
}

export default BoardLeads;
