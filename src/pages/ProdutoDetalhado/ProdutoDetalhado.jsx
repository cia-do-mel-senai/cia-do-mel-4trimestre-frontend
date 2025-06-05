import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Header from "../../components/Header/Header";
import "./ProdutoDetalhado.css";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function ProdutoDetalhado() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [nota, setNota] = useState(0);
  const [imagem, setImagem] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setNome("Pote de mel 1kg");
    setPreco(25);
    setDescricao(
      "Mel 100% natural, extraído de flores selecionadas. Com sabor suave e doce, ideal para adoçar bebidas, pães e receitas. Sem aditivos ou conservantes, preserva todos os nutrientes e benefícios do mel puro"
    );
    setImagem(
      "https://cdn.awsli.com.br/600x700/305/305913/produto/58888206/1ffc9910b5.jpg"
    );
    setNota(4.2);
  }, []);

  const renderEstrelas = () => {
    const estrelas = [];

    for (let i = 1; i <= 5; i++) {
      if (nota >= i) {
        estrelas.push(<FaStar key={i} color="yellow" size={40} />);
      } else if (nota >= i - 0.5) {
        estrelas.push(<FaStarHalfAlt key={i} color="yellow" size={40} />);
      } else {
        estrelas.push(<FaRegStar key={i} color="yellow" size={40} />);
      }
    }

    return estrelas;
  };

  return (
    <div className="produto-detalhado-container">
      <Header />
      <div className="produto-detalhado-body">
        <IoReturnUpBack
          className="produto-detalhado-retornar"
          size={60}
          onClick={() => navigate(-1)}
        />
        <div className="produto-detalhado">
          <img src={imagem} alt="" />
          <div className="produto-detalhado-info">
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              {nota}
              {renderEstrelas()}
            </div>
            <p className="produto-detalhado-preco">
              R$ {Number(preco).toFixed(2)}
            </p>
            <input
              type="number"
              placeholder="Qtde:"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
            <button>Adicionar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
