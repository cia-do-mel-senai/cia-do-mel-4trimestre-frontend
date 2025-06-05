import Header from "../../components/Header/Header";
import "./Carrinho.css";
import { MdPix } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import ModalCarrinho from "../../components/ModalCarrinho/ModalCarrinho";


export default function Carrinho() {

  const [produtos, setProdutos] =useState([
    {
       id: 1,
      nome: "Pote de mel 1kg",
      preco: 29.99,
      imagem: "/img/pote1kg.png",
      quantidade: 2,
    },
    {
      id: 2,
      nome: "Pote de mel 500g",
      preco: 17.99,
      imagem: "/img/pote500g.png",
      quantidade: 1,
    },
    {
      id: 3,
      nome: "Pote de mel 1kg",
      preco: 29.99,
      imagem: "/img/pote1kg.png",
      quantidade: 2,
    },
    {
      id: 4,
      nome: "Pote de mel 500g",
      preco: 17.99,
      imagem: "/img/pote500g.png",
      quantidade: 1,
    },
    {
       id: 5,
      nome: "Pote de mel 1kg",
      preco: 29.99,
      imagem: "/img/pote1kg.png",
      quantidade: 2,
    },
    {
      id: 6,
      nome: "Pote de mel 500g",
      preco: 17.99,
      imagem: "/img/pote500g.png",
      quantidade: 1,
    },
    {
      id: 7,
      nome: "Pote de mel 1kg",
      preco: 29.99,
      imagem: "/img/pote1kg.png",
      quantidade: 2,
    },
    {
      id: 8,
      nome: "Pote de mel 500g",
      preco: 17.99,
      imagem: "/img/pote500g.png",
      quantidade: 1,
    },
  ]);

  const [mostrarModal, setMostrarModal] = useState(false);


  const adicionarQuantidade = (id) => {
    const produtosAdicionados = produtos.map((item) => {
      if (item.id === id) {
        return {...item, quantidade: item.quantidade + 1};
      } else {
        return item;
      }
    });
    setProdutos(produtosAdicionados);
  };

  const excluirQuantidade = (id) => {
    const produtosAdicionados = produtos.map((item) => {
      if (item.id === id) {
        if (item.quantidade > 1) {
          return { ...item, quantidade: item.quantidade - 1};
        } 
      } 
      return item;
    });
    setProdutos(produtosAdicionados);
  };

  const removerProduto = (id) => {
    const produtosAdicionados = produtos.filter((item) => item.id !== id);
    setProdutos(produtosAdicionados);
  };

  const calcularTotal = () => {
    return produtos
      .reduce((total, item) => total + item.preco * item.quantidade, 0)
      .toFixed(2);
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
                    {(() => {
                      if(item.quantidade === 1) {
                        return (
                          <button onClick={() => removerProduto(item.id)}>
                            <FaTrashAlt />
                          </button>
                        );
                      } else {
                        return (
                          <button onClick={() => excluirQuantidade(item.id)}>
                            -
                          </button>
                        );
                      }
                    })()}
                    <span>{item.quantidade}</span>
                    <button onClick={() => adicionarQuantidade(item.id)}>
                      +
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
            <button onClick={() => setMostrarModal(true)}>Confirmar Compra</button>
            <div style={{ display: "flex", gap: "20px", alignItems: "center", marginTop: "8px" }}>
                <FaCreditCard size={40} /> 
                <MdPix size={45}/>
            </div>
            <p>*Ao clicar em <strong><i>Confirmar Compra</i></strong>, você será redirecionado para o <br />
            Whatsapp da <strong>Cia do Mel</strong> para escolher suas formas de pagamento e entrega.</p>
            
          </div>
        </div>
      </div>
      {mostrarModal && <ModalCarrinho onClose={() => setMostrarModal(false)} />}
    <Footer/>
    </div>
  );
}
