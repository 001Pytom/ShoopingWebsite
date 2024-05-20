import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartProvider";
import { GiShoppingCart } from "react-icons/gi";

function NavBar() {
  const { openCart, cartItems } = useCart();

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-bold">
              <span className="text-[#60101F]">TEE</span>HAT
            </h1>
          </Link>
          <div className="flex items-center lg:order-2 gap-4">
            <Link
              to="#"
              className="text-white bg-[#1D1F20] hover:bg-[#60101F] focus:ring-2 focus:ring-[#2d3031] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
            <button onClick={openCart} className="relative">
              <span className="text-3xl">
                <GiShoppingCart />
              </span>
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center text-[10px] ">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-[#60101F]" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-[#60101F] lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-[#60101F]" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-[#60101F] lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-[#60101F]" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-[#60101F] lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-[rgb(96,16,31)]" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-[#60101F] lg:p-0`
                  }
                >
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
