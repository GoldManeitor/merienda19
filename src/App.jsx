import { useState } from "react";
import "./App.css";
import Menu from "./components/menu";

function App() {
  return (
    <div className="grid grid-rows-[100px_1fr_100px]">
      <div className="titulo flex w-full h-full items-center justify-center">
        <div>Merienda</div>
        <div className="numero">19</div>
      </div>

      <Menu />
    </div>
  );
}

export default App;
