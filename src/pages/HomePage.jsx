import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { slides } from "../data/slides";

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div
      className=" min-h-screen w-screen bg-center bg-cover  bg-no-repeat duration-500 group "
      style={{ backgroundImage: `url(${slides[currentIndex]})` }}
    >
      <div className="container w-[80vw] mx-auto  flex">
        <div className="flex   justify-center items-center text-white gap-4 pt-32">
          <p className="writeMode uppercase tracking-widest text-red-800 text-base  md:text-2xl">
            Special Price
          </p>
          <div className="flex flex-col gap-4">
            <h1 className=" text-4xl md:text-7xl ">
              New Product <br /> Collection
            </h1>
            <Link
              to="/shop"
              className=" uppercase tracking-widest underline underline-offset-8"
            >
              Discover More
            </Link>
          </div>
        </div>
        {/* { arrow} */}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hidden group-hover:block">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hidden group-hover:block">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
