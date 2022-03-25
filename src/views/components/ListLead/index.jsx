import React from "react";
import CardLead from "../CardLead";

import './styles.css'

function ListLead(props) {
  return (
    <div className="list--container">
      <div className="list--title">
        <h5 className="w-100 text-center">{props.title}</h5>
      </div>
      <div className="list--body">
        <CardLead />
        <CardLead />
        <CardLead />
        <CardLead />
      </div>
    </div>
  );
}

export default ListLead;
