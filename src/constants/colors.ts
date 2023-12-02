// TODO: write documentation for colors and palette in own markdown file and add links from here

import { PlatformColor } from "react-native";

const palette: Record<string, string> = {
  blue100: "#6494C6",
  blue200: "#007DFF",
  purple: "#873BC2",
  gray: "gray",

  neutral100: "#FFFFFF",
  // neutral200: "#F4F2F1",
  // neutral300: "#D7CEC9",
  // neutral400: "#B6ACA6",
  // neutral500: "#978F8A",
  neutral550: "#CECECE",
  neutral600: "#BBBBBB",
  neutral700: "#ABB0BA",
  // neutral800: "#191015",
  neutral900: "#000000",

  // primary100: "#F4E0D9",
  // primary200: "#E8C1B4",
  // primary300: "#DDA28E",
  // primary400: "#D28468",
  // primary500: "#C76542",
  // primary600: "#A54F31",

  // secondary100: "#DCDDE9",
  // secondary200: "#BCC0D6",
  // secondary300: "#9196B9",
  // secondary400: "#626894",
  // secondary500: "#41476E",

  // accent100: "#FFEED4",
  // accent200: "#FFE1B2",
  // accent300: "#FDD495",
  // accent400: "#FBC878",
  // accent500: "#FFBB50",

  angry100: "#FF2F2F",
  angry500: "#D63031",

  // overlay20: "rgba(25, 16, 21, 0.2)",
  // overlay50: "rgba(25, 16, 21, 0.5)",
} as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",

  text: palette.neutral900,
  /**
   * Secondary text information.
   */
  shadow: palette.neutral550,
  textDim: palette.neutral600,

  btnGray: palette.neutral700,

  background: palette.neutral200,

  border: palette.neutral400,

  tint: palette.purple,

  separator: palette.neutral300,

  inactiveBlue: palette.blue100,

  blue: palette.blue200,

  error: palette.angry100,

  errorBackground: palette.angry500,
};
