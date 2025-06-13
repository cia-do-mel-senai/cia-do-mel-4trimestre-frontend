import api from "./api";

export const criarUsuario = (usuario) => api.post("/usuario", usuario);
