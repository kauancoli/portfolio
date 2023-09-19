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
    }

    @media screen and (min-width: 1024px) {
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
  @media screen and (min-width: 1024px) {
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
  }

  @media screen and (min-width: 1024px) {
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
  }

  @media screen and (min-width: 1024px) {
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
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 3.2rem;
    margin-top: 2.1rem;

    max-width: 50rem;
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
      white-space: normal;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1.6rem;
      font-weight: 300;
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
    <AboutMeWrapper>
      <Title>SOBRE MIM</Title>
      <div className="container">
        <div>
          <Head>São Vicente, Brasil</Head>
          <Description>
            Formado em Técnico de Desenvolvimento de Sistemas e atualmente curso
            Sistemas para Internet na Fatec Rubens Lara. Elaborei diversos
            trabalhos de Desenvolvimento Web utilizando WordPress + Elementor,
            MySQL, aliados com PHP e JavaScript. Atualmente trabalho como
            Desenvolvedor Front-End utilizando principalmente JavaScript, React,
            TypeScript e NodeJS.
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
        <button>
          <WhatsappLogo size={20} />
          Telefone
        </button>
      </Button>
    </AboutMeWrapper>
  );
};

export default AboutMe;
