import React from "react";
import { product } from "../types";

interface ProductDetailTypes {
  product: product;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ProductDetails({ product, setOpen }: ProductDetailTypes) {
  return (
    <div className="backdrop">
      <div className="popup">
        <div className="details-container">
          <div className="product-image">
            <img className="img" src={product.image} alt={product.title} />
          </div>
          <div className="product-body">
            <p className="title">{product.title}</p>
            <p className="description">{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count})
            </p>
            <button>Proceed to check out</button>
            <span onClick={() => setOpen(false)}>Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
