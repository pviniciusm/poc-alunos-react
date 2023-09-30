import React, { useEffect, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { ProjectsList } from '../components/ProjectsList';
import { Project } from '../models/project.model';
import { listProjects } from '../config/services/project.service';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const userId = 'df2b30c4-bac9-48ff-8dd6-a37740e2ded5';

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
