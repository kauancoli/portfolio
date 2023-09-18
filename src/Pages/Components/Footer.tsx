// src/components/Footer.tsx
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2.5rem;
  color: ${({ theme }) => theme.colors.title};

  font-size: 1.4rem;
  font-weight: 400;
`;

const Footer = () => {
  return <FooterWrapper>@2023 - Kauan Coli</FooterWrapper>;
};

export default Footer;
