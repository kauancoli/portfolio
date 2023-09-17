import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      brand: string;

      dark10: string;
      dark20: string;

      title: string;
      text: string;
    };
  }
}
