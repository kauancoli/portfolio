// src/Pages/Sections/Experiences/GBMTech.tsx
import { Technologies, Tooltip } from '../../../Styles/global';
import { technologyIcons } from '../../Components/Icons';

export const GBMTech = () => {
  return (
    <>
      <h1>Desenvolvedor Frontend Jr.</h1>
      <div>
        <p className="brand">GBM Tech & Control</p>
        <p>Dez 2022 - Ago 2023</p>
      </div>
      <p>
        Atuei na criação e aprimoramento de códigos Front-End, com foco
        principal nas seguintes tecnologias: React, TypeScript, Next.js e React
        Native. Minhas responsabilidades incluíram o desenvolvimento de
        interfaces de usuário atraentes e funcionais, a implementação de
        recursos interativos e responsivos, bem como a integração de APIs e
        serviços back-end para garantir uma experiência perfeita para o usuário
        final.
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
          {technologyIcons['Javascript']}
          <span className="tooltiptext">Javascript</span>
        </Tooltip>
        <Tooltip className="tooltip">
          {technologyIcons['Git']}
          <span className="tooltiptext">Git</span>
        </Tooltip>
        <Tooltip className="tooltip">
          {technologyIcons['NodeJS']}
          <span className="tooltiptext">NodeJS</span>
        </Tooltip>
        <Tooltip className="tooltip">
          {technologyIcons['StyledComponents']}
          <span className="tooltiptext">StyledComponents</span>
        </Tooltip>
        <Tooltip className="tooltip">
          {technologyIcons['ThreeJS']}
          <span className="tooltiptext">ThreeJS</span>
        </Tooltip>
        <Tooltip className="tooltip">
          {technologyIcons['Vite']}
          <span className="tooltiptext">Vite</span>
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
  );
};

export default GBMTech;
