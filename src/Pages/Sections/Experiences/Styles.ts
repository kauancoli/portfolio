import styled from 'styled-components';

export const ExperiencesWrapper = styled.section`
  padding: 2.4rem;

  .container {
    @media screen and (min-width: 1280px) {
      display: flex;
      justify-content: space-between;
      gap: 8rem;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 4.8rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 10rem 18rem;
  }

  @media screen and (min-width: 1660px) {
    padding: 10rem 22rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.colors.title};

  @media screen and (min-width: 1660px) {
    font-size: 3rem;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Tab = styled.div<{ isselected: boolean }>`
  flex: 1;
  text-align: center;
  padding: 1rem;

  background-color: ${({ isselected }) =>
    isselected ? '#151515' : 'transparent'};
  color: ${({ isselected }) => (isselected ? '#fff' : '#C4C4C4')};
  border-bottom: ${({ isselected }) =>
    isselected ? '3px solid #9A21FA' : 'none'};

  font-size: 1.4rem;
  font-weight: 400;

  cursor: pointer;
  margin-bottom: 3.2rem;

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
    padding: 1.5rem 1rem;
  }

  @media screen and (min-width: 1280px) {
    text-align: left;
    font-size: 1.8rem;

    width: 20rem;
    max-height: 6rem;
    padding: 2rem 1.5rem;

    border-left: ${({ isselected }) =>
      isselected ? '3px solid #9A21FA' : '3px solid #151515'};
    border-bottom: none;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1660px) {
    font-size: 2.2rem;

    width: 24rem;
    max-height: 7rem;
  }
`;

export const ContentWrapper = styled.div`
  border-radius: 5px;

  h1 {
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.title};

    margin-bottom: 1.6rem;

    @media screen and (min-width: 768px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    @media screen and (min-width: 1280px) {
      font-size: 2.4rem;
    }
    @media screen and (min-width: 1660px) {
      font-size: 3rem;
      margin-bottom: 2.4rem;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6rem;

    @media screen and (min-width: 1660px) {
      margin-bottom: 2.4rem;
    }

    p {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.4rem;

      color: ${({ theme }) => theme.colors.title};

      @media screen and (min-width: 768px) {
        font-size: 1.6rem;
      }

      @media screen and (min-width: 1280px) {
        font-size: 1.6rem;
      }
      @media screen and (min-width: 1660px) {
        font-size: 2rem;
      }
    }
    .brand {
      color: ${({ theme }) => theme.colors.brand};
    }
  }

  p {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.8rem;
    text-align: justify;

    color: ${({ theme }) => theme.colors.text};

    @media screen and (min-width: 768px) {
      font-size: 1.6rem;
    }

    @media screen and (min-width: 1280px) {
      font-size: 1.8rem;
    }
    @media screen and (min-width: 1660px) {
      font-size: 2.2rem;
    }
  }
`;
