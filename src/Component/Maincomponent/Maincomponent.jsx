import React, { useEffect, useState } from 'react'
import Cardbox from '../Cardbox/Cardbox';
import "./Maincomponent.css"

const Maincomponent = () => {

  const [realData, setRealData] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((data) => {
        setRealData(data);
      })

  }, [])

  return (
    <div className='product'>
      {realData?.map(data => (
        <Cardbox key={data.id} data={data} />
      ))}
    </div>
  )
}

export default Maincomponent