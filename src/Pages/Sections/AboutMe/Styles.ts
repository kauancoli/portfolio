import styled from 'styled-components';

export const AboutMeWrapper = styled.section`
  text-align: justify;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.colors.dark20};

  .container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 2rem;
    }

    @media screen and (min-width: 1280px) {
      flex-direction: row;
      gap: 7.6rem;
    }
    @media screen and (min-width: 1660px) {
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 4.8rem;
  }
  @media screen and (min-width: 1280px) {
    padding: 10rem 15rem;
  }
  @media screen and (min-width: 1660px) {
    padding: 10rem 22rem;
  }
`;

export const Head = styled.p`
  font-size: 1.4rem;
  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.title};

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 1660px) {
    font-size: 2.4rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6rem;
  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 2rem;
    margin-top: 1.6rem;

    max-width: 50rem;

    @media screen and (min-width: 950px) {
      max-width: 70rem;
    }
    @media screen and (min-width: 1200px) {
      max-width: 85rem;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.6rem;
    line-height: 3.2rem;
    margin-top: 2.1rem;

    max-width: 65rem;
  }
  @media screen and (min-width: 1660px) {
    font-size: 2rem;
    line-height: 4rem;

    max-width: 70rem;
  }

  a,
  li {
    font-size: 1rem;
    font-weight: 300;
    white-space: normal;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
      line-height: 2rem;
    }

    @media screen and (min-width: 1280px) {
      font-size: 1.6rem;
      line-height: 3.2rem;
    }

    @media screen and (min-width: 1660px) {
      font-size: 2rem;
      line-height: 4rem;
    }
  }

  a {
    font-weight: 600;
  }
`;
