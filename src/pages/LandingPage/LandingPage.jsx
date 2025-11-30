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
          <em>Mais uma vez temos o prazer de anunciar uma grande novidade: <br />
          A <strong>Cia do Mel</strong> passou a produzir suas próprias embalagens,<br />
          garantindo ainda mais qualidade em nossos produtos! <br />
          Aliado a essa evolução, contamos com uma moderna ferramenta <br />
          que desenvolvemos, o <strong>Sistema de Gestão de Produção - SGP,</strong> <br />
          visando a otimização do ciclo produtivo, agilidade, precisão <br />
          e total controle em todas as fases dos processos.</em>  
        </p>
        <button onClick={() => navigate("/login")}>ACESSE</button>
      </div>
    </div>
  );
}

export default LandingPage;
