import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./styles.css";

export default function ColourPicker() {
  const [color, setColor] = useState("#b32aa9");

  return (
    <div className="App">
      {/* Option for the full hex colour picker ui */}
      {/* <HexColorPicker color={color} onChange={setColor} /> */}

      <span className="value" style={{ borderLeftColor: color , color:color}}>
        Current color is {color}
      </span>

      <span className="buttons">
        <button className="colour-button" style={{ backgroundColor: "#ff9b33" }} onClick={() => setColor("#ff9b33")}>Orange</button>

        <button className="colour-button" style={{ backgroundColor: "#05ff00" }} onClick={() => setColor("#05ff00")}>Green</button>

        <button className="colour-button" style={{ backgroundColor: "#ff33fd" }} onClick={() => setColor("#ff33fd")}>Pink</button>

        <button className="colour-button" style={{ backgroundColor: "#FFFFFF", color: "#000000" }} onClick={() => setColor("#FFFFFF")}>White</button>
      </span>
    </div>
  );
}
