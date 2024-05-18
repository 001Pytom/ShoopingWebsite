import { Link } from "react-router-dom";

function Product({ product }) {
  const { image, title, price, id } = product;
  return (
    <div className="product bg-white shadow-md rounded  max-w-xs  flex flex-col items-center text-center">
      <div className=" w-60 h-60 p-4">
        <img src={image} className="h-full w-full object-contain" />
      </div>
      <div className="p-4 flex flex-col  gap-1 rounded">
        <h1 className="text-lg   font-bold tracking-wide ">
          {title.split(" ").slice(0, 3).join(" ")}
        </h1>
        <p className="text-base font-bold">$ {price} USD</p>
        <Link
          className="bg-black text-white py-2  px-6  text-center "
          to={`/shop/${id}`}
        >
          View More
        </Link>
      </div>
    </div>
  );
}

export default Product;
