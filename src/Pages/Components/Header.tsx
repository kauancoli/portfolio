// src/components/Header.tsx
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import styled from 'styled-components';
import { Button } from '../../Styles/global';

const HeaderWrapper = styled.header`
  text-align: left;
  padding: 2.4rem;

  @media screen and (min-width: 768px) {
    padding: 4.8rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 16rem 18rem;
  }
`;

const NameHeader = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;

const NameTitle = styled.h1`
  font-size: 3.2rem;
  margin: 0.8rem 0;
  color: ${({ theme }) => theme.colors.brand};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    font-size: 6.4rem;
    font-weight: 600;
  }
`;

const Image = styled.div`
  display: none;

  img {
    border: 0.2rem solid ${({ theme }) => theme.colors.brand};
    border-radius: 0.8rem;
  }

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <NameHeader>OLÁ, EU SOU</NameHeader>
          <NameTitle>KAUAN COLI</NameTitle>
          <NameHeader>DESENVOLVEDOR FRONT-END</NameHeader>
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
        <Image>
          <img src="Me.jpg" width={400} alt="hero" />
        </Image>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
