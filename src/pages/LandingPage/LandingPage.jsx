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
        <div className="LandingPage-body-carrossel">
          <Carrossel />
        </div>
        <div className="LandingPage-body-card">
          <CardProduto preco={5.9} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
