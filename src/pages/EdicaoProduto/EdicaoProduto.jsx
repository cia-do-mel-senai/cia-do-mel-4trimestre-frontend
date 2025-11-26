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
  excluirProduto,
} from "../../services/servicoProduto";

export default function EdicaoProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [rotulo, setRotulo] = useState("");
  const [tipoEmbalagem, setTipoEmbalagem] = useState("");
  const [corTampa, setCorTampa] = useState("");
  const [acabamento, setAcabamento] = useState("");
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
          setTamanho(produto.tamanho || "");
          setRotulo(produto.rotulo || "");
          setTipoEmbalagem(produto.tipo_embalagem || "");
          setCorTampa(produto.cor_tampa || "");
          setAcabamento(produto.acabamento_superficie || "");
          setImagemBase64(produto.imagem);
          setPreviewUrl(produto.imagem);
        }
      } catch (error) {
        console.log(error);
      }
    }
    listarProduto();
  }, []);

  const handleImageClick = () => inputRef.current?.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onloadend = () => setImagemBase64(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const validarProduto = (produto) => {
    if (!produto.nome.trim()) {
      toast.error("O nome do produto é obrigatório.");
      return false;
    }
    if (!produto.descricao.trim()) {
      toast.error("A descrição é obrigatória.");
      return false;
    }
    if (!produto.preco || isNaN(produto.preco)) {
      toast.error("O preço é obrigatório e deve ser um número.");
      return false;
    }
    if (!produto.imagem) {
      toast.error("A imagem do produto é obrigatória.");
      return false;
    }
    if (
      !produto.tamanho ||
      !produto.rotulo ||
      !produto.tipo_embalagem ||
      !produto.cor_tampa ||
      !produto.acabamento_superficie
    ) {
      toast.error("Selecione todas as opções de produto.");
      return false;
    }
    return true;
  };

  const handleEditar = async () => {
    const produto = {
      nome,
      preco,
      descricao,
      imagem: imagemBase64,
      tamanho,
      rotulo,
      tipo_embalagem: tipoEmbalagem,
      cor_tampa: corTampa,
      acabamento_superficie: acabamento,
    };
    if (!validarProduto(produto)) return;

    try {
      const resposta = await editarProduto(params.id, produto);
      if (resposta.status === 200) {
        toast.success("Produto atualizado com sucesso!");
      }
    } catch (error) {
      toast.error("Erro ao editar o produto.");
      console.log(error);
    }
  };

  const handleExcluir = async () => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      try {
        const resposta = await excluirProduto(params.id);
        if (resposta.status === 200) {
          toast.success("Produto excluído com sucesso!");
          setTimeout(() => navigate("/catalogo"), 2000);
        }
      } catch (error) {
        toast.error("Erro ao excluir o produto.");
        console.log(error);
      }
    }
  };

  return (
    <div className="edicao-produto-container">
      <Header />
      <div className="edicao-produto-body">
        <form
          className="edicao-produto-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2>Edição de Produto</h2>

          <div className="edicao-layout">
            {/* ---- ESQUERDA: IMAGEM ---- */}
            <div className="edicao-img-box" onClick={handleImageClick}>
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" />
              ) : (
                <Import style={{ width: "40%", height: "40%", opacity: 0.4 }} />
              )}

              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>

            {/* ---- DIREITA: FORMULÁRIO ---- */}
            <div className="edicao-form-columns">
              <div className="edicao-col">
                <label>Nome</label>
                <input value={nome} onChange={(e) => setNome(e.target.value)} />

                <label>Preço</label>
                <input
                  type="number"
                  value={preco}
                  onChange={(e) => setPreco(Number(e.target.value))}
                />

                <label>Descrição</label>
                <textarea
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>

              <div className="edicao-col">
                <label>Tamanho</label>
                <select
                  value={tamanho}
                  onChange={(e) => setTamanho(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Pequeno">Pequeno</option>
                  <option value="Médio">Médio</option>
                  <option value="Grande">Grande</option>
                </select>

                <label>Rótulo</label>
                <select
                  value={rotulo}
                  onChange={(e) => setRotulo(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Sem rótulo">Sem rótulo</option>
                  <option value="Preto">Rótulo preto</option>
                  <option value="Branco">Rótulo branco</option>
                </select>

                <label>Tipo de Embalagem</label>
                <select
                  value={tipoEmbalagem}
                  onChange={(e) => setTipoEmbalagem(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Vidro">Vidro</option>
                  <option value="Plástico">Plástico</option>
                  <option value="Acrílico">Acrílico</option>
                </select>

                <label>Cor da Tampa</label>
                <select
                  value={corTampa}
                  onChange={(e) => setCorTampa(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Verde">Verde</option>
                  <option value="Laranja">Laranja</option>
                  <option value="Roxo">Roxo</option>
                </select>

                <label>Acabamento</label>
                <select
                  value={acabamento}
                  onChange={(e) => setAcabamento(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Fosco">Fosco</option>
                  <option value="Brilhante">Brilhante</option>
                  <option value="Texturizado">Texturizado</option>
                </select>
              </div>
            </div>
          </div>

          <div className="edicao-buttons-row">
            <button type="button" className="alterar" onClick={handleEditar}>
              Alterar
            </button>
            <button type="button" className="excluir" onClick={handleExcluir}>
              Excluir
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
