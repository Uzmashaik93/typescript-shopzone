import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import "./main.css"
import { products } from "./types";
import axios from "axios";


function App() {
  const [products,setProducts]=useState<products>([]);

  useEffect(()=>{
    getProducts()
  },[]);

  const getProducts =async()=>{
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data)
    
  };


  return (
    <div className="App">
      <Header/>
      <Products products={products}/>
    </div>
  );
}

export default App;
