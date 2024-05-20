import { Link } from "react-router-dom";

function GenderCategory() {
  return (
    <div className=" border-t-[1px]  py-10 flex flex-col gap-4 ">
      <h1 className=" text-2xl tracking-wide ">Gender Categories</h1>
      <ul className="list-disc  flex flex-col gap-2">
        <li>
          <Link className=" text-neutral-600">Women&apos;s Fashion</Link>
        </li>
        <li>
          <Link className=" text-neutral-600">Men&apos;s Fashion</Link>
        </li>
      </ul>
    </div>
  );
}

export default GenderCategory;
