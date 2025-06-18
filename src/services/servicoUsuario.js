import api from "./api";

export const criarUsuario = (usuario) => api.post("/usuario", usuario);

export const logarUsuario = (usuario) => api.post("/login", usuario);
