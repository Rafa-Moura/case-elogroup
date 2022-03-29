import React from "react";
import ListLead from "../ListLead";

import CardLead from "../CardLead";

import { MdAdd } from "react-icons/md";

import "./styles.css";
import { Link } from "react-router-dom";

import { listLead } from "../../../controllers/leadController";

function BoardLeads() {
  const result = listLead();
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
        <Link to="/">
          <button className="btn">
            Novo Lead
            <span>
              <MdAdd size={24} color="#fff" />
            </span>
          </button>
        </Link>
      </div>
      <div className="body--board" id="flexbox">
        <ListLead id="board-1" className="board" title="Cliente em potencial">
          {result.map((item) => (
            <CardLead
              key={item.id}
              id={item.id}
              className="card"
              draggable="true"
            >
              <p>{item.name}</p>
            </CardLead>
          ))}
        </ListLead>
        <ListLead
          id="board-2"
          className="board"
          title="Dados Confirmados"
        ></ListLead>
        <ListLead
          id="board-3"
          className="board"
          title="Reunião Agendada"
        ></ListLead>
      </div>
    </div>
  );
}

export default BoardLeads;
