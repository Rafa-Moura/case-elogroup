import React from "react";
import CardLead from "../CardLead";

import "./styles.css";

function ListLead() {
  return (
    <>
      <div className="list--container">
        <div className="list--title">
          <h5 className="w-100 text-center">Cliente em Potencial</h5>
        </div>
        <div className="list--body">
          <CardLead />
        </div>
      </div>
      <div className="list--container">
        <div className="list--title">
          <h5 className="w-100 text-center">Dados Confirmados</h5>
        </div>
        <div className="list--body"></div>
      </div>
      <div className="list--container">
        <div className="list--title">
          <h5 className="w-100 text-center">Reunião Agendada</h5>
        </div>
        <div className="list--body"></div>
      </div>
    </>
  );
}

export default ListLead;
