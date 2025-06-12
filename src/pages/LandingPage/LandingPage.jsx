import CardProduto from "../../components/CardProduto/CardProduto";
import Carrossel from "../../components/Carrossel/Carrossel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="LandingPage-container">
      <Header />
      <div className="LandingPage-content">
        <Carrossel />

        <div className="LandingPage-body-card">
          <p>Mais Vendidos</p>

          <div className="LandingPage-produto-cards">
            <CardProduto
              imagem={
                "https://loja.mel.com.br/wp-content/uploads/2021/11/favo-de-mel-sp-madeira.jpg"
              }
              nome={"Favo de Mel"}
              preco={54.9}
            />
            <CardProduto
              imagem={
                "https://http2.mlstatic.com/D_NQ_NP_2X_636271-MLB79612377778_102024-F-bebida-hidromel-ferroada-suave-750ml-original-viking.webp"
              }
              nome={"Hidromel"}
              preco={99.9}
            />
            <CardProduto
              imagem={
                "https://loja.mel.com.br/wp-content/uploads/2020/03/propolis-verde-marrom-vermelho-beneficios-onde-comprar-concentrado-extrato-alcool-1.jpg"
              }
              nome={"Própolis"}
              preco={34.9}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
