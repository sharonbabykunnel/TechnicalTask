import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import axios from 'axios'
import js from '@eslint/js'

const Body = () => {
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState([]);
    const [categoryValue, setCategoryValue] = useState('')
    const [searchVal, setSearchVal] = useState('');

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get('https://fakestoreapi.com/products');
            setShowData(res.data)
            setData(res.data);
        }
        fetchData();
    },[]);
    const setCategory = (value)=>{
        setCategoryValue(value)
        let filterdData 
        if(!value){
            filterdData = data
        }else{
            filterdData = data.filter((item)=> item.category=== value)
        }
        if(searchVal){
            filterdData.filter((item)=> item.title.match(searchVal))
        }
        setShowData(filterdData)
    }
    const handleSearch = ()=>{
        let filterdData;
            if(!searchVal){
                filterdData = data
            }else{
                filterdData = data.filter( (item)=> item.title.match(searchVal) )
            }
            if(categoryValue){
                filterdData.filter((item)=> item.category === categoryValue);
            }
        setShowData(filterdData) 
            
    }

  return (
    <div>
      <Header handleSearch={handleSearch} setSearchVal={setSearchVal} searchVal={searchVal} setCategory={setCategory}/>
      {showData &&
      <Content data={showData}/>
    }
    </div>
  )
}

export default Body
