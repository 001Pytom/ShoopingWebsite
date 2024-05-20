import Search from "./Search";
import ProductCategory from "./ProductCategory";
import GenderCategory from "./GenderCategory";

function Categories({ onCategoryClick }) {
  return (
    <div className="hidden basis-80 bg-white shadow p-8 h-screen md:flex flex-col justify-evenly">
      <Search />
      <ProductCategory />
      <GenderCategory onCategoryClick={onCategoryClick} />
    </div>
  );
}

export default Categories;
