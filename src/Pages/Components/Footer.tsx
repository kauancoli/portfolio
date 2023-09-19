// src/components/Footer.tsx
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2.4rem;
  user-select: none;
  color: ${({ theme }) => theme.colors.title};

  font-size: 1.4rem;
  font-weight: 400;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 1660px) {
    font-size: 2rem;
  }
`;

const Footer = () => {
  return <FooterWrapper>@2023 - Kauan Coli</FooterWrapper>;
};

export default Footer;
