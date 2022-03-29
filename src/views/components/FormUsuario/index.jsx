import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiConnector from "../../../api/apiConnector";
import { saveUser } from "../../../controllers/userController";

import "./styles.css";

function FormUsuario() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  let regex =
    /^(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

  const model = {
    id: Math.floor(Date.now() * Math.random()).toString(36),
    name: name,
    password: password,
  };

  const user = JSON.parse(apiConnector.getItem("user")) || [];
  user.push(model);

  const handlChangeConfirm = (e) => {
    if (password !== confirmPassword) {
      alert("Senhas divergentes");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regex.exec(password) && password.length >= 8) {
      alert("Usuário cadastrado com sucesso!");
      saveUser(user);
      setName("");
      navigate("/leads");
    } else {
      alert("Senha não atende aos requisitos");
    }
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="row d-flex align-items-center justify-content-center">
      <form
        className="d-flex align-items-center flex-column form--user"
        onSubmit={handleSubmit}
      >
        <h3 className="mb-5 w-100 text-center text-white">ELOGROUP</h3>
        <div class="mb-3">
          <label for="name" class="form-label">
            Nome
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">
            Confirmação de Password
          </label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            required
            value={confirmPassword}
            onBlur={handlChangeConfirm}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormUsuario;
