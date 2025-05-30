import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto";
import EdicaoProduto from "./pages/EdicaoProduto/EdicaoProduto";
import Catalogo from "./pages/Catalogo/catalogo";
import CadastroCliente from "./pages/CadastroCliente/CadastroCliente";
import LoginCliente from "./pages/LoginCliente/LoginCliente";
import Carrinho from "./pages/Carrinho/Carrinho";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/product/new", element: <CadastroProduto /> },
    { path: "/product/:id/edit", element: <EdicaoProduto /> },
    { path: "/catalogo", element: <Catalogo /> },
    { path: "/cadastro-cliente", element: <CadastroCliente /> },
    { path: "/login-cliente", element: <LoginCliente /> },
    { path: "/carrinho", element: <Carrinho /> },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
