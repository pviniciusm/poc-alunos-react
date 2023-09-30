export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    id: string;
    authToken: string;
}
