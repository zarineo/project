import { useState } from "react";
import "./switch.css";

const Switch = () => {
  const colors = ["red", "blue", "green", "pink"];
  const [i, setI] = useState(0);
  const changeBack = () => {
    document.body.style.background = colors[i];
    if (i < 3) {
      setI(i + 1);
    } else {
      setI(0);
    }
  };

  return (
    <div className="change-color" onClick={changeBack}>
      Сменить цвет
    </div>
  );
};

export default Switch;
