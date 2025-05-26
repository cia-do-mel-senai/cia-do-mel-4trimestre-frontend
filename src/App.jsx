import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductRegister from "./pages/ProductRegister/ProductRegister";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/product/new", element: <ProductRegister /> },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
