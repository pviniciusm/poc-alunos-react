import { styled } from 'styled-components';
import { Project } from '../models/project.model';

interface ProjectProps {
    project: Project;
}

const ProjectCardStyled = styled.div`
    min-height: 80px;
    min-width: 260px;

    background-color: #f4f4f4;
    padding: 8px 12px;
    border-radius: 8px;

    margin: 8px;

    > h2 {
        margin-bottom: 16px;
    }
`;

export const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    return (
        <ProjectCardStyled>
            <h2>{project.descricao}</h2>
            <p>{project.ferramenta}</p>
        </ProjectCardStyled>
    );
};
