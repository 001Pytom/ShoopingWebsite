import { useProducts } from "../context/Goodsprovider";
import Product from "../components/Product";
import Spinner from "./Spinner";

function AllProducts() {
  const { isLoading, products } = useProducts();

  if (isLoading) return <Spinner />;
  return (
    <div className="container products mx-auto flex flex-wrap justify-items-center items-center justify-center gap-10 flex-1 relative bg-gray-50">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
