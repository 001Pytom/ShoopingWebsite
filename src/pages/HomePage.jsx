import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className=" home min-h-screen w-full ">
      <div className="container w-[80vw] mx-auto  flex">
        <div className="flex w-1/2  justify-center items-center text-white gap-4 pt-32">
          <p className="writeMode uppercase tracking-widest text-red-800  text-2xl">
            Special Price
          </p>
          <div className="flex flex-col gap-4">
            <h1 className=" text-7xl">New Product Collection</h1>
            <Link
              to="/shop"
              className=" uppercase tracking-widest underline underline-offset-8"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
