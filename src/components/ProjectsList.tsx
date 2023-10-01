import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import styled from 'styled-components';
import { Project } from '../models/project.model';

interface ProjectsListProps {
    projects: Project[];
    setProjects: (projects: Project[]) => any;
}

const ProjectsListStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects, setProjects }) => {
    return (
        <ProjectsListStyled>
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    projects={projects}
                    setProjects={setProjects}
                ></ProjectCard>
            ))}
        </ProjectsListStyled>
    );
};
