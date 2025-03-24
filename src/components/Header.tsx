import React from 'react'

function Header() {
  return (
    <header>
      <div className='logo'>
        <img src="https://pngimg.com/d/amazon_PNG27.png" alt=""/>
        <h2>Shopzone</h2>
      </div>
       
        <input onChange={(e)=>{
console.log(e.target.value);

        }} 
        type="text" 
        placeholder='search the product'/>
    </header>
  )
}

export default Header