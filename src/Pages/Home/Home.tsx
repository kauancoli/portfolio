import * as S from './Styles';
import { ThemeProvider } from 'styled-components';
import dark from '../../Styles/dark';
import light from '../../Styles/light';
import { useState } from 'react';
import Navbar from '../Components/NavBar';
import Header from '../Components/Header';
import AboutMe from '../Components/AboutMe';
import Experiences from '../Components/Experiences';
import Projects from '../Components/Projects';

function Home() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };

  console.log(toggleTheme);

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Navbar />
        <Header />
        <AboutMe />
        <Experiences />
        <Projects />
      </S.Container>
      ;
    </ThemeProvider>
  );
}

export default Home;
