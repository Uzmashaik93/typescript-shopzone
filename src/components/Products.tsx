import React from "react";
import { products } from "../types";
import Product from "./Product";

interface ProductsType {
  products: products;
}

function Products({ products }: ProductsType) {
  return (
   <div className="products">
    <h1>Products ({products.length})</h1>
    <div className="container">
      {products.map((product) => {
        return (
         <Product key={product.id} product={product}/>
        );
      })}
    </div>
   </div>
  );
}

export default Products;
