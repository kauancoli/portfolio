import { PhosphorLogo } from '@phosphor-icons/react';
import {
  SiExpress,
  SiFrontendmentor,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import styled from 'styled-components';
import { Button } from '../../Styles/global';

const technologyIcons: Record<string, React.ReactNode> = {
  Vercel: <SiVercel />,
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  StyledComponents: <SiStyledcomponents />,
  FrontendMentor: <SiFrontendmentor />,
  Vite: <SiVite />,
  NodeJS: <SiNodedotjs />,
  Phosphor: <PhosphorLogo />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  Tailwindcss: <SiTailwindcss />,
  Javascript: <SiJavascript />,
};

const projectsData = [
  {
    id: 1,
    name: 'Rest Countries API',
    description:
      'Frontend Mentor - REST Countries API with color theme switcher solution',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'StyledComponents',
      'FrontendMentor',
    ],
    imageSrc: 'Rest-Api.png',
    deploy: 'https://kauan-react-countries-api.vercel.app/',
    repo: 'https://github.com/kauancoli/react-rest-countries-api',
  },
  {
    id: 2,
    name: 'Quadro Kanban',
    description:
      'Quadro Kanban feito com a biblioteca react-dnd para drag and drop, branch com LocalStorage e outra com NodeJS e MongoDB',
    technologies: [
      'React',
      'TypeScript',
      'NodeJS',
      'MongoDB',
      'Express',
      'StyledComponents',
    ],
    imageSrc: 'Kanban.png',
    deploy: 'https://kauan-react-kanban.vercel.app/',
    repo: 'https://github.com/kauancoli/react-kanban-front',
  },
  {
    id: 3,
    name: 'Orkut Clone',
    description:
      'Este é um projeto criado como parte do Desafio #35 da Codelândia, que consiste em um clone da página da rede social Orkut',
    technologies: ['Javascript', 'React', 'Tailwindcss', 'Vite'],
    imageSrc: 'OrkutProject.png',
    deploy: '#',
    repo: 'https://github.com/kauancoli/orkutProject',
  },
  {
    id: 4,
    name: 'Portfolio - Kauan Coli',
    description: 'Portfolio pessoal feito com React e TypeScript',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'StyledComponents',
      'Phosphor',
    ],
    imageSrc: 'imagem_projeto_4.jpg',
    deploy: '#',
    repo: 'https://github.com/kauancoli/portfolio',
  },
];

const ProjectsWrapper = styled.section`
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.colors.dark20};
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.colors.title};
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;

  border-left: ${({ theme }) => theme.colors.brand} 3px solid;
`;

const Name = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.colors.title};
`;

const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.colors.text};
`;

const Technologies = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  font-size: 5rem;

  color: ${({ theme }) => theme.colors.brand};
`;

const Tooltip = styled.span`
  position: relative;

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

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Title>PROJETOS</Title>
      {projectsData.map((p) => (
        <Project key={p.id}>
          <Image src={p.imageSrc} alt={p.name} />
          <Name>{p.name}</Name>
          <Description>{p.description}</Description>

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
        </Project>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
