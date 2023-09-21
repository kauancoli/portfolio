// src/Pages/Sections/TopPage/TopPage.tsx
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { Button } from '../../../Styles/global';
import * as S from './Styles';

const Header = () => {
  return (
    <S.HeaderWrapper id="home">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <S.NameHeader>OLÁ, EU SOU</S.NameHeader>
          <S.NameTitle>KAUAN COLI</S.NameTitle>
          <S.NameHeader>DESENVOLVEDOR FRONT-END</S.NameHeader>
          <Button>
            <a
              href="https://www.linkedin.com/in/kauan-coli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={22} />
              Linkedin
            </a>
            <a
              href="https://github.com/kauancoli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo size={22} />
              Github
            </a>
          </Button>
        </div>
        <S.Image>
          <img src="Me.jpg" alt="Kauan Coli" />
        </S.Image>
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;
