import React from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { ProjectsList } from '../components/ProjectsList';

const Projects: React.FC = () => {
  return (
    <DefaultLayout>
      <h1>Sua lista de projetos</h1>
      <ProjectsList />
    </DefaultLayout>
  );
};

export default Projects;
