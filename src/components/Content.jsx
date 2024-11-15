import React from 'react'
import ProductCard from './ProductCard'

const Content = ({data}) => {
  return (
    <div className=' grid sm:grid-cols-1 m-4 '>
      {data.map((product)=>{
       return (
        <ProductCard key={product.id} product={product}/>
       ) 
      })}
    </div>
  )
}

export default Content
