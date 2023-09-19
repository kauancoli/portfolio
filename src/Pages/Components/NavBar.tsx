// src/components/NavBar.tsx
import { List } from '@phosphor-icons/react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;

  .port {
    font-weight: 500;
    font-size: 1.8rem;
    user-select: none;
    color: ${({ theme }) => theme.colors.brand};
  }

  .menu {
    color: ${({ theme }) => theme.colors.title};
    display: block;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    padding: 4.8rem;

    .port {
      font-size: 2rem;
    }

    .menu {
      display: block;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 4rem 18rem;

    .port {
      font-size: 2.4rem;
    }

    .menu {
      display: none;
    }
  }

  @media screen and (min-width: 1660px) {
    padding: 4rem 22rem;

    .port {
      font-size: 3.2rem;
    }
  }
`;

const TextMenu = styled.div`
  display: none;
  user-select: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 6rem;

    a {
      font-size: 1.8rem;
      font-weight: 400;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media screen and (min-width: 1660px) {
    gap: 7rem;

    a {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="port">Portfólio</div>
      <div className="menu">
        <List size={24} />
      </div>
      <TextMenu>
        <a href="#home">Home</a>
        <a href="#about-me">Sobre mim</a>
        <a href="#experiences">Experiencias</a>
        <a href="#projects">Projetos</a>
      </TextMenu>
    </NavbarWrapper>
  );
};

export default Navbar;
