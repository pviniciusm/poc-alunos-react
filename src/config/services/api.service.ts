import axios from 'axios';

const apiService = axios.create({
    baseURL: 'http://localhost:3333'
});

export interface Response {
    ok: boolean;
    message?: string;
    data?: any;
}

export default apiService;
