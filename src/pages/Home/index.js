import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Home() {
  const countries = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Dominicana",
    "Ecuador",
    "Guatemala",
    "Honduras",
    "Mexico",
    "Nicaragua",
    "Panamá",
    "Paraguay",
    "Perú",
    "Salvador",
    "Uruguay",
    "Venezuela"
  ];

  return (
    <div className="container">
      <img
        className="logo"
        src="https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small.png"
      />
      <ul className="list">
        {countries.map((country) => {
          return (
            <>
              <Link to="/shop">
                <li>{country}</li>
              </Link>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
