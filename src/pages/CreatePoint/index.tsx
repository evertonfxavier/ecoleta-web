import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../../assets/logo.svg";

import "./CreatePoint.css";

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="logo" />

        <Link to="/">
          <FiArrowLeft />
          Volar para home
        </Link>
      </header>

      <form action="">
        <h1>
          Cadastro do
          <br />
          ponto de coleta
        </h1>

        <fieldset>
            <legend></legend>
        </fieldset>
      </form>
    </div>
  );
};

export default CreatePoint;
