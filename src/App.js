import React, { useState } from "react";
import { Stage, Rect, Text, Layer } from "react-konva";
import './App.css';
import PCNumber from "./components/PGNumber";
import Sketch from "./components/Sketch";

const width = 1000, height = 540;

const arrPGNumber = [
  {
    x: width * (41 / 100),
    y: height * (76.2963 / 100),
    h: height * (17.87 / 100),
    w: width * (4.6 / 100)
  }, {
    x: width * (37.14 / 100),
    y: height * (35.37 / 100),
    h: height * (14.63 / 100),
    w: width * (6.2 / 100)
  }, {
    x: width * (37.14 / 100),
    y: height * (35.37 / 100),
    h: height * (14.63 / 100),
    w: width * (6.2 / 100)
  }
]

const App = () => {
  const [lightState, setLightState] = useState(false);

  const toggleLight = () => {
    setLightState(!lightState);
  };

  const renderPGNumber = () => {
    return arrPGNumber.map((value) =>
      // <Layer>
      //   <Rect
      //     x={value.x}
      //     y={value.y}
      //     width={value.w}
      //     height={value.h}
      //     stroke="green" strokeWidth={1} />
      //   <Text
      //     x={value.x}
      //     y={value.y}
      //     width={value.w}
      //     height={value.h}
      //     text="2" fontSize={10}
      //     verticalAlign="middle"
      //   />
      // </Layer>
      <PCNumber x={value.x} y={value.y} h={value.h} w={value.w} />
    )
  }

  return (
    <div>
      <button className="button-3" onClick={toggleLight}>
        {lightState ? "Stop " : "Start "}
      </button>
      <Stage width={width} height={height} >
        <Sketch lightState={lightState} />
        {/* <PCNumber /> */}
        {renderPGNumber}
      </Stage>
    </div>
  );
};

export default App;
