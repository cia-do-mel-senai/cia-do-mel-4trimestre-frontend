import { FaStar } from "react-icons/fa";
import "./CardProduto.css";
import { useNavigate } from "react-router-dom";

export default function CardProduto({
  nome,
  imagem,
  preco,
  nota,
  id,
  tipo_usuario,
}) {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <img src={imagem} alt="" />
      <div className="card-content">
        <p>{nome}</p>
        <p>R$ {preco.toFixed(2)}</p>
        <div>
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
        </div>
        <button
          onClick={() => {
            if (tipo_usuario === "admin") {
              navigate(`/produto/${id}/editar`);
            } else {
              navigate(`/produto/${id}`);
            }
          }}
        >
          {tipo_usuario === "admin" ? "Editar" : "Comprar"}
        </button>
      </div>
    </div>
  );
}
