import { useState } from "react";
import { useEffect } from "react";
import "./converter.css";

const Converter = () => {
  const [gradus, setGradus] = useState("");
  const [farengate, setFarengate] = useState("");
  const changeFarengate = (e) => {
    setGradus(e.target.value);
    setFarengate((e.target.value * 9) / 5 + 32);
  };
  const changeGradus = (e) => {
    setFarengate(e.target.value);
    setGradus((5 / 9) * (e.target.value - 32));
  };

  // useEffect(() => {
  //   if (gradus !== "") {
  //     setFarengate((gradus * 9) / 5 + 32);
  //   }
  // }, [gradus]);

  return (
    <div className="converter">
      <h2>Конвертер</h2>
      <div className="flex">
        <input
          type="text"
          name="gradus"
          placeholder="0"
          className="input"
          value={gradus}
          onChange={changeFarengate}
        />

        <input
          type="text"
          name="farengate"
          placeholder="0"
          className="input"
          value={farengate}
          onChange={changeGradus}
        />
      </div>
    </div>
  );
};

export default Converter;
