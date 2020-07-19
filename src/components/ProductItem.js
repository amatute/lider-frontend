import React from 'react'

const ProductItem = ({ product }) => (
  <div>
    <p>Brand:  {product.brand}</p>
    <p>Description:  {product.description}</p>
    {
      product.priceWithDiscount ?
      <>
        <p>price before: {product.price}</p>
        <h5>On Sale! ${product.priceWithDiscount}</h5> 
      </>
      : <p>Price: ${product.price}</p> 
    }
  </div>
)

export default ProductItem
