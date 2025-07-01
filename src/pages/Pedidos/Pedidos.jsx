import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Pedido from "../../components/Pedido/Pedido";
import { AuthContext } from "../../context/authContext";
import "./Pedidos.css";
import { pegarPedidoPorId, pegarPedidos } from "../../services/servicoPedido";

export default function Pedidos() {
  const { usuario } = useContext(AuthContext);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    if (usuario?.tipo_usuario === "usuario") {
      pegarPedidosId();
    } else if (usuario?.tipo_usuario === "admin") {
      pegarTodosOsPedidos();
    }
  }, [usuario]);

  const pegarPedidosId = async () => {
    try {
      const resposta = await pegarPedidoPorId(usuario.id);
      setPedidos(resposta.data);
    } catch (error) {}
  };

  const pegarTodosOsPedidos = async () => {
    try {
      const resposta = await pegarPedidos();
      setPedidos(resposta.data);
    } catch (error) {}
  };

  return (
    <div className="pedidos-container">
      <Header />
      <div className="pedidos-main">
        <div className="pedidos-body">
          <h2>Pedidos:</h2>

          <div className="pedidos">
            {pedidos.length === 0 && (
              <h3 className="sem-pedidos">Ainda não há pedidos</h3>
            )}

            {pedidos.map((pedido, index) => {
              return (
                <Pedido
                  data={new Date(pedido.data_criacao).toLocaleDateString()}
                  codigoPedido={pedido.codigo_pedido}
                  status={pedido.status}
                  valorTotal={pedido.valor_total}
                  key={index}
                  tipoUsuario={usuario.tipo_usuario}
                  id={pedido.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
