import { SxProps, type BoxProps } from "rebass";

export const themeColor = {
  primary: "#13111c",
  darkGrey: "#1E1D28",
  darkBlue: "#211f2d"
};

export const theme: { [x: string]: BoxProps | object | keyof SxProps } = {
  breakpoints: ["600px", "800px", "1025px", "1225px", "1400px"],
  fontSizes: [12, 14, 16, 20, 28, 32, 48, 64],
  colors: themeColor,
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    normal: "0 0 15px 0 rgb(0 0 0 / 70%)",
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  },
  variants: {},
  text: {
    gradientMoving: {
      backgroundImage: "linear-gradient(38.73deg,#9c209d 21%,#e8482e 53%, #ffc600 75%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundSize: "150%",
      animation: "bg-animation 2s infinite alternate",
      "@keyframes bg-animation": {
        "0%": {
          backgroundPosition: "left"
        },
        "100%": {
          backgroundPosition: "right"
        }
      }
    }
  },
  input: {
    alignItems: "center",
    bg: "darkBlue",
    border: "1px solid #323638",
    borderRadius: 7,
    boxShadow: "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
    color: "white",
    display: "block",
    height: 57,
    justifyContent: "center",
    p: 16,
    error: {
      alignItems: "center",
      bg: "darkBlue",
      border: "1px solid #e8482e",
      borderRadius: 7,
      boxShadow:
        "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
      color: "white",
      display: "block",
      height: 57,
      justifyContent: "center",
      p: 16
    }
  },
  buttons: {
    primary: {
      alignItems: "center",
      bg: "darkBlue",
      fontWeight: 700,
      borderRadius: 7,
      boxShadow:
        "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
      color: "white",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      p: 16
    }
  },
  dialog: {
    bg: "red"
  }
};
