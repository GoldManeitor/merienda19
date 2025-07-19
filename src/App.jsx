import { useState } from "react";
import "./App.css";
import Menu from "./components/menu";

function App() {
  return (
    <div className="grid grid-rows-[100px_1fr_100px]">
      <div className="titulo">Merienda 19</div>
      <Menu /> 
    </div>
  );
}

export default App;
