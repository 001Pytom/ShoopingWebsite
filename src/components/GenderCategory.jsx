import { useProducts } from "../context/Goodsprovider";
import { Link } from "react-router-dom";

function GenderCategory() {
  const { handleGenderSelect } = useProducts();

  const handleGenderClick = (gender) => {
    handleGenderSelect(gender);
  };

  return (
    <div className="border-b-[1px] py-10 flex flex-col gap-4">
      <h1 className="text-2xl tracking-wide">Gender Categories</h1>
      <ul className="list-disc flex flex-col gap-2">
        <li>
          <Link
            to="#"
            onClick={() => handleGenderClick("women's clothing")}
            className="text-neutral-600"
          >
            Women's Fashion
          </Link>
        </li>
        <li>
          <Link
            to="#"
            onClick={() => handleGenderClick("men's clothing")}
            className="text-neutral-600"
          >
            Men's Fashion
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default GenderCategory;
