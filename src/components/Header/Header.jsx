import { Search, ShoppingCart } from "lucide-react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
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
        <p className="header-button">Pedidos</p>
        <p className="header-button">Produtos</p>
        <ShoppingCart className="header-button" />
      </div>
    </div>
  );
}
