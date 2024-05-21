import Categories from "../components/Categories";
import AllProducts from "../components/AllProducts";
import { useProducts } from "../context/Goodsprovider";

function ShopPage() {
  const { error } = useProducts();

  if (error) return error;
  return (
    <div className="container mx-auto p-10 flex relative gap-6">
      <Categories />
      <AllProducts />
    </div>
  );
}

export default ShopPage;
