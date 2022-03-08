import React, { useState } from "react";
import Sketch from "./Sketch";
import './App.css'

const DrawAnnotations = ({ lightState }) => {
  return (
    <Sketch lightState={lightState} />
  );
};

const App = () => {
  const [lightState, setLightState] = useState(false);

  const toggleLight = () => {
    setLightState(!lightState);
  };

  return (
    <div>
      <button className="button-3" onClick={toggleLight}>
        {lightState ? "Stop " : "Start "}
      </button>
      <DrawAnnotations lightState={lightState} />
    </div>
  );
};

export default App;
