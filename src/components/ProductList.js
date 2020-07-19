import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
  return (
    <ul>
      { 
        products.length > 0 && products.map(product => (
          <ProductItem product={product} key={product.id}/>
        ))
      }
    </ul>
  )
}

export default ProductList;
