export interface Project {
    id: string;
    descricao: string;
    ferramenta: string;
    status: string;
}

export interface CreateProjectDto {
    alunoId: string;
    ferramenta: string;
    status: string;
    descricao: string;
}

export interface UpdateProjectDto {
    alunoId: string;
    id: string;
    ferramenta?: string;
    status?: string;
    descricao?: string;
}
