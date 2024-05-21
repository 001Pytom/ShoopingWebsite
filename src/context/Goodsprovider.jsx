import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const ProductContext = createContext();

function Goodsprovider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentProduct, setCurrentProduct] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  useEffect(function () {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(`Error fetching products: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const getEachProduct = useCallback(
    async function getEachProduct(id) {
      if (Number(id) === currentProduct.id) return;
      setIsLoading(true);

      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setCurrentProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(`Error fetching product: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    },
    [currentProduct.id]
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory("");
    setSelectedGender("");
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery("");
    setSelectedGender("");
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setSearchQuery("");
    setSelectedCategory("");
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedGender("");
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesGender = selectedGender
      ? product.category.toLowerCase().includes(selectedGender.toLowerCase())
      : true;
    return matchesSearch && matchesCategory && matchesGender;
  });

  const values = {
    products: filteredProducts,
    isLoading,
    error,
    getEachProduct,
    currentProduct,
    handleSearch,
    handleCategorySelect,
    handleGenderSelect,
    resetFilters,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("Cities context was used outside the cities provider");
  return context;
}

export { Goodsprovider, useProducts };
