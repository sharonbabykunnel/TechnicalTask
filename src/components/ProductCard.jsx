import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className=' max-w-40'>
      <img src={product.image} alt="product" />
      <p>{product.price}</p>
      <p>{product.title}</p>
      <p>{product.category}</p>
    </div>
  )
}

export default ProductCard
