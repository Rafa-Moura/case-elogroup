import React from "react";
import { listLead } from "../../../controllers/leadController";

import "./styles.css";

function CardLead() {
  const result = listLead();

  return (
    <>
      {result.map((card) => (
        <div className="cardLead--container" draggable="true">
          <h5 key={card.id}>{card.name}</h5>
        </div>
      ))}
    </>
  );
}

export default CardLead;
