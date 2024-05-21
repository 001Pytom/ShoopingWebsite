import { useProducts } from "../context/Goodsprovider";

function Search() {
  const { handleSearch } = useProducts();

  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <form
      className="flex items-center max-w-sm w-full mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#60101F] focus:border-[#60101F] block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#60101F] "
          placeholder="Search item name or category..."
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}

export default Search;
