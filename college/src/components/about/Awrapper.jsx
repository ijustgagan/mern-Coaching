import React from "react"
import { awrapper } from "../../dummydata.js"

const Awrapper = () => {
  return (
    <>
      <section className='awrapper items shadow animate__animated animate__fadeIn transition-transform transform hover:scale-105 hover:shadow-lg'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper
