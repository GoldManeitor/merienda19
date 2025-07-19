import React, { useState } from "react";

function Comidas(prop) {
  const [open, setopen] = useState(false);
  return (
    <div className="flex flex-col justify-start items-start">
      <div onClick={() => setopen(!open)} className="nomcomida">
        {!open ? "+ " : "- "}
        {prop.nombre}
      </div>
      {open ? <div className="descp">{prop.descrip}</div> : null}
      <hr className="w-full"/>
    </div>
  );
}

export default Comidas;
