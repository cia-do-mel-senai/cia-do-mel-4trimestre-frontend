import { useEffect, useState } from "react";
import CardProduto from "../../components/CardProduto/CardProduto";
import Carrossel from "../../components/Carrossel/Carrossel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./LandingPage.css";
import { pegarUltimosProdutos } from "../../services/servicoProduto";

function LandingPage() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function listarProdutos() {
      try {
        const resposta = await pegarUltimosProdutos();
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
    <div className="LandingPage-container">
      <Header />
      <div className="LandingPage-content">
        <Carrossel />

        <div className="LandingPage-body-card">
          <p>Mais Vendidos</p>

          <div className="LandingPage-produto-cards">
            {produtos.map((produto, index) => {
              return (
                <CardProduto
                  imagem={produto.imagem}
                  nome={produto.nome}
                  preco={Number(produto.preco)}
                  key={index}
                  nota={5}
                  id={produto.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
