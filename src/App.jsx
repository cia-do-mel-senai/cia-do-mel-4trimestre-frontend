import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto";
import EdicaoProduto from "./pages/EdicaoProduto/EdicaoProduto";
import Catalogo from "./pages/Catalogo/Catalogo";
import CadastroCliente from "./pages/CadastroCliente/CadastroCliente";
import LoginCliente from "./pages/LoginCliente/LoginCliente";
import Carrinho from "./pages/Carrinho/Carrinho";
import Pedidos from "./pages/Pedidos/Pedidos";
import ProdutoDetalhado from "./pages/ProdutoDetalhado/ProdutoDetalhado";
import { AuthProvider } from "./context/authContext";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/produto/novo", element: <CadastroProduto /> },
    { path: "/produto/:id/editar", element: <EdicaoProduto /> },
    { path: "/produto/:id", element: <ProdutoDetalhado /> },
    { path: "/catalogo", element: <Catalogo /> },
    { path: "/cadastro", element: <CadastroCliente /> },
    { path: "/login", element: <LoginCliente /> },
    { path: "/carrinho", element: <Carrinho /> },
    { path: "/pedidos", element: <Pedidos /> },
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
export default App;
