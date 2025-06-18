import CardProduto from "../../components/CardProduto/CardProduto";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Catalogo.css";
import { AuthContext } from "../../context/authContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pegarProdutos } from "../../services/servicoProduto";

export default function Catalogo() {
  const { usuario } = useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [categoria, setCategoria] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function listarProdutos() {
      try {
        const resposta = await pegarProdutos();
        if (resposta.status === 200) {
          setProdutos(resposta.data);
          console.log(resposta.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    listarProdutos();
  }, []);

  return (
    <div className="catalogo-container">
      <Header />
      <div className="catalogo-content">
        <div className="catalogo-filtros">
          <select
            name="categaroia"
            id="categoria"
            onChange={(e) => {
              setCategoria(e.target.value);
            }}
            value={categoria}
          >
            <option value="">Categorias</option>
            <option value="1">Alimentos</option>
            <option value="2">Cuidados com a Saúde</option>
          </select>
          <select
            name="filtro"
            id="filtro"
            onChange={(e) => {
              setFiltro(e.target.value);
            }}
            value={filtro}
          >
            <option value="">Filtro</option>
            <option value="menorPreco">Menor Preço</option>
            <option value="maiorPreco">Maior Preço</option>
            <option value="nomeAZ">Nome A-Z</option>
            <option value="nomeZA">Nome Z-A</option>
          </select>
          {usuario?.tipo_usuario === "admin" && (
            <button
              className="catalogo-botao-cadastro"
              onClick={() => navigate("/produto/novo")}
            >
              Cadastrar produto
            </button>
          )}
        </div>

        <div className="catalogo-body">
          <div className="catalogo-produtos">
            {produtos
              .filter((produto) => {
                if (categoria === "") return true;
                return produto.categoria_id === Number(categoria);
              })
              .sort((a, b) => {
                console.log(a);

                if (filtro === "menorPreco")
                  return Number(a.preco) - Number(b.preco);
                if (filtro === "maiorPreco")
                  return Number(b.preco) - Number(a.preco);
                if (filtro === "nomeAZ") return a.nome.localeCompare(b.nome);
                if (filtro === "nomeZA") return b.nome.localeCompare(a.nome);
                return 0;
              })
              .map((produto, index) => (
                <CardProduto
                  imagem={produto.imagem}
                  nome={produto.nome}
                  nota={5}
                  preco={Number(produto.preco)}
                  key={index}
                  id={produto.id}
                  tipo_usuario={usuario?.tipo_usuario}
                />
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
