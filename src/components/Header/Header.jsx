import { useContext, useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import ModalCadastroProduto from "../../pages/CadastroProduto/CadastroProduto";

export default function Header() {
  const navigate = useNavigate();
  const { usuario, sair } = useContext(AuthContext);
  const [modalAberto, setModalAberto] = useState(false);
  const location = useLocation();
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
            {location.pathname === "/estoque" && (
              <button onClick={() => setModalAberto(true)}>
                Cadastrar produto
              </button>
            )}
            <button onClick={() => navigate("/estoque")}>Estoque</button>
            <button onClick={() => navigate("/pedidos")}>Pedidos</button>
            <button onClick={() => sair()}>Sair</button>
          </>
        )}
      </div>
      <ModalCadastroProduto
        aberto={modalAberto}
        fechar={() => setModalAberto(false)}
      />
    </div>
  );
}
