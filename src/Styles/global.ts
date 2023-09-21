import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Inter', sans-serif;       
       font-size: 62.5%;


       a{
         text-decoration:none;
       }

   }
   #root{
       margin: 0 auto;

   }

   ::-webkit-scrollbar {
    width: 6px;
    height: 5px;
  }

  ::-webkit-scrollbar-corner {
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: #121212;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #181818;
  }
`;

export default GlobalStyle;

export const Title = styled.h1`
  text-transform: uppercase;

  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.title};

  @media screen and (min-width: 768px) {
    margin-bottom: 1.6rem;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 3.2rem;
  }
  @media screen and (min-width: 1660px) {
    font-size: 3rem;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 6.4rem;
  gap: 2.4rem;
  user-select: none;

  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    color: ${({ theme }) => theme.colors.title};

    border: 2px solid ${({ theme }) => theme.colors.brand};
    border-radius: 0.4rem;

    cursor: pointer;

    width: 144px;
    height: 40px;

    font-size: 1.4rem;
    font-weight: 600;

    @media screen and (min-width: 1280px) {
      width: 155px;
      height: 45px;

      font-size: 1.6rem;
    }

    @media screen and (min-width: 1660px) {
      width: 200px;
      height: 70px;

      font-size: 1.8rem;
    }
  }

  button:disabled {
    border: 2px solid ${({ theme }) => theme.colors.title};
    opacity: 0.3;

    cursor: not-allowed;
  }

  button:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.brand};
    opacity: 0.8;
  }

  a:hover {
    background-color: ${({ theme }) => theme.colors.brand};
    opacity: 0.8;
  }

  svg {
    margin-right: 1rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8rem;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 6rem;
  }

  @media screen and (min-width: 1660px) {
    margin-top: 8rem;
  }
`;

export const Technologies = styled.div`
  display: flex;
  gap: 2rem;

  font-size: 10rem;

  color: ${({ theme }) => theme.colors.brand};

  @media screen and (min-width: 1660px) {
    font-size: 15rem;
  }
`;

export const Tooltip = styled.span`
  position: relative;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  .tooltiptext {
    visibility: hidden;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.2s;

    background-color: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.title};

    font-size: 1.2rem;
    text-align: center;

    border-radius: 0.4rem;
    padding: 1.2rem;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
      bottom: 90%;
    }
    @media screen and (min-width: 1280px) {
      font-size: 1.4rem;
      bottom: 90%;
    }
    @media screen and (min-width: 1660px) {
      font-size: 1.6rem;
      bottom: 90%;
    }
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;
