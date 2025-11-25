import "./CadastroProduto.css";
import { useState } from "react";
import { cadastrarProduto } from "../../services/servicoProduto";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

export default function ModalCadastroProduto({ aberto, fechar }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [rotulo, setRotulo] = useState("");
  const [tipoEmbalagem, setTipoEmbalagem] = useState("");
  const [corTampa, setCorTampa] = useState("");
  const [acabamento, setAcabamento] = useState("");
  const [imagem, setImagem] = useState(null);
  const location = useLocation();

  if (!aberto) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !nome ||
      !preco ||
      !tamanho ||
      !rotulo ||
      !tipoEmbalagem ||
      !corTampa ||
      !acabamento ||
      !imagem
    ) {
      toast.error("Preencha todos os campos!");
      return;
    }

    try {
      const produto = {
        nome,
        preco,
        descricao,
        tamanho,
        rotulo,
        tipo_embalagem: tipoEmbalagem,
        cor_tampa: corTampa,
        acabamento_superficie: acabamento,
        imagem,
      };

      const resposta = await cadastrarProduto(produto);

      if (resposta.status === 201) {
        toast.success("Produto cadastrado!");
        window.location.reload();
        fechar();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagem(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="modal-close" onClick={fechar}>
          X
        </button>
        <h2>Cadastrar Produto</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div
            className="modal-img-box"
            onClick={() => document.getElementById("imagemInput").click()}
          >
            {imagem ? (
              <img src={imagem} alt="" />
            ) : (
              "Clique para adicionar imagem"
            )}

            <input
              type="file"
              id="imagemInput"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          <div className="form-columns">
            <div className="form-col">
              <label>Nome</label>
              <input value={nome} onChange={(e) => setNome(e.target.value)} />

              <label>Preço</label>
              <input
                type="number"
                step="0.01"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />

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
            </div>

            <div className="form-col">
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

              <label>Descrição</label>
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
          </div>

          <button className="modal-btn" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
