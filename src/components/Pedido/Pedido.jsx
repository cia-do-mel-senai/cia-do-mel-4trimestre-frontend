import "./Pedido.css";

export default function Pedido({ data, codigoPedido, status, quantidade }) {
  const statusOptions = {
    "Pedido realizado": "status-realizado",
    "Pedido em preparo": "status-preparo",
    "Pedido enviado": "status-enviado",
    "Pedido entregue": "status-entregue",
    "Pedido cancelado": "status-cancelado",
  };

  const statusClass = statusOptions[status] || "status-default";

  return (
    <div className="pedido-container">
      <div className="pedido-info">
        <p className="pedido-data">{data}</p>
        <p className="pedido-codigo">ID: {codigoPedido}</p>
      </div>

      <div className="pedido-controle">
        <p className={`pedido-status ${statusClass}`}>{status}</p>
        <p className="pedido-quantidade">Qtde: {quantidade}</p>
      </div>
    </div>
  );
}
