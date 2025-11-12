import { useContext } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export default function Header() {
  const navigate = useNavigate();
  const { usuario, sair } = useContext(AuthContext);

  return (
    <div className="header-container">
      <img
        src="/logo.svg"
        alt="Logo"
        className="logo-header"
        onClick={() => navigate("/")}
      />
      <div className="botoes-header">
        {usuario && (
          <>
            <button onClick={() => navigate("/produto/novo")}>
              Cadastrar produto
            </button>
            <button onClick={() => navigate("/estoque")}>Estoque</button>
            <button onClick={() => navigate("/pedidos")}>Pedidos</button>
            <button onClick={() => sair()}>Sair</button>
          </>
        )}
      </div>
    </div>
  );
}
