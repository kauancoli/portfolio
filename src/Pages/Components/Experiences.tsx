// src/components/Experiences.tsx
import { useState } from 'react';
import styled from 'styled-components';
import { technologyIcons } from './Icons';

const ExperiencesWrapper = styled.section`
  padding: 2.4rem;

  .container {
    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      gap: 8rem;
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    padding: 10rem 18rem;
  }

  @media screen and (min-width: 1660px) {
    padding: 10rem 22rem;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.colors.title};

  @media screen and (min-width: 1660px) {
    font-size: 3rem;
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Tab = styled.div<{ isSelected: boolean }>`
  flex: 1;

  text-align: center;

  padding: 1rem;

  background-color: ${({ isSelected }) =>
    isSelected ? '#151515' : 'transparent'};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#C4C4C4')};
  border-bottom: ${({ isSelected }) =>
    isSelected ? '3px solid #9A21FA' : 'none'};

  font-size: 1.4rem;
  font-weight: 400;

  cursor: pointer;
  margin-bottom: 3.2rem;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    text-align: left;
    font-size: 1.8rem;

    width: 20rem;
    max-height: 6rem;
    padding: 2rem 1.5rem;

    border-left: ${({ isSelected }) =>
      isSelected ? '3px solid #9A21FA' : '3px solid #151515'};
    border-bottom: none;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1660px) {
    font-size: 2.2rem;

    width: 24rem;
    max-height: 7rem;
  }
`;

const ContentWrapper = styled.div`
  border-radius: 5px;

  h1 {
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.title};

    margin-bottom: 1.6rem;

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1024px) {
      font-size: 2.4rem;
    }
    @media screen and (min-width: 1660px) {
      font-size: 3rem;
      margin-bottom: 2.4rem;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6rem;

    @media screen and (min-width: 1660px) {
      margin-bottom: 2.4rem;
    }

    p {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.4rem;

      color: ${({ theme }) => theme.colors.title};

      @media screen and (min-width: 768px) {
      }

      @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
      }
      @media screen and (min-width: 1660px) {
        font-size: 2rem;
      }
    }
    .brand {
      color: ${({ theme }) => theme.colors.brand};
    }
  }

  p {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.8rem;
    text-align: justify;

    color: ${({ theme }) => theme.colors.text};

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1024px) {
      font-size: 1.8rem;
    }
    @media screen and (min-width: 1660px) {
      font-size: 2.2rem;
    }
  }
`;

const Technologies = styled.div`
  display: flex;
  gap: 2rem;

  font-size: 10rem;

  color: ${({ theme }) => theme.colors.brand};

  @media screen and (min-width: 1660px) {
    font-size: 15rem;
  }
`;

const Tooltip = styled.span`
  position: relative;
  display: none;

  @media screen and (min-width: 1024px) {
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
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

const Experiences = () => {
  const [selectedTab, setSelectedTab] = useState('GBM Tech');

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <ExperiencesWrapper>
      <Title>EXPERIÊNCIA</Title>
      <div className="container">
        <TabsWrapper>
          <Tab
            isSelected={selectedTab === 'GBM Tech'}
            onClick={() => handleTabClick('GBM Tech')}
          >
            GBM Tech
          </Tab>
          <Tab
            isSelected={selectedTab === 'Mental Guild'}
            onClick={() => handleTabClick('Mental Guild')}
          >
            Mental Guild
          </Tab>
        </TabsWrapper>
        <ContentWrapper>
          {selectedTab === 'GBM Tech' && (
            <>
              <h1>Desenvolvedor Frontend Jr.</h1>
              <div>
                <p className="brand">GBM Tech & Control</p>
                <p>Dez 2022 - Ago 2023</p>
              </div>
              <p>
                Atuei na criação e aprimoramento de códigos Front-End, com foco
                principal nas seguintes tecnologias: React, TypeScript, Next.js
                e React Native. Minhas responsabilidades incluíram o
                desenvolvimento de interfaces de usuário atraentes e funcionais,
                a implementação de recursos interativos e responsivos, bem como
                a integração de APIs e serviços back-end para garantir uma
                experiência perfeita para o usuário final.
              </p>
              <Technologies>
                <Tooltip className="tooltip">
                  {technologyIcons['React']}
                  <span className="tooltiptext">React</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['TypeScript']}
                  <span className="tooltiptext">TypeScript</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['NodeJS']}
                  <span className="tooltiptext">NodeJS</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['Javascript']}
                  <span className="tooltiptext">Javascript</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['StyledComponents']}
                  <span className="tooltiptext">StyledComponents</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['Git']}
                  <span className="tooltiptext">Git</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['Vite']}
                  <span className="tooltiptext">Vite</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['ThreeJS']}
                  <span className="tooltiptext">ThreeJS</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['NextJS']}
                  <span className="tooltiptext">NextJS</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['Jira']}
                  <span className="tooltiptext">Jira</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['BitBucket']}
                  <span className="tooltiptext">BitBucket</span>
                </Tooltip>
              </Technologies>
            </>
          )}
          {selectedTab === 'Mental Guild' && (
            <>
              <h1>Desenvolvedor de Software</h1>
              <div>
                <p className="brand">Mental Guild</p>
                <p>Abr 2022 - Nov 2023</p>
              </div>
              <p>
                Atuei com as seguintes atividades: Utilização de ferramentas
                para criação de Páginas Web, incluindo WordPress com Elementor,
                MySQL e JSON. Desenvolvimento de lojas virtuais (Ecommerces)
                utilizando o plugin WooCommerce no WordPress. Programação com
                JavaScript e PHP. Realização de designs/prototipação utilizando
                Adobe Photoshop e Figma. Trabalhei com metodologia ágil,
                especificamente o Scrum e utilizei ferramentas de gestão ágil
                como Jira Software e Confluence.
              </p>
              <Technologies>
                <Tooltip className="tooltip">
                  {technologyIcons['Javascript']}
                  <span className="tooltiptext">JavaScript</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['PHP']}
                  <span className="tooltiptext">PHP</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['WordPress']}
                  <span className="tooltiptext">WordPress</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['Elementor']}
                  <span className="tooltiptext">Elementor</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['WooCommerce']}
                  <span className="tooltiptext">WooCommerce</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['MySQL']}
                  <span className="tooltiptext">MySQL</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['Jira']}
                  <span className="tooltiptext">Jira</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['Photoshop']}
                  <span className="tooltiptext">Photoshop</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['Figma']}
                  <span className="tooltiptext">Figma</span>
                </Tooltip>
                <Tooltip className="tooltip">
                  {technologyIcons['Confluence']}
                  <span className="tooltiptext">Confluence</span>
                </Tooltip>
              </Technologies>
            </>
          )}
        </ContentWrapper>
      </div>
    </ExperiencesWrapper>
  );
};

export default Experiences;
