import "./styles.css";
import React from "react";
import BoardLeads from "../../components/BoardLeads";

function Leads() {
  if (typeof window !== "undefined") {
    const datafromStorage = JSON.parse(window.localStorage.getItem("lead"));
    if (datafromStorage !== null) {
      return (
        <section id="leads--section" className="container">
          <BoardLeads />
        </section>
      );
    } else {
      return [];
    }
  }
}

export default Leads;
