import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2.4rem;
  user-select: none;
  color: ${({ theme }) => theme.colors.title};

  font-size: 1.4rem;
  font-weight: 400;

  @media screen and (min-width: 1280px) {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 1660px) {
    font-size: 2rem;
  }
`;

export const NavbarWrapper = styled.nav`
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
      display: none;
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

export const TextMenu = styled.div`
  display: none;
  user-select: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 6rem;

    a {
      font-size: 1.6rem;
      font-weight: 400;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.text};
    }
  }
  @media screen and (min-width: 1280px) {
    gap: 7rem;

    a {
      font-size: 1.8rem;
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
