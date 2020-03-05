import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { MainContext } from "../../contexts/MainContext";

export default function Footer() {
  const { setMessage, setTypeMsg } = useContext(MainContext);
  const [counter, setCounter] = useState(0);

  function handleCounter() {
    setMessage(counter);
    setTypeMsg("warning");
    setCounter(counter + 1);
  }
  return (
    <div className="bottomBar">
      {/* <p>
        Todos os direitos reservados ao JP Pica de mel!
      </p> */}
      <buttom onClick={handleCounter}>Animate</buttom>
    </div>
  );
}
