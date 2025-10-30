import CardProduto from "../../components/CardProduto/CardProduto";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Estoque.css";
import { AuthContext } from "../../context/authContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { pegarProdutos } from "../../services/servicoProduto";

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    async function listarProdutos() {
      try {
        const resposta = await pegarProdutos();
        if (resposta.status === 200) {
          setProdutos(resposta.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    listarProdutos();
  }, []);

  useEffect(() => {
    setPesquisa(searchParams.get("pesquisa") || "");
  }, [searchParams]);

  return (
    <div className="catalogo-container">
      <Header />
      <div className="catalogo-content">
        {produtos.map((produto) => (
          <CardProduto
            id={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            preco={Number(produto.preco)}
            key={produto.id}
          />
        ))}
      </div>
    </div>
  );
}
