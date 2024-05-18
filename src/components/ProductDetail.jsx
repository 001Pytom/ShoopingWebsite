import { useEffect } from "react";
import { useProducts } from "../context/Goodsprovider";
import { useCart } from "../context/CartProvider";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function ProductDetail() {
  const { id } = useParams();
  const { getEachProduct, currentProduct, isLoading, error } = useProducts();
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      getEachProduct(id);
    }
  }, [id, getEachProduct]);

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!currentProduct) return <p>Product not found</p>;

  const { category, description, price, image, title } = currentProduct;

  return (
    <div className="container mx-aut ">
      <div className="flex items-center justify-evenly w-[80vw]">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className=" w-1/2 h-1/2 object-contain mb-4"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <div className="">
            <h1 className="text-2xl font-bold  uppercase mb-2">{category}</h1>
            <p className="text-lg font-bold">${price}</p>
          </div>
          <p className="mb-4">{description}</p>
          <button
            className="bg-green-500 text-white py-2 px-4 mt-2"
            onClick={() => addToCart(currentProduct)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
