import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import CartModal from "./components/CartModal";
import AppLayout from "./components/AppLayout";
import { Suspense, lazy } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Contact = lazy(() => import("./pages/Contact"));
const ShopPage = lazy(() => import("./pages/ShopPage"));

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
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
