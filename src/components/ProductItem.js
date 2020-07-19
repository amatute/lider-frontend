import React from 'react'

const ProductItem = ({ product }) => (
  <li className='col m3'>
    <div className="card">
      <div className="card-image">
        <img alt="" src={`http://${product.image}`}/>
      </div>
      <div className="card-content">
        <p className='text-label'>Marca:</p>
        <p className='text-value'>{product.brand}</p>
        <p className= 'text-label'>Descripción:</p>
        <p className='text-value'>{product.description}</p>
      </div>
      <div className="card-action card-item">
        {
          product.priceWithDiscount ?
          <>
            <p className='price'>$ {product.priceWithDiscount} <span className="discount-text">50%</span></p> 
            <p className="grey-text text-darken-2 old-price">$ {product.price}</p>
          </>
          : <p className='price'>$ {product.price}</p>
        }
        <a href='#!' className='waves-effect waves-light btn-small blue darken-4'>Agregar</a>
      </div>
    </div>

  </li>
)

export default ProductItem
