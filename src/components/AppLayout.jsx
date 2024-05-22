import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import CartModal from "./CartModal";
import Footer from "./Footer";
import { CartProvider } from "../context/CartProvider";
import { Goodsprovider } from "../context/Goodsprovider";

function AppLayout() {
  return (
    <div>
      <CartProvider>
        <Goodsprovider>
          <NavBar />
          <Outlet />
          <CartModal />
          <Footer />
        </Goodsprovider>
      </CartProvider>
    </div>
  );
}

export default AppLayout;
