import React from 'react';
import { Layer, Rect, Text } from "react-konva";

const width = 1000, height = 540;

const PCNumber = (x, y, w, h) => {
    return (
        <Layer>
            <Rect
                x={width * (38.2 / 100)}
                y={height * (82.4 / 100)}
                width={width * (2 / 100)}
                height={height * (3.33 / 100)}
                stroke="green" strokeWidth={1} />
            <Text
                x={width * (38.8 / 100)}
                y={height * (82.2 / 100)}
                width={width * (3 / 100)}
                height={height * (3.7037 / 100)}
                text="5" fontSize={10}
                verticalAlign="middle"
            />
            <Rect
                x={width * (59.2 / 100)}
                y={height * (82.4 / 100)}
                width={width * (2 / 100)}
                height={height * (3.33 / 100)}
                stroke="green" strokeWidth={1} />
            <Text
                x={width * (59.8 / 100)}
                y={height * (82.2 / 100)}
                width={width * (3 / 100)}
                height={height * (3.7037 / 100)}
                text="3" fontSize={10}
                verticalAlign="middle"
            />

            <Rect
                x={width * (60.2 / 100)}
                y={height * (36.7 / 100)}
                width={width * (2 / 100)}
                height={height * (3.33 / 100)}
                stroke="green" strokeWidth={1} />
            <Text
                x={width * (60.8 / 100)}
                y={height * (36.7 / 100)}
                width={width * (3 / 100)}
                height={height * (3.7037 / 100)}
                text="4" fontSize={10}
                verticalAlign="middle"
            />

            <Rect
                x={width * (62.2 / 100)}
                y={height * (9.63 / 100)}
                width={width * (2 / 100)}
                height={height * (3.33 / 100)}
                stroke="green" strokeWidth={1} />
            <Text
                x={width * (62.8 / 100)}
                y={height * (9.63 / 100)}
                width={width * (3 / 100)}
                height={height * (3.7037 / 100)}
                text="1" fontSize={10}
                verticalAlign="middle"
            />

            <Rect
                x={width * (76.5 / 100)}
                y={height * (18.89 / 100)}
                width={width * (2 / 100)}
                height={height * (3.33 / 100)}
                stroke="green" strokeWidth={1} />
            <Text
                x={width * (77.1 / 100)}
                y={height * (18.89 / 100)}
                width={width * (3 / 100)}
                height={height * (3.7037 / 100)}
                text="2" fontSize={10}
                verticalAlign="middle"
            />
        </Layer>
    );
};

export default PCNumber;