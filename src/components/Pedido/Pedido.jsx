import { atualizarStatusPedido } from "../../services/servicoPedido";
import "./Pedido.css";

export default function Pedido({
  data,
  codigoPedido,
  status,
  valorTotal,
  tipoUsuario,
  id,
}) {
  const statusOptions = {
    "Pedido realizado": "status-realizado",
    "Pedido em preparo": "status-preparo",
    "Pedido enviado": "status-enviado",
    "Pedido entregue": "status-entregue",
    "Pedido cancelado": "status-cancelado",
  };

  const statusClass = statusOptions[status] || "status-default";

  const handleMudarStatus = async (status) => {
    const statusPedido = {
      status: status,
    };

    try {
      const resposta = await atualizarStatusPedido(id, statusPedido);
    } catch (error) {}
  };

  return (
    <div className="pedido-container">
      <p>{data}</p>
      <p>id: {codigoPedido}</p>

      {tipoUsuario === "usuario" && (
        <p className={`status-texto ${statusClass}`}>Status: {status}</p>
      )}

      {tipoUsuario === "admin" && (
        <select
          defaultValue={status}
          onChange={(e) => handleMudarStatus(e.target.value)}
        >
          {Object.keys(statusOptions).map((opcao) => (
            <option key={opcao} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
      )}

      <p>R$ {Number(valorTotal).toFixed(2)}</p>
    </div>
  );
}
