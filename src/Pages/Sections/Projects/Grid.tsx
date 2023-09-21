// src/Pages/Sections/Projects/Grid.tsx
import { SiGithub, SiVercel } from 'react-icons/si';
import { Button, Technologies, Tooltip } from '../../../Styles/global';
import { technologyIcons } from '../../Components/Icons';
import { projectsData } from './ProjectsData';
import * as S from './Styles';

export const Grid = () => {
  return (
    <S.ProjectsGrid>
      {projectsData.map((p) => (
        <S.Project key={p.id}>
          <S.Image src={p.imageSrc} alt={p.name} />
          <S.Name>{p.name}</S.Name>
          <S.Description>{p.description}</S.Description>

          <Technologies>
            {p.technologies.map((tech) => (
              <Tooltip key={tech} className="tooltip">
                {technologyIcons[tech]}
                <span className="tooltiptext">{tech}</span>
              </Tooltip>
            ))}
          </Technologies>

          <Button style={{ marginTop: '4rem' }}>
            {p.deploy !== '#' ? (
              <a href={p.deploy} target="_blank" rel="noopener noreferrer">
                <SiVercel />
                Deploy
              </a>
            ) : (
              <button disabled={true}>
                <SiVercel />
                Deploy
              </button>
            )}
            {p.repo !== '#' ? (
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                <SiGithub />
                Repositorio
              </a>
            ) : (
              <button disabled={true}>
                <SiGithub />
              </button>
            )}
          </Button>
        </S.Project>
      ))}
    </S.ProjectsGrid>
  );
};

export default Grid;
