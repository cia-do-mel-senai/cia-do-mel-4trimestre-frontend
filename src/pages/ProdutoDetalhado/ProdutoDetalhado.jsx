import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Header from "../../components/Header/Header";
import "./ProdutoDetalhado.css";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { pegarProdutoPorId } from "../../services/servicoProduto";
import { ToastContainer, toast } from "react-toastify";

export default function ProdutoDetalhado() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [nota, setNota] = useState(0);
  const [imagem, setImagem] = useState(null);
  const [id, setId] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const listarProduto = async () => {
      try {
        const resposta = await pegarProdutoPorId(params.id);

        const produto = resposta.data;

        setNome(produto.nome);
        setPreco(Number(produto.preco));
        setDescricao(produto.descricao);
        setNota(5);
        setImagem(produto.imagem);
        setId(produto.id);
      } catch (error) {}
    };
    listarProduto();
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

  const adicionarNoCarrinho = () => {
    if (quantidade <= 0) {
      toast.error("Por favor insira uma quantidade válida");
      return;
    }
    const produtosNoCarrinho =
      JSON.parse(localStorage.getItem("carrinho")) || [];

    const produtoAdicionado = {
      id: id,
      nome: nome,
      preco: preco,
      quantidade: Number(quantidade),
      imagem: imagem,
    };

    const indexProdutoExistente = produtosNoCarrinho.findIndex(
      (produto) => produto.id === id
    );

    if (indexProdutoExistente !== -1) {
      produtosNoCarrinho[indexProdutoExistente].quantidade += quantidade;
    } else {
      produtosNoCarrinho.push(produtoAdicionado);
    }

    localStorage.setItem("carrinho", JSON.stringify(produtosNoCarrinho));
    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <div className="produto-detalhado-container">
      <Header />
      <div className="produto-detalhado-body">
        <MdOutlineArrowBackIos
          className="produto-detalhado-retornar"
          onClick={() => navigate(-1)}
        />
        <div className="produto-detalhado">
          <img src={imagem} alt="" />
          <div className="produto-detalhado-info">
            <h2>{nome}</h2>
            <p className="produto-detalhado-descricao">{descricao}</p>
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
              onChange={(e) => setQuantidade(Number(e.target.value))}
              min={1}
            />
            <button onClick={adicionarNoCarrinho}>Adicionar</button>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
}
