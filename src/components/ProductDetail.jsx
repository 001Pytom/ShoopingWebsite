import { useEffect } from "react";
import { useProducts } from "../context/Goodsprovider";
import { useCart } from "../context/CartProvider";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "./Spinner";

function ProductDetail() {
  const { id } = useParams();
  const { getEachProduct, currentProduct, isLoading, error } = useProducts();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEachProduct(id);
    }
  }, [id, getEachProduct]);

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <p className="w-screen h-screen flex justify-center items-center">
        {error}
      </p>
    );
  if (!currentProduct) return <p>Product not found</p>;

  const { category, description, price, image, title } = currentProduct;

  return (
    <div className="container mx-auto  flex justify-center items-center">
      <div className="flex items-center md:w-[80vw] flex-col md:flex-row text-center md:text-start p-3 md:py-20 ">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className=" md:w-1/2 md:h-1/2 object-contain mb-4"
          />
        </div>
        <div className="w-full flex flex-col gap-4 items-center md:items-start ">
          <div className="">
            <h1 className="text-xl md:text-2xl font-bold  uppercase mb-2">
              {category}
            </h1>
            <p className="text-lg font-bold">${price}</p>
          </div>
          <p className="mb-4">{description}</p>
          <div className="inline-flex">
            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l"
              onClick={() => navigate(-1)}
            >
              Prev
            </button>
            <button
              className="bg-black hover:bg-gray-700  text-white font-bold px-2 md:py-2 md:px-4 rounded-r"
              onClick={() => addToCart(currentProduct)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
