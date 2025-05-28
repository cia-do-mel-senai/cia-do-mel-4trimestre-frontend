import { Import } from "lucide-react";
import Header from "../../components/Header/Header";
import "./CadastroProduto.css";
import { useState, useRef } from "react";

export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagem(file);
      setPreviewUrl(URL.createObjectURL(file));
      console.log(imagem);
    }
  };

  return (
    <div className="cadastro-produto-container">
      <Header />
      <div className="cadastro-produto-body">
        <div className="cadastro-produto-form">
          <div
            className="register-product-import-icon"
            onClick={handleImageClick}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Prévia"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "inherit",
                }}
              />
            ) : (
              <Import style={{ width: "100%", height: "100%" }} />
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />

          <div className="cadastro-produto-inputs">
            <h2>Cadastro de produto</h2>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label htmlFor="preco">Preço:</label>
            <input
              type="number"
              id="preco"
              value={preco}
              onChange={(e) => setPreco(Number(e.target.value))}
            />
            <label htmlFor="descricao">Descrição:</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <button>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
