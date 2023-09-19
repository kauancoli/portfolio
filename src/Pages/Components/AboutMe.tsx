// src/components/AboutMe.tsx
import { CloudArrowDown, WhatsappLogo } from '@phosphor-icons/react';
import styled from 'styled-components';
import { Button } from '../../Styles/global';
import Curriculo from '/Curriculo_Kauan.pdf';

const AboutMeWrapper = styled.section`
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

const Title = styled.h1`
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

const Head = styled.p`
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

const Description = styled.p`
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
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper id="about-me">
      <Title>SOBRE MIM</Title>
      <div className="container">
        <div>
          <Head>São Vicente, Brasil</Head>
          <Description>
            Tenho experiência no desenvolvimento web, trabalhando com WordPress,
            Elementor, MySQL, PHP e JavaScript. Atualmente, atuo como
            Desenvolvedor Front-End, concentrando-me em JavaScript, React,
            TypeScript e Node.js. Estou constantemente buscando aprender novas
            tecnologias, com foco atual em aprimorar o TypeScript e explorando o
            Node.js, além de outras tecnologias relacionadas ao BackEnd.
          </Description>
        </div>
        <div>
          <Head>Formação Acadêmica</Head>
          <Description>
            <li>
              FATEC Baixada Santista Rubens Lara - Sistemas Para Internet <br />
              (Fev 2022 - Dez 2024)
            </li>
            <li>Curso Origamid - Front-End | UX / UI Design (Jan 2022)</li>
            <li>
              ETEC Dra Ruth Cardoso - Técnico em Desenvolvimento de Sistemas
              <br />
              (Fev 2020 - Jul 2021)
            </li>
          </Description>
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
    </AboutMeWrapper>
  );
};

export default AboutMe;
