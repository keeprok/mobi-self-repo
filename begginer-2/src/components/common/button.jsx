import { useState } from "react";
import { StyledButton } from "../style/button.style";

// Button 컴포넌트
const Button = ({
    colorMode,
    colorType,
    borderRadiusStyle,
    shape,
    size,
    sizeShape,
}) => {
    const [isActive, setIsActive] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const handleMouseDown = () => {
        setIsActive(true);
    };

    const handleMouseUp = () => {
        setIsActive(false);
        setIsSelected(!isSelected);
    };

    const handleMouseLeave = () => {
        setIsActive(false);
    };

    return (
        <StyledButton
            colorMode={colorMode}
            colorType={colorType}
            borderRadiusStyle={borderRadiusStyle}
            shape={shape}
            size={size}
            isActive={isActive}
            isSelected={isSelected}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            1
        </StyledButton>
    );
};
export default Button;
