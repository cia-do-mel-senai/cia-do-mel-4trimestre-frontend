import Header from "../../components/Header/Header";
import "./Carrinho.css";
import { MdPix } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import ModalCarrinho from "../../components/ModalCarrinho/ModalCarrinho";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fazerPedido } from "../../services/servicoPedido";

export default function Carrinho() {
  const [produtos, setProdutos] = useState(() => {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
  });

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(produtos));
  }, [produtos]);

  const [mostrarModal, setMostrarModal] = useState(false);

  const adicionarQuantidade = (id) => {
    const produtosAdicionados = produtos.map((item) => {
      if (item.id === id) {
        return { ...item, quantidade: item.quantidade + 1 };
      } else {
        return item;
      }
    });
    setProdutos(produtosAdicionados);
  };

  const excluirQuantidade = (id) => {
    const produtosAtualizados = produtos
      .map((item) => {
        if (item.id === id) {
          if (item.quantidade > 1) {
            return { ...item, quantidade: item.quantidade - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    setProdutos(produtosAtualizados);
  };

  const removerProduto = (id) => {
    const produtosFiltrados = produtos.filter((item) => item.id !== id);
    setProdutos(produtosFiltrados);
  };

  const calcularTotal = () => {
    return produtos
      .reduce((total, item) => total + item.preco * item.quantidade, 0)
      .toFixed(2);
  };

  const handleConfirmarCompra = async () => {
    if (produtos.length === 0) {
      toast.error(
        "Seu carrinho está vazio! Adicione produtos antes de confirmar a compra.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }

    try {
      const pedido = {
        valor_total: Number(calcularTotal()),
      };

      const resposta = await fazerPedido(pedido);

      setProdutos([]);
    } catch (error) {
      console.log(error);
    }

    setMostrarModal(true);
  };

  return (
    <div className="carrinho-container">
      <Header />
      <div className="carrinho-body">
        <div className="carrinho-form">
          <div className="carrinho-produtos-body">
            <h2>Carrinho de Compras</h2>

            <div className="carrinho-produtos">
              {produtos.map((item) => (
                <div key={item.id} className="produto-item">
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="produto-img"
                  />
                  <div className="produto-info">
                    <p className="produto-nome">{item.nome}</p>
                    <div className="produto-qtd">
                      {item.quantidade === 1 ? (
                        <button
                          onClick={() => removerProduto(item.id)}
                          aria-label={`Remover produto ${item.nome}`}
                        >
                          <FaRegTrashCan />
                        </button>
                      ) : (
                        <button
                          onClick={() => excluirQuantidade(item.id)}
                          aria-label={`Diminuir quantidade de ${item.nome}`}
                        >
                          <FiMinus />
                        </button>
                      )}
                      <span>{item.quantidade}</span>
                      <button
                        onClick={() => adicionarQuantidade(item.id)}
                        aria-label={`Aumentar quantidade de ${item.nome}`}
                      >
                        <IoAddOutline />
                      </button>
                    </div>
                  </div>
                  <div className="produto-preco">
                    R$ {(item.preco * item.quantidade).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carrinho-confirmaCompra">
            <h2>Total: R$ {calcularTotal()}</h2>
            <button onClick={handleConfirmarCompra}>Confirmar Compra</button>
            <div className="carrinho-icones">
              <FaCreditCard size={40} className="icone-card" />
              <MdPix size={45} className="icone-pix" />
            </div>

            <p>
              *Ao clicar em{" "}
              <strong>
                <i>Confirmar Compra</i>
              </strong>
              , você será redirecionado para o <br />
              Whatsapp da <strong>Cia do Mel</strong> para escolher suas formas
              de pagamento e entrega.
            </p>
          </div>
        </div>
      </div>
      {mostrarModal && <ModalCarrinho onClose={() => setMostrarModal(false)} />}
      <Footer />
      <ToastContainer />
    </div>
  );
}
