import React from "react";
import "./style.scss";

function Navbar(props) {
  function handleChange(e) {
    props.handleCallback(e.target.value);
  }

  return (
    <div className="navContainer">
      <img
        className="navLogo"
        src="https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small.png"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Buscar productos, marcas y más"
      />
      <p>Compra hoy y pagá después</p>
    </div>
  );
}

export default Navbar;
