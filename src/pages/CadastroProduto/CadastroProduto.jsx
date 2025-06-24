import { Import } from "lucide-react";
import Header from "../../components/Header/Header";
import "./CadastroProduto.css";
import { useState, useRef } from "react";
import { cadastrarProduto } from "../../services/servicoProduto";
import { toast, ToastContainer } from "react-toastify";

export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoriaId, setCategoriaId] = useState(1);
  const [imagemBase64, setImagemBase64] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validarProduto = (produto) => {
    if (!produto.nome.trim()) {
      toast.error("O nome do produto é obrigatório.");
      return false;
    }

    if (!isNaN(produto.nome.trim())) {
      toast.error("O nome do produto não pode ser apenas números.");
      return false;
    }

    if (produto.nome.trim().length < 3) {
      toast.error("O nome do produto deve ter ao menos 3 caracteres.");
      return false;
    }

    if (!produto.descricao.trim()) {
      toast.error("A descrição é obrigatória.");
      return false;
    }

    if (produto.descricao.trim().length < 10) {
      toast.error("A descrição deve ter pelo menos 10 caracteres.");
      return false;
    }

    if (!produto.preco || isNaN(produto.preco)) {
      toast.error("O preço é obrigatório e deve ser um número.");
      return false;
    }

    if (produto.preco < 0.01 || produto.preco > 1000000) {
      toast.error("O preço deve estar entre R$ 0,01 e R$ 1.000.000,00.");
      return false;
    }

    if (!produto.imagem || produto.imagem === "") {
      toast.error("A imagem do produto é obrigatória.");
      return false;
    }

    if (!produto.categoria_id || ![1, 2].includes(Number(produto.categoria_id))) {
      toast.error("Selecione uma categoria válida.");
      return false;
    }

    return true;
  };

  const adicionarProduto = async () => {
    if (
      nome.trim() === "" ||
      Number(preco) < 0.1 ||
      isNaN(
        Number(preco) || ![1, 2].includes(categoriaId) || imagem.trim() === ""
      )
    ) {
      toast.error("Preencha todas as informações.");
      return;
    }

    const produto = {
      nome: nome,
      preco: preco,
      descricao: descricao,
      categoria_id: categoriaId,
      imagem: imagemBase64,
    };

    if (!validarProduto(produto)) return;

    try {
      const resposta = await cadastrarProduto(produto);
      if (resposta.status === 201) {
        toast.success(resposta.data.mensagem);
        setNome("");
        setPreco(0);
        setDescricao("");
        setCategoriaId(1);
        setImagemBase64("");
        setPreviewUrl(null);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    } catch (error) {}
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

            <select
              name=""
              id=""
              value={categoriaId}
              onChange={(e) => {
                setCategoriaId(e.target.value);
              }}
            >
              <option value="1">Alimentos</option>
              <option value="2">Cuidados com a saúde</option>
            </select>

            <button onClick={adicionarProduto}>Adicionar</button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
