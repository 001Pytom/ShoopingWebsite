import Search from "./Search";
import ProductCategory from "./ProductCategory";
import GenderCategory from "./GenderCategory";
import { useProducts } from "../context/Goodsprovider";

function Categories() {
  const { resetFilters } = useProducts();

  return (
    <div className="hidden basis-80 bg-white shadow p-8 h-screen md:flex flex-col">
      <Search />
      <ProductCategory />
      <GenderCategory />
      <button
        onClick={resetFilters}
        className="mt-4 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
      >
        Reset Filters
      </button>
    </div>
  );
}

export default Categories;
