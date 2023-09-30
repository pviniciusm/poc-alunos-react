import { Project } from '../../models/project.model';
import apiService from './api.service';

export async function listProjects(userId: string) {
    try {
        const result = await apiService.get(`/aluno/${userId}/projeto`);

        return result.data as Project[];
    } catch (error: any) {
        console.log(error.toString());
        console.log(error.response?.data);

        return null;
    }
}
