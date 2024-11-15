import React, { useState } from 'react'

const Header = ({handleSearch,setCategory,setSearchVal,searchVal}) => {

    const handleValue = (e)=>{
        setSearchVal(e.target.value);
    }


  return (
    <div className='flex gap-3'>
      <h1 className=''>Platzi Fake Storage API</h1>
      <input className=' border' value={searchVal} onChange={handleValue}/>
      <button onClick={handleSearch} >Search</button>
      <select onChange={(e)=>setCategory(e.target.value)}> 
            <option value='' >all</option>
            <option value="men's clothing">men's clothing</option>
            <option value='jewelery'>jewelery</option>
            <option value='electronics'>electronics</option>
      </select>
    </div>
  )
}

export default Header
