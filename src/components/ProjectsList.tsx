import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import styled from 'styled-components';
import { Project } from '../models/project.model';

interface ProjectsListProps {
    projects: Project[];
}

const ProjectsListStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    return (
        <ProjectsListStyled>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project}></ProjectCard>
            ))}
        </ProjectsListStyled>
    );
};
