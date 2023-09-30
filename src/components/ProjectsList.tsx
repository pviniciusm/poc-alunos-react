import { ProjectCard } from './ProjectCard';
import styled from 'styled-components';

const ProjectsListStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProjectsList = () => {
  const projects: any[] = [
    {
      id: 1,
      descricao: 'Teste projeto',
      ferramenta: 'React'
    },
    {
      id: 2,
      descricao: 'Teste projeto 2',
      ferramenta: 'Node.js'
    }
  ];

  return (
    <ProjectsListStyled>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project}></ProjectCard>
      ))}
    </ProjectsListStyled>
  );
};
