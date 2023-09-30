import { LoginRequest } from '../../models/login.model';
import apiService, { Response } from './api.service';

export async function login(params: LoginRequest): Promise<Response> {
    try {
        const result = await apiService.post(`/aluno/login`, params);

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
