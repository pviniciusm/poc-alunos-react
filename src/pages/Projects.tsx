import React, { useEffect, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { ProjectsList } from '../components/ProjectsList';
import { Project } from '../models/project.model';
import { listProjects } from '../config/services/project.service';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const AddProjectButton = styled.button`
    padding: 12px 24px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1.2rem;

    color: #fafafa;
    background-color: #1d439c;
    margin: 16px 0;
`;

const Projects: React.FC = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const userId = localStorage.getItem('user-id');

        if (!userId) {
            navigate('/login');
            return;
        }

        listProjects(userId).then(result => {
            if (!result.ok) {
                alert(result.message);
                return;
            }

            setProjects(result.data);
        });
    }, []);

    const handleAddNewProject = () => {
        localStorage.removeItem('project');
        navigate('/projects/add');
    };

    return (
        <DefaultLayout>
            <h1>Sua lista de projetos</h1>
            <AddProjectButton onClick={handleAddNewProject}>+ New Project</AddProjectButton>

            <ProjectsList projects={projects} setProjects={setProjects} />
        </DefaultLayout>
    );
};

export default Projects;
