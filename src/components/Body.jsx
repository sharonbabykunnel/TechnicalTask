import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import axios from 'axios'
import js from '@eslint/js'

const Body = () => {
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState([]);
    const [categoryValue, setCategoryValue] = useState('')

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get('https://fakestoreapi.com/products');
            console.log(res.data,'res');
            setShowData(res.data)
            setData(res.data);
        }
        fetchData();
    },[]);
    const setCategory = (value)=>{
        setCategory(value)
        let filterdData 
        if(!value){
            filterdData = data
        }else{
            filterdData = data.filter((item)=> item.category=== value)
        }
        setShowData(filterdData)
    }
    const handleSearch = (value)=>{
        let filterdData;
        if(!value){
            filterdData = data
        }else{
            filterdData = data.filter( (item)=> item.title.match(value) )
        }
        setShowData(filterdData) 
            
    }

  return (
    <div>
      <Header handleSearch={handleSearch} setCategory={setCategory}/>
      {showData &&
      <Content data={showData}/>
    }
    </div>
  )
}

export default Body
