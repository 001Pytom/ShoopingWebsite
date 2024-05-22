import { useEffect, useRef } from "react";
import { useCart } from "../context/CartProvider";
import { createPortal } from "react-dom";
import Quantity from "./Quantity";

function CartModal() {
  const { cartItems, isCartOpen, closeCart, removeFromCart } = useCart();
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 max-w-lg transform transition-transform duration-300 scale-100"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700  text-2xl"
          onClick={closeCart}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <ul className="max-h-96 overflow-y-auto">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="mb-4 flex justify-between items-center border-b pb-4"
            >
              <div className="flex items-center">
                <div className="h-20 w-20 hidden md:block">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="md:ml-4">
                  <div className="font-semibold text-sm md:text-lg">
                    {item.title}
                  </div>
                  <div className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </div>
                  <div className="text-gray-800 font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Quantity item={item} />
                <button
                  className="text-red-500 hover:text-red-700  "
                  onClick={() => removeFromCart(item.id)}
                >
                  &times;
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-right">
          <strong className="text-xl">
            Subtotal: $
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </strong>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default CartModal;
