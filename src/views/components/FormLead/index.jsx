import React from "react";

import "./styles.css";

function FormLead() {
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
          <form className="d-flex align-items-center">
            <div className="formLead--inputs col-sm-12 col-md-6">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Nome
                </label>
                <input type="text" class="form-control" id="name" />
              </div>
              <div class="mb-3">
                <label for="telefone" class="form-label">
                  Telefone
                </label>
                <input type="text" class="form-control" id="telefone" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                />
              </div>
            </div>
            <div className="checkbox--area col-sm-12 col-md-6 ms-4">
              <table class="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                      </div>
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                      </div>
                    </td>
                    <td>RAP</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                      </div>
                    </td>
                    <td>Produto Digital</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                      </div>
                    </td>
                    <td>Analytics</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                      </div>
                    </td>
                    <td>BPM</td>
                  </tr>
                </tbody>
              </table>
              <button type="submit" class="btn btn-primary w-100">
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
