import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// import Contact from "./pages/Contact";
import ShopPage from "./pages/ShopPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Goodsprovider } from "./context/Goodsprovider";
import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./context/CartProvider";
import CartModal from "./components/CartModal";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Goodsprovider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="cart" element={<CartModal />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="shop/:id" element={<ProductDetail />} />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
          <CartModal />
          <Footer />
        </Goodsprovider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
