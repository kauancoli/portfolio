// src/Pages/Sections/AboutMe/AboutMe.tsx
import { CloudArrowDown, WhatsappLogo } from '@phosphor-icons/react';
import { Button, Title } from '../../../Styles/global';
import * as S from './Styles';
import Curriculo from '/Curriculo_Kauan.pdf';

const AboutMe = () => {
  return (
    <S.AboutMeWrapper id="about-me">
      <Title>Sobre Mim</Title>
      <div className="container">
        <div>
          <S.Head>São Vicente, Brasil</S.Head>
          <S.Description>
            Tenho experiência no desenvolvimento web, trabalhando com WordPress,
            Elementor, MySQL, PHP e JavaScript. Atualmente, atuo como
            Desenvolvedor Front-End, concentrando-me em JavaScript, React,
            TypeScript e Node.js. Estou constantemente buscando aprender novas
            tecnologias, com foco atual em aprimorar o TypeScript e explorando o
            Node.js, além de outras tecnologias relacionadas ao BackEnd.
          </S.Description>
        </div>
        <div>
          <S.Head>Formação Acadêmica</S.Head>
          <S.Description>
            <li>
              FATEC Baixada Santista Rubens Lara - Sistemas Para Internet <br />
              (Fev 2022 - Dez 2024)
            </li>
            <li>
              <a href="https://www.origamid.com/" target="_blank">
                Origamid
              </a>{' '}
              - Front-End | UX / UI Design (Jan 2022)
            </li>
            <li>
              ETEC Dra Ruth Cardoso - Técnico em Desenvolvimento de Sistemas
              <br />
              (Fev 2020 - Jul 2021)
            </li>
          </S.Description>
        </div>
      </div>
      <Button>
        <a href={Curriculo} download="Curriculo-KauanColi">
          <CloudArrowDown size={20} />
          Currículo
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5513988699197"
          target="_blank"
        >
          <WhatsappLogo size={20} />
          Telefone
        </a>
      </Button>
    </S.AboutMeWrapper>
  );
};

export default AboutMe;
