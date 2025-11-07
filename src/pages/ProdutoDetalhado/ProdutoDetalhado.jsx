import { MdOutlineArrowBackIos } from "react-icons/md";
import Header from "../../components/Header/Header";
import "./ProdutoDetalhado.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pegarProdutoPorId } from "../../services/servicoProduto";
import { ToastContainer, toast } from "react-toastify";
import { fazerPedido } from "../../services/servicoPedido";

export default function ProdutoDetalhado() {
  const [produto, setProduto] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const listarProduto = async () => {
      try {
        const resposta = await pegarProdutoPorId(params.id);
        setProduto(resposta.data);
      } catch (error) {
        toast.error("Erro ao carregar produto.");
      }
    };
    listarProduto();
  }, [params.id]);

  const handlePedido = async () => {
    try {
      const response = await fazerPedido({
        quantidade: 50,
        produtoNome: produto.nome,
      });
      if (response.status === 201) {
        toast.success("Pedido realizado com sucesso!");
        navigate("/pedidos");
      }
    } catch (error) {}
  };

  if (!produto) {
    return (
      <div className="produto-detalhado-loading">
        <p>Carregando produto...</p>
      </div>
    );
  }

  return (
    <div className="produto-detalhado-container">
      <Header />
      <div className="produto-detalhado-body">
        <MdOutlineArrowBackIos
          className="produto-detalhado-retornar"
          onClick={() => navigate(-1)}
        />
        <div className="produto-detalhado-card">
          <img src={produto.imagem} alt={produto.nome} />
          <div className="produto-detalhado-info">
            <h1>{produto.nome}</h1>
            <p className="produto-detalhado-preco">
              R$ {Number(produto.preco).toFixed(2)}
            </p>
            <p className="produto-detalhado-descricao">{produto.descricao}</p>

            <div className="produto-detalhado-especificacoes">
              <div>
                <span>Tamanho:</span> {produto.tamanho}
              </div>
              <div>
                <span>Rótulo:</span> {produto.rotulo}
              </div>
              <div>
                <span>Tipo de embalagem:</span> {produto.tipo_embalagem}
              </div>
              <div>
                <span>Cor da tampa:</span> {produto.cor_tampa}
              </div>
              <div>
                <span>Acabamento da superfície:</span>{" "}
                {produto.acabamento_superficie}
              </div>
            </div>

            <button onClick={handlePedido}>Fazer Pedido</button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
