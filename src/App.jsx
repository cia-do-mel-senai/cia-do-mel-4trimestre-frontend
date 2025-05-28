import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductRegister from "./pages/ProductRegister/ProductRegister";
import ProductEdit from "./pages/ProductEdit/ProductEdit";
import Catalogo from "./pages/Catalogo/catalogo";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/product/new", element: <ProductRegister /> },
    { path: "/product/:id/edit", element: <ProductEdit /> },
     { path: "/catalogo", element: < Catalogo/> },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
