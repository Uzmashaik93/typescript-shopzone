import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import "./main.css";
import { products } from "./types";
import axios from "axios";

function App() {
  const [productsList, setProductsList] = useState<products>([]);
  const[filteredProducts,setFilteredProducts]=useState<products>([])

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try{
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsList(res.data);
      setFilteredProducts(res.data);
    }
    catch(error){
      console.error("Failed to fetch products:", error);
      
    }
   
  };

  const searchProducts = (s: string) => {
    let lowerCaseStr = s.trim().toLowerCase();
    let searchedProducts = filteredProducts.filter((product) => {
      return (
        product.title.toLocaleLowerCase().includes(lowerCaseStr) ||
        product.description.toLocaleLowerCase().includes(lowerCaseStr)
      );
    });

    setProductsList(searchedProducts);
  };

  return (
    <div className="App">
      <Header searchProducts={searchProducts} />
      <Products products={productsList} />
    </div>
  );
}

export default App;
