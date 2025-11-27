import "./Pedido.css";

export default function Pedido({
  data,
  codigoPedido,
  status,
  quantidade,
  nome,
  valor,
}) {
  const statusOptions = {
    Pendente: "status-pendente",
    COMPLETED: "status-completo",
  };

  const statusClass = statusOptions[status] || "status-default";

  return (
    <div className="pedido-container">
      <div className="pedido-info">
        <h2 className="pedido-nome">{nome}</h2>

        <div className="pedido-detalhes">
          <p>{data}</p>
          <p className="pedido-codigo">ID: {codigoPedido}</p>
        </div>
      </div>

      <div className="pedido-controle">
        <p className={`pedido-status ${statusClass}`}>
          {status === "COMPLETED" ? "Completo" : status}
        </p>
        <div className="pedido-quantidade-box">
          <span>Qtde</span>
          <p>{quantidade}</p>
        </div>
        <div className="pedido-valor-box">
          <span>Total</span>
          <p>R${(valor * quantidade).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
