import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.colors.dark20};

  @media screen and (min-width: 768px) {
    padding: 4.8rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 10rem 18rem;
  }

  @media screen and (min-width: 1660px) {
    padding: 14rem 22rem;
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

export const ProjectsGrid = styled.div`
  display: block;

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7rem;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  justify-content: space-between;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;

  border-left: ${({ theme }) => theme.colors.brand} 3px solid;

  @media screen and (min-width: 1280px) {
    max-width: 500px;
    max-height: 500px;

    border-left: ${({ theme }) => theme.colors.brand} 5px solid;
  }

  @media screen and (min-width: 1660px) {
    max-width: 600px;
    max-height: 700px;

    border-left: ${({ theme }) => theme.colors.brand} 7px solid;
  }
`;

export const Name = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.colors.title};

  @media screen and (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 1280px) {
    font-size: 2.4rem;
    margin-top: 3rem;
  }
  @media screen and (min-width: 1660px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 1660px) {
    font-size: 2rem;
  }
`;
