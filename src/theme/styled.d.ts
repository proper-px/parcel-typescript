import "styled-components";

// import {} from "styled-components";
// import { Theme } from "reactlibrary2.0";
// declare module "styled-components" {
//   type Theme = typeof Theme;
//   export interface DefaultTheme extends Theme {}
// }

interface Sizes {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export type ThemeColors = "light" | "dark";

declare module "styled-components" {
  export interface DefaultTheme {
    mappedColors: {
      light: string;
      dark: string;
      primary: string;
      secondary: string;
    };
    colors: {
      light: string;
      dark: string;
      primary: string;
      secondary: string;
    };
    breakpointsMin: {
      start: string;
      mobile: string;
      tablet: string;
      smallDesktop: string;
      largeDesktop: string;
    };
    breakpointsMax: {
      start: string;
      mobile: string;
      tablet: string;
      smallDesktop: string;
      largeDesktop: string;
    };
    padding: {
      sm: string;
      base: string;
      lg: string;
    };
    containerWidths: Sizes;
    borderRadius: string;
    shadows: {
      sm: string;
      base: string;
      lg: string;
    };
    button: {
      darkenAmount: number;
      transition: string;
      isRounded: boolean;
    };
  }
}
