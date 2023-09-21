import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  text-align: left;
  padding: 2.4rem;

  @media screen and (min-width: 768px) {
    padding: 4.8rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 16rem 18rem;
  }
  @media screen and (min-width: 1660px) {
    padding: 14rem 22rem;
  }
`;

export const NameHeader = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: 1660px) {
    font-size: 3.2rem;
  }
`;

export const NameTitle = styled.h1`
  font-size: 3.2rem;
  margin: 0.8rem 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.brand};

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 6.4rem;
  }
  @media screen and (min-width: 1660px) {
    font-size: 10rem;
  }
`;

export const Image = styled.div`
  display: none;

  img {
    border: 0.2rem solid ${({ theme }) => theme.colors.brand};
    border-radius: 0.8rem;
    height: auto;

    @media screen and (min-width: 768px) {
      width: 300px;
    }

    @media screen and (min-width: 1280px) {
      width: 350px;
    }
    @media screen and (min-width: 1660px) {
      width: 400px;
    }
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
