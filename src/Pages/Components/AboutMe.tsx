// src/components/AboutMe.tsx
import { CloudArrowDown, EnvelopeSimple } from '@phosphor-icons/react';
import styled from 'styled-components';
import { Button } from '../../Styles/global';

const AboutMeWrapper = styled.section`
  text-align: left;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.colors.dark20};
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.colors.title};
`;

const Location = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.title};
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6rem;

  color: ${({ theme }) => theme.colors.text};
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <Title>SOBRE MIM</Title>
      <Location>São Vicente, Brasil</Location>
      <Description>
        Formado em Técnico de Desenvolvimento de Sistemas e atualmente curso
        Sistemas para Internet na Fatec Rubens Lara. Elaborei diversos trabalhos
        de Desenvolvimento Web utilizando WordPress + Elementor, MySQL, aliados
        com PHP e JavaScript. Atualmente trabalho como Desenvolvedor Front-End
        utilizando principalmente JavaScript, React, TypeScript e NodeJS.
      </Description>

      <Button>
        <button>
          <CloudArrowDown size={20} />
          Currículo
        </button>
        <button>
          <EnvelopeSimple size={20} />
          E-mail
        </button>
      </Button>
    </AboutMeWrapper>
  );
};

export default AboutMe;
