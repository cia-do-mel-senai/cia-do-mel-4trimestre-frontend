import "./Pedido.css";

export default function Pedido({ data, id, status, valorTotal }) {
  const statusClass =
    {
      "Pedido realizado": "status-realizado",
      "Pedido em preparo": "status-preparo",
      "Pedido enviado": "status-enviado",
      "Pedido entregue": "status-entregue",
      "Pedido cancelado": "status-cancelado",
    }[status] || "status-default"; // classe padrão se status não for reconhecido

  return (
    <div className="pedido-container">
      <p>{data}</p>
      <p>id: {id}</p>
      <p className={`status-texto ${statusClass}`}>Status: {status}</p>
      <p>R$ {Number(valorTotal).toFixed(2)}</p>
    </div>
  );
}
