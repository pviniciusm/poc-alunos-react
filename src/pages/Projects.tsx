import React, { useEffect, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { ProjectsList } from '../components/ProjectsList';
import { Project } from '../models/project.model';
import { listProjects } from '../config/services/project.service';
import { useNavigate } from 'react-router-dom';

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

    return (
        <DefaultLayout>
            <h1>Sua lista de projetos</h1>
            <ProjectsList projects={projects} />
        </DefaultLayout>
    );
};

export default Projects;
