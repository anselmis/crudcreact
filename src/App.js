import React from "react";
import ListadoDeNombres from "./components/listadodenombres";
import Nav from "./components/nav";
import "./estilo.css";

function App() {
  return (
    <div className="container">
      <Nav></Nav>
      <ListadoDeNombres></ListadoDeNombres>
    </div>
  );
}

export default App;
