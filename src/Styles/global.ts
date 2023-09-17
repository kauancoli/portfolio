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
       margin:0 auto;
   }

   ::-webkit-scrollbar {
    width: 6px;
    height: 5px;
  }

  ::-webkit-scrollbar-corner {
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: hsl(0, 0%, 98%);
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: hsl(207, 26%, 17%);
  }
`;

export default GlobalStyle;

//Button Component
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 6.4rem;
  gap: 2.4rem;

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
  }

  button:disabled {
    border: 2px solid ${({ theme }) => theme.colors.title};
    opacity: 0.3;
  }

  svg {
    margin-right: 1rem;
  }
`;
