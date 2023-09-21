import { List } from '@phosphor-icons/react';
import * as S from './Styles';

const Navbar = () => {
  return (
    <S.NavbarWrapper>
      <div className="port">Portfólio</div>
      <div className="menu">
        <List size={24} />
      </div>

      <S.TextMenu>
        <a href="#home">Home</a>
        <a href="#about-me">Sobre mim</a>
        <a href="#experiences">Experiencias</a>
        <a href="#projects">Projetos</a>
      </S.TextMenu>
    </S.NavbarWrapper>
  );
};

export default Navbar;
