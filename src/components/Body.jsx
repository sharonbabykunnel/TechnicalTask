import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import axios from 'axios'
import js from '@eslint/js'

const Body = () => {
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get('https://fakestoreapi.com/products');
            console.log(res.data,'res');
            setShowData(res.data)
            setData(res.data);
        }
        fetchData();
    },[]);

    const handleSearch = (value)=>{
        console.log(value)
        const filtedData = data.filter( (item)=> item.title.match(value) )
        console.log(filtedData)
        setShowData(filtedData)
    }

  return (
    <div>
      <Header handleSearch={handleSearch} data={data}/>
      {showData &&
      <Content data={showData}/>
    }
    </div>
  )
}

export default Body
