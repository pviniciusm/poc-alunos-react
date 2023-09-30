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
