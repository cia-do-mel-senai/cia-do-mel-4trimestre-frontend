import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Header from "../../components/Header/Header";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="LandingPage-container">
      <Header />

      <div className="LandingPage-content">
        <p>
          Gerenciar a produção de embalagens nunca foi tão simples. Nosso
          sistema foi desenvolvido especialmente para empresas do setor apícola
          que precisam de agilidade, precisão e total controle em cada etapa do
          processo — do cadastro dos frascos ao controle de estoque e
          acompanhamento de pedidos. Com uma interface intuitiva e moderna, você
          administra tudo em um único lugar, reduzindo erros, acelerando o
          trabalho e garantindo mais qualidade no resultado final.
        </p>
        <button onClick={() => navigate("/login")}>ACESSE</button>
      </div>
    </div>
  );
}

export default LandingPage;
