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
    color: ${({ theme }) => theme.colors.brand};
  }

  .menu {
    color: ${({ theme }) => theme.colors.title};
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="port">Portfólio</div>
      <div className="menu">
        <List size={24} />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
