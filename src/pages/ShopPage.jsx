import { useProducts } from "../context/Goodsprovider";
import Product from "../components/Product";
import Categories from "../components/Categories";

function ShopPage() {
  const { isLoading, products, error } = useProducts();
  if (error) return error;
  return (
    <div className=" container mx-auto p-10 flex relative gap-6">
      <Categories />
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="container products mx-auto flex flex-wrap  justify-items-center items-center  gap-10 flex-1 relative">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShopPage;
