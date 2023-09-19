import { ThemeProvider } from 'styled-components';
import dark from '../../Styles/dark';
import AboutMe from '../Components/AboutMe';
import Experiences from '../Components/Experiences';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Navbar from '../Components/NavBar';
import Projects from '../Components/Projects';
import * as S from './Styles';

function Home() {
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
}

export default Home;
