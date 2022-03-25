import React from "react";

import './styles.css'

function FormUsuario() {
  return (
    <div className="row d-flex align-items-center justify-content-center">
      <form className="d-flex align-items-center flex-column form--user">
        <h3 className="mb-5 w-100 text-center text-white">ELOGROUP</h3>
        <div class="mb-3">
          <label for="name" class="form-label">
            Nome
          </label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">
            Confirmação de Password
          </label>
          <input type="password" class="form-control" id="confirmPassword" />
        </div>
        <button type="submit" class="btn btn-primary w-100">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormUsuario;
