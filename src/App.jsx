import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./components/ProductDetail";
import CartModal from "./components/CartModal";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <CartModal /> },
      { path: "shop", element: <ShopPage /> },
      { path: "shop/:id", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
