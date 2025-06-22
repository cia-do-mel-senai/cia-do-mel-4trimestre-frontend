import api from "./api";

export const cadastrarProduto = (produto) => api.post("/produto", produto);

export const pegarProdutos = () => api.get("/produto");

export const pegarProdutoPorId = (id) => api.get(`/produto/${id}`);

export const editarProduto = (id, produto) =>
  api.put(`/produto/${id}`, produto);
