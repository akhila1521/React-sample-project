import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BeautyProducts = () => {
  const [data, setdata] = useState([])
  useEffect(()=>{
    const handleFetct = async()=>{
      const fet = await fetch('https://dummyjson.com/products');
      const res = await fet.json();
      // alert("Data Fetched Successfully")
      setdata(res.products);
      
    }
    handleFetct()
  },[])
  console.log(data)

  return (
    <div className='parentDiv'>
    {data.map((item)=>{
      return(
        <div className='mainDiv'> 
            <div className="card">
  <img src={item.images} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p><strong>Warranty Info:</strong>{item.returnPolicy}</p>
    <button className='btn btn-info'>Rs.{item.price}/-</button>
    <button className='btn btn-secondary m-3'><Link to={'/cart'} className='text-white text-decoration-none'>Add to Cart</Link></button>
  </div>
</div>
        </div>
      )
 } )}
   </div>
  )
}

export default BeautyProducts
