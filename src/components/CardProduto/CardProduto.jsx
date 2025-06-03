import { FaStar } from "react-icons/fa";
import "./CardProduto.css";

export default function CardProduto({ nome, imagem, preco, nota }) {
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
        <button>Comprar</button>
      </div>
    </div>
  );
}
