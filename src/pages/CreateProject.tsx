import styled from 'styled-components';
import { FormInputGroup } from '../components/FormInputGroup';
import { FormStyled } from '../components/FormStyled';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { CreateProjectDto, Project, UpdateProjectDto } from '../models/project.model';
import { createProject, updateProject } from '../config/services/project.service';
import { useNavigate } from 'react-router-dom';

const CreateProjectWrapper = styled.div`
    width: 30%;
    min-width: 200px;
    margin: auto;
`;

export const CreateProject = () => {
    const [project, setProject] = useState<any>(null);
    const [descricao, setDescricao] = useState<string | null>(null);
    const [ferramenta, setFerramenta] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storageProject = localStorage.getItem('project');

        if (storageProject) {
            const parsedProject = JSON.parse(storageProject) as Project;
            setDescricao(parsedProject.descricao);
            setStatus(parsedProject.status);
            setFerramenta(parsedProject.ferramenta);
            setProject(parsedProject);
        }
    }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (project) {
            return handleUpdateProject();
        }

        handleCreateProject();
    };

    const handleCreateProject = () => {
        const data: CreateProjectDto = {
            ferramenta: ferramenta!,
            status: status!,
            descricao: descricao!,
            alunoId: localStorage.getItem('user-id')!
        };

        createProject(data).then(result => {
            if (!result.ok) {
                alert(result.message);
                return;
            }

            navigate('/projects');
        });
    };

    const handleUpdateProject = () => {
        const data: UpdateProjectDto = {
            ferramenta: ferramenta!,
            status: status!,
            descricao: descricao!,
            alunoId: localStorage.getItem('user-id')!,
            id: project.id
        };

        updateProject(data).then(result => {
            if (!result.ok) {
                alert(result.message);
                return;
            }

            navigate('/projects');
        });
    };

    return (
        <DefaultLayout>
            <h1>Create Project</h1>
            {project ? <p>This is a update page</p> : <p>This is a create page</p>}

            <CreateProjectWrapper>
                <FormStyled onSubmit={handleSubmit}>
                    <FormInputGroup>
                        <label htmlFor="descricao">Descrição: </label>
                        <input
                            type="text"
                            name="descricao"
                            value={descricao ?? ''}
                            onChange={e => setDescricao(e.target.value)}
                            required
                        />
                    </FormInputGroup>
                    <FormInputGroup>
                        <label htmlFor="ferramenta">Ferramenta: </label>
                        <input
                            type="text"
                            name="ferramenta"
                            value={ferramenta ?? ''}
                            onChange={e => setFerramenta(e.target.value)}
                            required
                        />
                    </FormInputGroup>
                    <FormInputGroup>
                        <label htmlFor="status">Status: </label>
                        <select name="status" value={status ?? ''} onChange={e => setStatus(e.target.value)}>
                            <option value="">Selecione...</option>
                            <option value="E">Em andamento</option>
                            <option value="A">Finalizado</option>
                        </select>
                    </FormInputGroup>

                    <button type="submit">{project ? 'Atualizar' : 'Criar'}</button>
                </FormStyled>
            </CreateProjectWrapper>
        </DefaultLayout>
    );
};
