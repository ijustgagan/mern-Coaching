import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"
import 'animate.css'

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding animate__animated animate__fadeIn'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />
          <div className='content grid2'>
            {testimonal.map((val, index) => (
              <div key={index} className='items shadow animate__animated animate__zoomIn'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
