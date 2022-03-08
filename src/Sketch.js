import React, { useState, useEffect } from "react";
import { Image, Layer, Stage, Rect, Text } from "react-konva";
import useImage from "use-image";

const PiantaEdificio = () => {
    const [image] = useImage("example-image.png");
    return <Image image={image}
        height={window.innerHeight}
        width={window.innerWidth} />;
};
let count = 0;
let arrImage = [
    {
        name: "when-start.png",
        x: window.innerWidth * 0.36328125,
        y: window.innerHeight * 0.5764499121,
        h: 52,
        w: 46,
        visible: false
    }, {
        name: "image2-middle.png",
        x: 429,
        y: 190,
        h: 40,
        w: 58,
        visible: false
    }, {
        name: "image2-start.png",
        x: 429,
        y: 190,
        h: 40,
        w: 58,
        visible: false
    }];
const Sketch = ({ lightState }) => {
    const ImageWhenStart = () => {
        const [image] = useImage(arrImage[0].name);
        return <Image image={image} x={arrImage[0].x} y={arrImage[0].y} visible={arrImage[0].visible}
            height={arrImage[0].h} width={arrImage[0].w} />;
    };
    const ImageWhenStart2 = () => {
        const [image] = useImage(arrImage[1].name);
        return <Image image={image} x={arrImage[1].x} y={arrImage[1].y} visible={arrImage[1].visible}
            height={arrImage[1].h} width={arrImage[1].w} />;
    };
    const ImageWhenStart3 = () => {
        const [image] = useImage(arrImage[2].name);
        return <Image image={image} x={arrImage[2].x} y={arrImage[2].y} visible={arrImage[2].visible}
            height={arrImage[2].h} width={arrImage[2].w} />;
    };

    const arr3 = [<ImageWhenStart />, <ImageWhenStart2 />, <ImageWhenStart3 />]
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        let interval;
        if (lightState) {
            interval = setInterval(() => {
                if (count < arrImage.length) {
                    setIndex(count);
                    count++;
                }
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [arrImage, lightState])

    useEffect(() => {
        console.log("🚀 ~ file: Sketch.js ~ line 63 ~ count", count)
        console.log("🚀 ~ file: Sketch.js ~ line 54 ~ index", index)
        if (index >= 0 && index < arrImage.length && lightState)
            arrImage[index].visible = true;
        else if (index >= 0 && index < arrImage.length && !lightState) {
            count = 0;
            setIndex(-1);
            for (let i = 0; i < arrImage.length; i++) {
                arrImage[i].visible = false;
                console.log("🚀 ~ file: Sketch.js ~ line 74 ~ arrImage[i].visible", arrImage[i].visible)
            }
        }
    }, [index, lightState])

    return (
        <Stage
            width={window.innerWidth}
            height={window.innerHeight}
        >
            <Layer>
                <PiantaEdificio />
            </Layer>
            <Layer>
                <ImageWhenStart />
                <ImageWhenStart2 />
                <ImageWhenStart3 />
                {/* {lightState && newArr} */}
                {lightState && arr3.map(e => e)}

                <Rect x={429} y={140} width={20} height={18} stroke="black"
                    strokeWidth={1} />
                <Text
                    x={435} y={140}
                    width={30}
                    height={20}
                    text="1"
                    verticalAlign="middle"
                />
            </Layer>
        </Stage>
    );
};

export default Sketch;
