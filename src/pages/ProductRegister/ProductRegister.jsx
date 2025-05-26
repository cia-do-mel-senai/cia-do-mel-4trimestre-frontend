import { Import } from "lucide-react";
import Header from "../../components/Header/Header";
import "./ProductRegister.css";
import { useState } from "react";

export default function ProductRegister() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");

  return (
    <div className="product-register-container">
      <Header />
      <div className="product-register-body">
        <div className="product-register-form">
          <Import className="register-product-import-icon" />
          <div className="product-register-inputs">
            <h2>Cadastro de produto</h2>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
