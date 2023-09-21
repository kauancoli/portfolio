// src/Pages/Home/Home.tsx
import { ThemeProvider } from 'styled-components';
import dark from '../../Styles/dark';
import AboutMe from '../Sections/AboutMe/AboutMe';
import Experiences from '../Sections/Experiences/Experiences';
import Footer from '../Sections/NavFooter/Footer';
import Navbar from '../Sections/NavFooter/NavBar';
import Projects from '../Sections/Projects/Projects';
import Header from '../Sections/TopPage/TopPage';
import * as S from './Styles';

const Home = () => {
  let theme = dark;

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
};

export default Home;
