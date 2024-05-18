function Loader() {
  return (
    <div>
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-64 bg-gray-300 w-full mb-4 text-white text-6xl ">
          Loading...
        </div>
        <div className="h-6 bg-gray-300 w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-300 w-1/3"></div>
      </div>
    </div>
  );
}

export default Loader;
