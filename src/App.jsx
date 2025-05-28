import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductRegister from "./pages/ProductRegister/ProductRegister";
import ProductEdit from "./pages/ProductEdit/ProductEdit";
import Catalogo from "./pages/Catalogo/catalogo";
import CadastroCliente from "./pages/CadastroCliente/CadastroCliente";
import LoginCliente from "./pages/LoginCliente/LoginCliente";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/product/new", element: <ProductRegister /> },
    { path: "/product/:id/edit", element: <ProductEdit /> },
     { path: "/catalogo", element: < Catalogo/> },
    { path: "/CadastroCliente", element: <CadastroCliente /> },
    { path: "/LoginCliente", element: <LoginCliente /> },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
