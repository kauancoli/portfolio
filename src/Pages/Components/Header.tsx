import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import styled from 'styled-components';
import { Button } from '../../Styles/global';

const HeaderWrapper = styled.header`
  text-align: left;
  padding: 2.4rem;
`;

const NameHeader = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
`;

const NameTitle = styled.h1`
  font-size: 3.2rem;
  margin: 0.8rem 0;
  color: ${({ theme }) => theme.colors.brand};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <NameHeader>OLÁ, EU SOU</NameHeader>
      <NameTitle>KAUAN COLI</NameTitle>
      <NameHeader>DESENVOLVEDOR FRONT-END</NameHeader>
      <Button>
        <button>
          <LinkedinLogo size={22} />
          Linkedin
        </button>
        <button>
          <GithubLogo size={22} />
          Github
        </button>
      </Button>
    </HeaderWrapper>
  );
};

export default Header;
