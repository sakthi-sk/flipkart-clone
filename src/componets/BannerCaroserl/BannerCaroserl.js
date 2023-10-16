import React from 'react'
import './BannerCaroserl.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const BannerCaroserl = ({data}) => {

     const settings={
        dots:false,
        Infinite:true,
        speed:1000,
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplaySpeed:3000,

     }
  return (
    <div className='BannerCarousel'>
      <Slider {...settings}>
      {data.map((item)=>(
        <div key={item.id}>
          <img src={item.Imgsrc} alt='' className='BannerCarousel-Image'></img>
        </div>
      )
        
      )}

      </Slider>
    </div>
  )
}

export default BannerCaroserl
