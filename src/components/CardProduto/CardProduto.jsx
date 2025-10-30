import "./CardProduto.css";
import { useNavigate } from "react-router-dom";

export default function CardProduto({ nome, imagem, preco, id }) {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <img src={imagem} alt={nome} />
      <div className="card-content">
        <p>{nome}</p>
        <p className="preco">R$ {preco.toFixed(2)}</p>
        <div className="card-buttons">
          <button
            className="editar-btn"
            onClick={() => navigate(`/produto/${id}/editar`)}
          >
            Editar
          </button>
          <button
            className="pedido-btn"
            onClick={() => navigate(`/produto/${id}`)}
          >
            Fazer pedido
          </button>
        </div>
      </div>
    </div>
  );
}
