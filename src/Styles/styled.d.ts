import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundColor: string;

      titleColor: string;
      textColor: string;

      elementColor: string;
    };
  }
}
