import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Pedido from "../../components/Pedido/Pedido";
import "./Pedidos.css";

export default function Pedidos() {
  return (
    <div className="pedidos-container">
      <Header />
      <div className="pedidos-main">
        <div className="pedidos-body">
          <h2>Pedidos:</h2>
          
          <div className="pedidos">
            <Pedido
              data={"05/03/2025"}
              id={Date.now()}
              status={"Pedido realizado"}
              valorTotal={59.99}
            />
            <Pedido
              data={"06/03/2025"}
              id={Date.now() + 1}
              status={"Pedido em preparo"}
              valorTotal={89.5}
            />
            <Pedido
              data={"07/03/2025"}
              id={Date.now() + 2}
              status={"Pedido enviado"}
              valorTotal={120.0}
            />
            <Pedido
              data={"08/03/2025"}
              id={Date.now() + 3}
              status={"Pedido entregue"}
              valorTotal={75.25}
            />
            <Pedido
              data={"09/03/2025"}
              id={Date.now() + 4}
              status={"Pedido cancelado"}
              valorTotal={50.0}
            />
            <Pedido
              data={"05/03/2025"}
              id={Date.now()}
              status={"Pedido realizado"}
              valorTotal={59.99}
            />
            <Pedido
              data={"06/03/2025"}
              id={Date.now() + 1}
              status={"Pedido em preparo"}
              valorTotal={89.5}
            />
            <Pedido
              data={"07/03/2025"}
              id={Date.now() + 2}
              status={"Pedido enviado"}
              valorTotal={120.0}
            />
            <Pedido
              data={"08/03/2025"}
              id={Date.now() + 3}
              status={"Pedido entregue"}
              valorTotal={75.25}
            />
            <Pedido
              data={"09/03/2025"}
              id={Date.now() + 4}
              status={"Pedido cancelado"}
              valorTotal={50.0}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
