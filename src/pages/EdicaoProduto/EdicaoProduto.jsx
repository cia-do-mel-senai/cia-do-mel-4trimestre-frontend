import { Import } from "lucide-react";
import Header from "../../components/Header/Header";
import "./EdicaoProduto.css";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  editarProduto,
  pegarProdutoPorId,
} from "../../services/servicoProduto";

export default function EdicaoProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoriaId, setCategoriaId] = useState(1);
  const [imagemBase64, setImagemBase64] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const inputRef = useRef(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function listarProduto() {
      try {
        const resposta = await pegarProdutoPorId(params.id);

        if (resposta.status === 200) {
          const produto = resposta.data;
          setNome(produto.nome);
          setPreco(produto.preco);
          setDescricao(produto.descricao);
          setImagemBase64(produto.imagem);
          setPreviewUrl(produto.imagem);
          setCategoriaId(produto.categoria_id);
        }
      } catch (error) {
        console.log(error);
      }
    }

    listarProduto();
  }, []);

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

  const handleExcluir = () => {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este produto?"
    );
    if (confirmar) {
      toast.success("Produto excluído com sucesso!", {
        position: "top-center",
        autoClose: 2000,
      });

      setNome("");
      setPreco(0);
      setDescricao("");
      setImagem(null);
      setPreviewUrl(null);
    }
  };

  const handleEditar = async () => {
    const produto = {
      nome: nome,
      preco: preco,
      descricao: descricao,
      imagem: imagemBase64,
      categoria_id: categoriaId,
    };

    try {
      const resposta = await editarProduto(params.id, produto);

      if (resposta.status === 200) {
        toast.success(resposta.data.mensagem);
      }
    } catch (error) {}
  };

  return (
    <div className="edicao-produto-container">
      <Header />
      <div className="edicao-produto-body">
        <div className="edicao-produto-form">
          <div className="edit-product-import-icon" onClick={handleImageClick}>
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

          <div className="edicao-produto-inputs">
            <h2>Edição de produto</h2>
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

            <div className="edicao-produto-buttons">
              <button className="alterar" onClick={handleEditar}>
                Alterar
              </button>
              <button className="excluir" onClick={handleExcluir}>
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
