import React, { useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { ProjectsList } from '../components/ProjectsList';
import { Project } from '../models/project.model';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    return (
        <DefaultLayout>
            <h1>Sua lista de projetos</h1>
            <ProjectsList projects={projects} />
        </DefaultLayout>
    );
};

export default Projects;
