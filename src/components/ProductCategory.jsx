import { Link } from "react-router-dom";

function ProductCategory() {
  return (
    <div className=" border-t-[1px]  py-10 flex flex-col gap-2 ">
      <h1 className=" text-2xl tracking-wide ">Product Categories</h1>
      <ul className="list-disc  flex flex-col gap-2">
        <li>
          <Link className=" text-neutral-600"> Clothing</Link>
        </li>
        <li>
          <Link className=" text-neutral-600">Electronics</Link>
        </li>
        <li>
          <Link className=" text-neutral-600">Jwelries</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductCategory;
