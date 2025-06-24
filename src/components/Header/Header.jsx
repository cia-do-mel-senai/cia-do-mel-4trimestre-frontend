import { Search, ShoppingCart } from "lucide-react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { FaUserGear } from "react-icons/fa6";

export default function Header() {
  const { usuario, sair } = useContext(AuthContext);
  const [pesquisa, setPesquisa] = useState("");
  const usuarioLogado = !!usuario;

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
        {pesquisa && (
          <span
            className="clear-search"
            onClick={() => {
              setPesquisa("");
              navigate("/catalogo"); // opcional: volta para catálogo sem pesquisa
            }}
          >
            ×
          </span>
        )}
        <input
          type="text"
          className="header-search-bar"
          placeholder="ZzZzz......"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/catalogo?pesquisa=${encodeURIComponent(pesquisa)}`);
            }
          }}
        />
      </div>
      <div className="header-buttons-container">
        {usuario?.tipo_usuario === "admin" && (
          <FaUserGear color="white" size={25} />
        )}
        {!usuarioLogado ? (
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
        ) : (
          <p className="header-button" onClick={sair}>
            Sair
          </p>
        )}
        <p className="header-button" onClick={() => navigate("/catalogo")}>
          Produtos
        </p>
        <p
          className="header-button"
          onClick={() => {
            if (!usuarioLogado) {
              navigate("/cadastro-cliente");
            } else {
              navigate("/pedidos");
            }
          }}
        >
          Pedidos
        </p>

        <ShoppingCart
          className="header-button"
          onClick={() => {
            if (!usuarioLogado) {
              navigate("/cadastro-cliente");
            } else {
              navigate("/carrinho");
            }
          }}
        />
      </div>
    </div>
  );
}
