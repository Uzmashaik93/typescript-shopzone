import React from 'react'

interface HeaderTypes{
  searchProducts:(s:string)=>void
}

function Header({searchProducts}:HeaderTypes) {
  return (
    <header>
      <div className='logo'>
        <img src="https://pngimg.com/d/amazon_PNG27.png" alt=""/>
        <h2>Shopzone</h2>
      </div>
       
        <input onChange={(e)=>{
searchProducts(e.target.value);

        }} 
        type="text" 
        placeholder='search the product'/>
    </header>
  )
}

export default Header