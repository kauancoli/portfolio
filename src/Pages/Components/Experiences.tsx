import { useState } from 'react';
import styled from 'styled-components';

const ExperiencesWrapper = styled.section`
  padding: 2.4rem;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.colors.title};
`;

const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
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
`;

const ContentWrapper = styled.div`
  border-radius: 5px;

  h1 {
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.title};

    margin-bottom: 1.6rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6rem;

    p {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.4rem;

      color: ${({ theme }) => theme.colors.title};
    }
    .brand {
      color: ${({ theme }) => theme.colors.brand};
    }
  }

  p {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.8rem;

    color: ${({ theme }) => theme.colors.text};
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
              Atuei na criação e refatoração de códigos Front-End com foco
              principalmente em: React, TypeScript, NextJS e React Native.
            </p>
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
              "Atuei com as seguintes atividades: Utilização de ferramentas para
              criação de Páginas Web, incluindo WordPress com Elementor, MySQL e
              JSON. Desenvolvimento de lojas virtuais (Ecommerces) utilizando o
              plugin WooCommerce no WordPress. Programação com JavaScript e PHP.
              Realização de designs/prototipação utilizando Adobe Photoshop e
              Figma. Trabalhei com metodologia ágil, especificamente o Scrum e
              utilizei ferramentas de gestão ágil como Jira Software e
              Confluence.
            </p>
          </>
        )}
      </ContentWrapper>
    </ExperiencesWrapper>
  );
};

export default Experiences;
