import { styled } from 'styled-components';
import { Project } from '../models/project.model';

interface ProjectProps {
    project: Project;
    projects: Project[];
    setProjects: (projects: Project[]) => any;
}

const ProjectCardStyled = styled.div`
    min-height: 160px;
    width: 260px;

    background-color: #f4f4f4;
    padding: 8px 12px;
    border-radius: 8px;

    margin: 8px;

    > h2 {
        margin-bottom: 16px;
    }

    .project-action {
        margin-top: 12px;

        > button {
            margin-right: 8px;
            padding: 8px 12px;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 1rem;

            &.btn-deletar {
                background-color: #b53b3b;
                color: #fafafa;
            }
            &.btn-editar {
                background-color: #3b5cb5;
                color: #fafafa;
            }
        }
    }
`;

export const ProjectCard: React.FC<ProjectProps> = ({ project, projects, setProjects }) => {
    const deleteProject = () => {
        const projectsCopy = [...projects];

        const idxProject = projectsCopy.findIndex(item => item.id === project.id);
        if (idxProject < 0) {
            alert('Projeto já foi deletado');
            return;
        }

        projectsCopy.splice(idxProject, 1);

        setProjects(projectsCopy);
    };

    return (
        <ProjectCardStyled>
            <h2>{project.descricao}</h2>
            <p>{project.ferramenta}</p>
            <div className="project-action">
                <button className="btn-deletar" onClick={deleteProject}>
                    Deletar
                </button>
                <button className="btn-editar">Editar</button>
            </div>
        </ProjectCardStyled>
    );
};
