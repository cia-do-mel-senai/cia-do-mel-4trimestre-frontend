import CardProduto from "../../components/CardProduto/CardProduto";
import Header from "../../components/Header/Header";
import "./Produtos.css";
import { useEffect, useState } from "react";
import { pegarProdutos } from "../../services/servicoProduto";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

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

  return (
    <div className="catalogo-container">
      <Header setProdutos={setProdutos} />
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
