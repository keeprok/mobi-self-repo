import styled, { css } from "styled-components";
import { colors } from "../../libs/desigin-token/color";
import { sizes } from "./../../libs/desigin-token/size";
import { border } from "./../../libs/desigin-token/border";
const ColorCss = {
    redBtn: {
        light: {
            background: colors.rainbow.red.light,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.red.base}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.red.base}`,
        },
        base: {
            background: colors.rainbow.red.base,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.red.weight}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.red.weight}`,
        },
        weight: {
            background: colors.rainbow.red.weight,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.red.light}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.red.light}`,
        },
    },
    orangeBtn: {
        light: {
            background: colors.rainbow.orange.light,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.orange.base}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.orange.base}`,
        },
        base: {
            background: colors.rainbow.orange.base,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.orange.weight}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.orange.weight}`,
        },
        weight: {
            background: colors.rainbow.orange.weight,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.orange.light}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.orange.light}`,
        },
    },
    yellowBtn: {
        light: {
            background: colors.rainbow.yellow.light,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.yellow.base}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.yellow.base}`,
        },
        base: {
            background: colors.rainbow.yellow.base,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.yellow.weight}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.yellow.weight}`,
        },
        weight: {
            background: colors.rainbow.yellow.weight,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.yellow.light}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.yellow.light}`,
        },
    },
    greenBtn: {
        light: {
            background: colors.rainbow.green.light,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.green.base}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.green.base}`,
        },
        base: {
            background: colors.rainbow.green.base,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.green.weight}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.green.weight}`,
        },
        weight: {
            background: colors.rainbow.green.weight,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.green.light}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.green.light}`,
        },
    },
    skyBlueBtn: {
        light: {
            background: colors.rainbow.sky_blue.light,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.sky_blue.base}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.sky_blue.base}`,
        },
        base: {
            background: colors.rainbow.sky_blue.base,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.sky_blue.weight}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.sky_blue.weight}`,
        },
        weight: {
            background: colors.rainbow.sky_blue.weight,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.sky_blue.light}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.sky_blue.light}`,
        },
    },
    blueBtn: {
        light: {
            background: colors.rainbow.blue.light,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.blue.base}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.blue.base}`,
        },
        base: {
            background: colors.rainbow.blue.base,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.blue.weight}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.blue.weight}`,
        },
        weight: {
            background: colors.rainbow.blue.weight,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.blue.light}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.blue.light}`,
        },
    },
    purpleBtn: {
        light: {
            background: colors.rainbow.purple.light,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.purple.base}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.purple.base}`,
        },
        base: {
            background: colors.rainbow.purple.base,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.purple.weight}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.purple.weight}`,
        },
        weight: {
            background: colors.rainbow.purple.weight,
            ActiveBorder: `${border.size.md} solid ${colors.rainbow.purple.light}`,
            selectBorder: `${border.size.sm} solid ${colors.rainbow.purple.light}`,
        },
    },
};
const borderRadiusCss = {
    square: css`
        border-radius: ${border.radius.square};
    `,
    oval: css`
        border-radius: ${border.radius.oval};
    `,
    circle: css`
        border-radius: ${border.radius.circle};
    `,
}; //사각,타원,원

const SizeCss = {
    thick: {
        tiny: css`
            width: ${sizes.button.width.tiny};
            height: ${sizes.button.height.tiny};
        `,
        small: css`
            width: ${sizes.button.width.small};
            height: ${sizes.button.height.small};
        `,
        medium: css`
            width: ${sizes.button.width.medium};
            height: ${sizes.button.height.medium};
        `,
        big: css`
            width: ${sizes.button.width.big};
            height: ${sizes.button.height.big};
        `,
        very_big: css`
            width: ${sizes.button.width.very_big};
            height: ${sizes.button.height.big};
        `,
    },
    thin: {
        tiny: css`
            width: ${sizes.button.width.tiny};
            height: ${sizes.button.height.tiny};
        `,
        small: css`
            width: ${sizes.button.width.tiny};
            height: ${sizes.button.height.small};
        `,
        medium: css`
            width: ${sizes.button.width.tiny};
            height: ${sizes.button.height.medium};
        `,
    },
    square: {
        tiny: css`
            width: ${sizes.button.width.small};
            height: ${sizes.button.height.small};
        `,
        small: css`
            width: ${sizes.button.width.medium};
            height: ${sizes.button.height.medium};
        `,
        medium: css`
            width: ${sizes.button.width.big};
            height: ${sizes.button.height.big};
        `,
        big: css`
            width: ${sizes.button.width.very_big};
            height: ${sizes.button.height.very_big};
        `,
    },
};
export const StyledButton = styled.button`
    background-color: ${({ colorMode, colorType }) =>
        ColorCss[colorMode][colorType].background};
    ${({ borderRadiusStyle }) => borderRadiusCss[borderRadiusStyle]}
    ${({ shape, size }) => SizeCss[shape][size]}
    border: ${({ colorMode, colorType, isActive, isSelected }) => {
        if (isActive) {
            return ColorCss[colorMode][colorType].activeBorder;
        } else if (isSelected) {
            return ColorCss[colorMode][colorType].selectBorder;
        }
        return "none";
    }};
`;
//선택되면 border중간 ,active는 큼 ,풀리면없음
