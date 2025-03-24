import React from "react";
import { products } from "../types";

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
          <div className="card">
            <div className="image-container">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-body">
              <h5>{product.title}</h5>
              <p>{product.description.slice(0,50)}</p>
              <button>Buy - ${product.price}...</button>
            </div>
          </div>
        );
      })}
    </div>
   </div>
  );
}

export default Products;
