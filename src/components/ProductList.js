import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products, formSubmited}) => {
  return (
    <div className="row">
      { products.length === 0 &&
        formSubmited &&
        <h4 className='container'>No se encontraron productos <span role="img" aria-label="crying face">😢</span></h4>
      }
      <ul>
        { products.length > 0 && products.map(product => (
            <ProductItem product={product} key={product.id}/>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductList;
