export type BrandColors = "primary" | "secondary" | "light" | "dark";

export interface IStyleConfig {
  brandedTheme: BrandColors;
  rounded?: boolean;
  border?: boolean;
  shadow?: boolean;
}
