import { CreateProjectDto, UpdateProjectDto } from '../../models/project.model';
import apiService, { Response } from './api.service';

export async function listProjects(userId: string): Promise<Response> {
    try {
        const result = await apiService.get(`/aluno/${userId}/projeto`);

        return {
            ok: true,
            data: result.data.data
        };
    } catch (error: any) {
        console.log(error);

        return {
            ok: false,
            message: error.response?.data?.message
        };
    }
}

export async function deleteProject(userId: string, id: string): Promise<Response> {
    try {
        const result = await apiService.delete(`/aluno/${userId}/projeto/${id}`);

        return {
            ok: true,
            data: result.data
        };
    } catch (error: any) {
        console.log(error);

        return {
            ok: false,
            message: error.response?.data?.message
        };
    }
}
export async function createProject(params: CreateProjectDto): Promise<Response> {
    try {
        const result = await apiService.post(`/aluno/${params.alunoId}/projeto`, params);

        return {
            ok: true,
            data: result.data
        };
    } catch (error: any) {
        console.log(error);

        return {
            ok: false,
            message: error.response?.data?.message
        };
    }
}
export async function updateProject(params: UpdateProjectDto): Promise<Response> {
    try {
        const result = await apiService.put(`/aluno/${params.alunoId}/projeto/${params.id}`, params);

        return {
            ok: true,
            data: result.data
        };
    } catch (error: any) {
        console.log(error);

        return {
            ok: false,
            message: error.response?.data?.message
        };
    }
}
