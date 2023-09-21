// src/Pages/Sections/Experiences/Experiences.tsx
import { useState } from 'react';
import GBMTech from './GBMTech';
import MentalGuild from './MentalGuild';

import * as S from './Styles';

const Experiences = () => {
  const [selectedTab, setSelectedTab] = useState('GBM Tech');

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <S.ExperiencesWrapper id="experiences">
      <S.Title>EXPERIÊNCIA</S.Title>
      <div className="container">
        <S.TabsWrapper>
          <S.Tab
            isselected={selectedTab === 'GBM Tech'}
            onClick={() => handleTabClick('GBM Tech')}
          >
            GBM Tech
          </S.Tab>
          <S.Tab
            isselected={selectedTab === 'Mental Guild'}
            onClick={() => handleTabClick('Mental Guild')}
          >
            Mental Guild
          </S.Tab>
        </S.TabsWrapper>
        <S.ContentWrapper>
          {selectedTab === 'GBM Tech' && <GBMTech />}
          {selectedTab === 'Mental Guild' && <MentalGuild />}
        </S.ContentWrapper>
      </div>
    </S.ExperiencesWrapper>
  );
};

export default Experiences;
