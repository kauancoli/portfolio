// src/Pages/Sections/Experiences/MentalGuild.tsx
import { Technologies, Tooltip } from '../../../Styles/global';
import { technologyIcons } from '../../Components/Icons';

export const MentalGuild = () => {
  return (
    <>
      <h1>Desenvolvedor de Software</h1>
      <div>
        <p className="brand">Mental Guild</p>
        <p>Abr 2022 - Nov 2022</p>
      </div>
      <p>
        Atuei com as seguintes atividades: Utilização de ferramentas para
        criação de Páginas Web, incluindo WordPress com Elementor, MySQL e JSON.
        Desenvolvimento de lojas virtuais (Ecommerces) utilizando o plugin
        WooCommerce no WordPress. Programação com JavaScript e PHP. Realização
        de designs/prototipação utilizando Adobe Photoshop e Figma. Trabalhei
        com metodologia ágil, especificamente o Scrum e utilizei ferramentas de
        gestão ágil como Jira Software e Confluence.
      </p>
      <Technologies>
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
          {technologyIcons['PHP']}
          <span className="tooltiptext">PHP</span>
        </Tooltip>
        <Tooltip className="tooltip">
          {technologyIcons['Javascript']}
          <span className="tooltiptext">JavaScript</span>
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
          {technologyIcons['Jira']}
          <span className="tooltiptext">Jira</span>
        </Tooltip>
        <Tooltip className="tooltip">
          {technologyIcons['Confluence']}
          <span className="tooltiptext">Confluence</span>
        </Tooltip>
      </Technologies>
    </>
  );
};

export default MentalGuild;
