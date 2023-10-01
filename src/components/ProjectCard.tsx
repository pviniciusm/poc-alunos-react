import { styled } from 'styled-components';
import { Project } from '../models/project.model';
import { deleteProject } from '../config/services/project.service';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const handleDelete = () => {
        const projectsCopy = [...projects];

        const idxProject = projectsCopy.findIndex(item => item.id === project.id);
        if (idxProject < 0) {
            alert('Projeto já foi deletado');
            return;
        }

        const userId = localStorage.getItem('user-id');

        deleteProject(userId!, project.id).then(result => {
            if (!result.ok) {
                alert(result.message);
                return;
            }

            projectsCopy.splice(idxProject, 1);
            setProjects(projectsCopy);
        });
    };

    const handleUpdate = () => {
        localStorage.setItem('project', JSON.stringify(project));

        navigate('/projects/add');
    };

    return (
        <ProjectCardStyled>
            <h2>{project.descricao}</h2>
            <p>{project.ferramenta}</p>
            <div className="project-action">
                <button className="btn-deletar" onClick={handleDelete}>
                    Deletar
                </button>
                <button className="btn-editar" onClick={handleUpdate}>
                    Editar
                </button>
            </div>
        </ProjectCardStyled>
    );
};
