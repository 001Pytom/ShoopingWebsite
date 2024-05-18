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

  useEffect(function () {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        const data = await res.json();
        setProducts(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(`Error fetching products: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // for each display of items

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
        console.log(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(`Error fetching product: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    },
    [currentProduct.id]
  );

  const values = {
    products,
    isLoading,
    error,
    getEachProduct,
    currentProduct,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("Cities context was used putside the cities provider");
  return context;
}

export { Goodsprovider, useProducts };
