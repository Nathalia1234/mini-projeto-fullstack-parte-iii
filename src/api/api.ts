import axios from "axios";

// Detecta automaticamente o backend ativo
const API_URL = import.meta.env.VITE_API_URL || '/api';
const BACKEND_TYPE = import.meta.env.VITE_BACKEND_TYPE || "local";

console.log(`🔗 Conectando ao backend (${BACKEND_TYPE}): ${API_URL}`);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//  Intercepta requisições e adiciona o token JWT
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

//  Trata respostas não autorizadas (token expirado)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// ====================
//  ROTAS DE AUTENTICAÇÃO
// ====================
export const authAPI = {
  register: async (name: string, email: string, password: string) => {
    const response = await api.post("/api/register", { name, email, password });
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await api.post("/api/login", { email, password });
    return response.data;
  },
};

// ====================
//  ROTAS DE NOTAS (CRUD COMPLETO)
// ====================
export const notesAPI = {
  // Lista todas as notas do usuário autenticado
  getAll: async () => {
    const response = await api.get("/api/notes");
    return response.data;
  },

  // Busca notas com base no título
  search: async (query: string) => {
    const response = await api.get(`/api/notes?title=${encodeURIComponent(query)}`);
    return response.data;
  },

  // Retorna detalhes de uma nota específica
  getById: async (id: string) => {
    const response = await api.get(`/api/notes/${id}`);
    return response.data;
  },

  // Cria uma nova nota
  create: async (title: string, content: string) => {
    const response = await api.post("/api/notes", { title, content });
    return response.data;
  },

  // Atualiza todos os dados de uma nota (PUT)
  update: async (id: string, title: string, content: string) => {
    const response = await api.put(`/api/notes/${id}`, { title, content });
    return response.data;
  },

  // Atualiza parcialmente os dados de uma nota (PATCH)
  patch: async (id: string, data: object) => {
    const response = await api.patch(`/api/notes/${id}`, data);
    return response.data;
  },

  // Exclui uma nota
  delete: async (id: string) => {
    const response = await api.delete(`/api/notes/${id}`);
    return response.data;
  },
};

export default api;
