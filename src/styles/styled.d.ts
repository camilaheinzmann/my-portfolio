import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      navbar: string;
      background: string;
      cardBackground: string;
      text: string;
      textSecondary: string;
      textContrast: string;
    };
  }
}
