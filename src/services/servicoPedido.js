import api from "./api";

export const fazerPedido = (pedido) => api.post("/pedidos", pedido);

export const pegarPedidoPorId = (id) => api.get(`/pedidos/${id}`);

export const pegarPedidos = () => api.get("/pedidos");

export const atualizarStatusPedido = (id, statusPedido) =>
  api.patch(`/pedidos/${id}`, statusPedido);
