import React, { useState } from "react";
import Sketch from "./Sketch";

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
      <button onClick={toggleLight}>
        {lightState ? "Stop " : "Start "}
      </button>
      <DrawAnnotations lightState={lightState} />
    </div>
  );
};

export default App;
