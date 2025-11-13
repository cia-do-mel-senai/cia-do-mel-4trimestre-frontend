import "./CadastroProduto.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../components/Header/Header.jsx";
import { cadastrarProduto } from "../../services/servicoProduto.js";

export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [rotulo, setRotulo] = useState("");
  const [tipoEmbalagem, setTipoEmbalagem] = useState("");
  const [corTampa, setCorTampa] = useState("");
  const [acabamento, setAcabamento] = useState("");
  const [imagem, setImagem] = useState(null);

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
      toast.error("Preencha todos os campos obrigatórios!");
      return;
    }

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

    try {
      const resposta = await cadastrarProduto(produto);

      if (resposta.status === 201) {
        toast.success("Cadastrado com sucesso!");
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
    <div className="cadastro-produto-container">
      <Header />
      <div className="cadastro-produto-body">
        <form className="cadastro-produto-form" onSubmit={handleSubmit}>
          <div className="cadastro-produto-inputs">
            <h2>Cadastrar Produto</h2>

            <div
              className="register-product-import-icon"
              onClick={() => document.getElementById("imagemInput").click()}
            >
              {imagem ? (
                <img
                  src={imagem}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                />
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

            <div>
              <label>Nome</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome do produto"
              />
            </div>

            <div>
              <label>Preço</label>
              <input
                type="number"
                step="0.01"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Preço"
              />
            </div>

            <div>
              <label>Descrição</label>
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descrição do produto"
              ></textarea>
            </div>

            <div>
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
            </div>

            <div>
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

            <div>
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
            </div>

            <div>
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
            </div>

            <div>
              <label>Acabamento da Superfície</label>
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

            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" limit={1} />
    </div>
  );
}
