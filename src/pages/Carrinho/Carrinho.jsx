import Header from "../../components/Header/Header";
import "./Carrinho.css";
import { MdPix } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import Footer from "../../components/Footer/Footer";

export default function Carrinho() {

  return (
    <div className="carrinho-container">
      <Header />
      <div className="carrinho-body">
        <div className="carrinho-form">
          

    <div className="carrinho-produtos">

    </div>


          <div className="carrinho-inputs">
            <h2>Total: R$ </h2>
            <button>Confirmar Compra</button>
            <div style={{ display: "flex", gap: "30px", alignItems: "center", marginTop: "20px" }}>
                <FaCreditCard size={65} /> 
                <MdPix size={70}/>
            </div>
            <p>*Ao clicar em <i>confirmar compra</i>, você será redirecionado para o Whatsapp da Cia do Mel para escolher suas formas de pagamento e entrega. </p>
           



           

           
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
