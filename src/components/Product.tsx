import React from 'react'
import { product } from '../types'

type ProductType={
    product:product;
}

function Product({product}:ProductType) {
  return (
    <div key={product.id} className="card">
    <div className="image-container">
      <img src={product.image} alt={product.title} />
    </div>
    <div className="card-body">
      <h5>{product.title}</h5>
      <p>{product.description.slice(0,50)}</p>
      <button>Buy - ${product.price}...</button>
    </div>
  </div>
  )
}

export default Product