import React, { useState } from "react";
import { product } from "../types";
import ProductDetails from "./ProductDetails";

type ProductType = {
  product: product;
};

function Product({ product }: ProductType) {
  const [open, setOpen] = useState(false);

  return (
    <div key={product.id} className="card">
      <div className="image-container">
        <img className="img" src={product.image} alt={product.title} />
      </div>
      <div className="card-body">
        <h5>{product.title}</h5>
        <p>{product.description.slice(0, 50)}</p>
        <button onClick={() => setOpen(true)}>Buy - ${product.price}...</button>
      </div>
      {open && <ProductDetails product={product} setOpen={setOpen} />}
    </div>
  );
}

export default Product;
