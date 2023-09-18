import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import dark from '../../Styles/dark';
import light from '../../Styles/light';
import AboutMe from '../Components/AboutMe';
import Experiences from '../Components/Experiences';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Navbar from '../Components/NavBar';
import Projects from '../Components/Projects';
import * as S from './Styles';

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
        <Footer />
      </S.Container>
    </ThemeProvider>
  );
}

export default Home;
