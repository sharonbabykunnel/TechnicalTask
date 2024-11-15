import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className=' max-w-40 max-h-40 m-4 '>
      <img src={product.image} className=' max-h-20 max-w-20' alt="product" />
      <p>{product.price}</p>
      <p>{product.title}</p>
      <p>{product.category}</p>
    </div>
  )
}

export default ProductCard
