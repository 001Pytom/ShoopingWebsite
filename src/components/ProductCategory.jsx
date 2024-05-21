import { useProducts } from "../context/Goodsprovider";
import { Link } from "react-router-dom";

function ProductCategory() {
  const { handleCategorySelect } = useProducts();

  const handleCategoryClick = (category) => {
    handleCategorySelect(category);
  };

  return (
    <div className="border-b-[1px] py-10 flex flex-col gap-2">
      <h1 className="text-2xl tracking-wide">Product Categories</h1>
      <ul className="list-disc flex flex-col gap-2">
        {/* <li>
          <Link
            to="#"
            onClick={() => handleCategoryClick("clothing")}
            className="text-neutral-600"
          >
            Clothing
          </Link>
        </li> */}
        <li>
          <Link
            to="#"
            onClick={() => handleCategoryClick("electronics")}
            className="text-neutral-600"
          >
            Electronics
          </Link>
        </li>
        <li>
          <Link
            to="#"
            onClick={() => handleCategoryClick("jewelery")}
            className="text-neutral-600"
          >
            Jewelery
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductCategory;
