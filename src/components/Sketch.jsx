import React, { useEffect, useState } from "react";
import { Image, Layer } from "react-konva";
import useImage from "use-image";

const width = 1000, height = 540;

let count = 0;

const arrImage = [
    {
        name: "when-start.png",
        x: width * (41 / 100),
        y: height * (76.2963 / 100),
        h: height * (17.87 / 100),
        w: width * (4.6 / 100),
        visible: false
    }, {
        name: "image2-middle.png",
        x: width * (37.14 / 100),
        y: height * (35.37 / 100),
        h: height * (14.63 / 100),
        w: width * (6.2 / 100),
        visible: false
    }, {
        name: "image2-start.png",
        x: width * (37.14 / 100),
        y: height * (35.37 / 100),
        h: height * (14.63 / 100),
        w: width * (6.2 / 100),
        visible: false
    }];

const PiantaEdificio = () => {
    const [image] = useImage("example-image.png");
    return <Image image={image} height={height} width={width} />;
};

const Sketch = ({ lightState }) => {
    const [index, setIndex] = useState(-1);

    const InitialImage = () => {
        const [image] = useImage(arrImage[0].name);
        return <Image image={image} x={arrImage[0].x} y={arrImage[0].y} visible={arrImage[0].visible}
            height={arrImage[0].h} width={arrImage[0].w} />;
    };

    const InitialImage2 = () => {
        const [image] = useImage(arrImage[1].name);
        return <Image image={image} x={arrImage[1].x} y={arrImage[1].y} visible={arrImage[1].visible}
            height={arrImage[1].h} width={arrImage[1].w} />;
    };

    const InitialImage3 = () => {
        const [image] = useImage(arrImage[2].name);
        return <Image image={image} x={arrImage[2].x} y={arrImage[2].y} visible={arrImage[2].visible}
            height={arrImage[2].h} width={arrImage[2].w} />;
    };

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
    }, [lightState])

    useEffect(() => {
        if (index >= 0 && index < arrImage.length)
            if (lightState)
                arrImage[index].visible = true;
            else {
                count = 0;
                setIndex(-1);
                for (let i = 0; i < arrImage.length; i++) {
                    arrImage[i].visible = false;
                }
            }
    }, [index, lightState])

    return (
        <Layer>
            <PiantaEdificio />
            <InitialImage />
            <InitialImage2 />
            <InitialImage3 />
        </Layer>
    );
};

export default Sketch;