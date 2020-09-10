import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

// Funcionallidad de Router: aca empiezan las rutas, acá terminan las rutas. Abraza las rutas
// Funcionalidad de Route:

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/shop" component={Shop} />
  </Router>,
  document.getElementById("root")
);
