import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow animate__animated animate__fadeIn transition-transform transform hover:scale-105 hover:shadow-lg'>
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn bg-teal-600 hover:bg-teal-500 '>GET STARTED</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
