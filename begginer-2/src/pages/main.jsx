import React, { useState, useRef } from "react";
import Button from "./../components/common/button";

const Main = () => {
    const colorModeRef = useRef("redBtn");
    const colorTypeRef = useRef("light");
    const borderRadiusStyleRef = useRef("square");
    const shapeRef = useRef("thin");
    const sizeRef = useRef("tiny");

    const [buttonProps, setButtonProps] = useState({
        colorMode: "redBtn",
        colorType: "light",
        borderRadiusStyle: "square",
        shape: "thin",
        size: "tiny",
        state: "none",
    });

    const applyChanges = () => {
        setButtonProps({
            colorMode: colorModeRef.current,
            colorType: colorTypeRef.current,
            borderRadiusStyle: borderRadiusStyleRef.current,
            shape: shapeRef.current,
            size: sizeRef.current,
        });
    };

    return (
        <div>
            <select onChange={(e) => (colorModeRef.current = e.target.value)}>
                <option value="redBtn">Red</option>
                <option value="orangeBtn">Orange</option>
                <option value="yellowBtn">Yellow</option>
                <option value="greenBtn">Green</option>
                <option value="skyBlueBtn">SkyBlue</option>
                <option value="blueBtn">Blue</option>
                <option value="purpleBtn">Purple</option>
            </select>

            <select onChange={(e) => (colorTypeRef.current = e.target.value)}>
                <option value="light">Light</option>
                <option value="base">Base</option>
                <option value="weight">Weight</option>
            </select>

            <select
                onChange={(e) =>
                    (borderRadiusStyleRef.current = e.target.value)
                }
            >
                <option value="square">Square</option>
                <option value="oval">Oval</option>
                <option value="circle">Circle</option>
            </select>

            <select onChange={(e) => (shapeRef.current = e.target.value)}>
                <option value="thin">Thin</option>
                <option value="square">square</option>
                <option value="thick">Thick</option>
            </select>

            <select onChange={(e) => (sizeRef.current = e.target.value)}>
                <option value="tiny">Tiny</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="big">Big</option>
            </select>
            <button onClick={applyChanges}>Apply Changes</button>

            <Button {...buttonProps} text="Button Text" />
        </div>
    );
};

export default Main;
