import { Search, ShoppingCart } from "lucide-react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <img
        src="/logo.svg"
        alt="Logo"
        className="logo-header"
        onClick={() => navigate("/")}
      />
      <div className="header-search-container">
        <Search className="header-search-icon" />
        <input
          type="text"
          className="header-search-bar"
          placeholder="ZzZzz......"
        />
      </div>
      <div className="header-buttons-container">
        {!usuarioLogado && (
          <>
            <p
              className="header-button"
              onClick={() => navigate("/cadastro-cliente")}
            >
              Cadastre-se
            </p>
            <p
              className="header-button"
              onClick={() => navigate("/login-cliente")}
            >
              Entrar
            </p>
          </>
        )}
        <p className="header-button" onClick={() => navigate("/catalogo")}>
          Catalogo
        </p>
        <p className="header-button" onClick={() => navigate("/pedidos")}>
          Pedidos
        </p>

        <ShoppingCart
          className="header-button"
          onClick={() => navigate("/carrinho")}
        />
      </div>
    </div>
  );
}
