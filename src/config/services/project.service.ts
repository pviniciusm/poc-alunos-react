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
