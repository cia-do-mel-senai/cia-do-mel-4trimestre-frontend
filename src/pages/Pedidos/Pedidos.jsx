import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Pedido from "../../components/Pedido/Pedido";
import "./Pedidos.css";
import { pegarPedidos } from "../../services/servicoPedido";
import { AuthContext } from "../../context/authContext";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (!usuario) return;
    async function listarPedidos() {
      try {
        const resposta = await pegarPedidos();
        console.log(resposta.data);
        setPedidos(resposta.data);
      } catch (error) {
        console.log(error);
      }
    }
    listarPedidos();
  }, [usuario]);

  return (
    <div className="pedidos-container">
      <Header />
      <div className="pedidos-main">
        <h2>Pedidos</h2>

        <div className="pedidos-lista">
          {pedidos.length === 0 ? (
            <h3 className="sem-pedidos">Ainda não há pedidos</h3>
          ) : (
            pedidos.map((pedido, index) => (
              <Pedido
                key={index}
                data={new Date(pedido.data_criacao).toLocaleDateString()}
                codigoPedido={pedido.codigo_pedido}
                status={pedido.status}
                quantidade={pedido.valor_total}
                id={pedido.id}
              />
            ))
          )}

          <Pedido
            data={new Date().toLocaleDateString()}
            codigoPedido={1}
            status={"Pedido realizado"}
            quantidade={100}
            id={1}
          />
        </div>
      </div>
    </div>
  );
}
