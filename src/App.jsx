import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto";
import EdicaoProduto from "./pages/EdicaoProduto/EdicaoProduto";
import Catalogo from "./pages/Estoque/Estoque";
import LoginCliente from "./pages/LoginCliente/LoginCliente";
import Pedidos from "./pages/Pedidos/Pedidos";
import ProdutoDetalhado from "./pages/ProdutoDetalhado/ProdutoDetalhado";
import { AuthProvider } from "./context/authContext";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/produto/:id/editar", element: <EdicaoProduto /> },
    { path: "/produto/:id", element: <ProdutoDetalhado /> },
    { path: "/estoque", element: <Catalogo /> },
    { path: "/login", element: <LoginCliente /> },
    { path: "/pedidos", element: <Pedidos /> },
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
export default App;
