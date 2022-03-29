import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveLead } from "../../../controllers/leadController";
import apiConnector from "../../../api/apiConnector";

import "./styles.css";

function FormLead() {
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [rpa, setRpa] = useState(false);
  const [produtoDigital, setProdutoDigital] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [bpm, setBpm] = useState(false);

  const navigate = useNavigate();

  const model = {
    id: Math.floor(Date.now() * Math.random()).toString(36),
    name: name,
    telefone: telefone,
    email: email,
    status: "cliente em potencial",
    services: {
      rpa: "",
      produtoDigital: "",
      analytics: "",
      bpm: "",
    },
  };

  const lead = JSON.parse(apiConnector.getItem("lead")) || [];
  lead.push(model);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && telefone !== "" && email !== "") {
      rpa ? (model.services.rpa = true) : (model.services.rpa = false);
      produtoDigital
        ? (model.services.produtoDigital = true)
        : (model.services.produtoDigital = false);
      analytics
        ? (model.services.analytics = true)
        : (model.services.analytics = false);
      bpm ? (model.services.bpm = true) : (model.services.bpm = false);
      saveLead(lead);
      alert("Lead incluido com sucesso!");
      navigate("/leads");
    } else {
      alert("Favor preencher todos os campos");
    }
  };

  return (
    <div className="formLead--container">
      <header className="header--formLead">
        <div className="logo--formLead">
          <h3>ELOGROUP</h3>
        </div>
        <div className="title">
          <h4>Novo Lead</h4>
        </div>
      </header>
      <div className="formLead--body">
        <div className="row">
          <form className="form--Lead" onSubmit={handleSubmit}>
            <div className="formLead--inputs">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefone" className="form-label">
                  Telefone
                </label>
                <input
                  id="telefone"
                  type="text"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="checkbox--area">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                      </div>
                    </th>
                    <th scope="col">Selecionar todos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          value={rpa}
                          onChange={(e) => setRpa(e.target.checked)}
                        />
                      </div>
                    </td>
                    <td>RPA</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          value={produtoDigital}
                          onChange={(e) => setProdutoDigital(e.target.checked)}
                        />
                      </div>
                    </td>
                    <td>Produto Digital</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          value={analytics}
                          onChange={(e) => setAnalytics(e.target.checked)}
                        />
                      </div>
                    </td>
                    <td>Analytics</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          value={bpm}
                          onChange={(e) => setBpm(e.target.checked)}
                        />
                      </div>
                    </td>
                    <td>BPM</td>
                  </tr>
                </tbody>
              </table>
              <button type="submit" className="btn btn-primary w-100">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormLead;
