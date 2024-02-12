import React, { useState } from 'react'
import './Carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


export const Carousel = ({data}) => {
    const [slide, setslide] = useState(0);
    console.log(data);

    const nextSlide = ()=>{
        setslide(slide===data.length-1?0:slide+1)
    }
    const prevSlide = ()=>{
        setslide(slide===0?data.length-1:slide-1)
    }

  return (
    <div className='carousel'>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
        {
            data.map((item,index)=>
                 <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide" : "slide slide-hidden"} />

            )
        }
        <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
        <span className='indicators'>
            {
                data.map((_,idx)=>
                    <button key={idx}  onClick={()=>setslide(idx)} className={slide === idx?"indicator" : "indicator indicator-inactive"}></button>
                )
            }
        </span>
    </div>
  )
}
