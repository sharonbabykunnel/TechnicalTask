import React, { useState } from 'react'

const Header = ({handleSearch,}) => {
    const [searchVal, setSearchVal] = useState('');
    const [category,setCategory] = useState([])

    const handleValue = (e)=>{
        setSearchVal(e.target.value);
    }


  return (
    <div className='flex gap-3'>
      <h1 className=''>Platzi Fake Storage API</h1>
      <input className=' border' value={searchVal} onChange={handleValue}/>
      <button onClick={()=>handleSearch(searchVal)} >Search</button>
      <select>
        { category && category.map((item)=>{
            <option>{item}</option>
        })}
      </select>
    </div>
  )
}

export default Header
