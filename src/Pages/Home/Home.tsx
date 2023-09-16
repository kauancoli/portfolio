import * as S from './Styles';
import { ThemeProvider } from 'styled-components';
import dark from '../../Styles/dark';
import light from '../../Styles/light';
import { useState } from 'react';

function Home() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };

  console.log(toggleTheme);

  return (
    <ThemeProvider theme={theme}>
      <S.Container>Home</S.Container>;
    </ThemeProvider>
  );
}

export default Home;
