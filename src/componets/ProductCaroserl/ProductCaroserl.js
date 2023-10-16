import React from 'react'
import './ProductCaroserl.css'
import CategoryBanner from '../categoryBanner/CategoryBanner';

   import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';

  const Next=(props)=>{
     const {className,onClick}=props
     return(
        <div className={className} onClick={onClick}>
            <MdArrowForwardIos
                style={{color:'black',fontSize:25, fontWeight:900}}
            />
        </div>
     )
  }

  const Prev=( props )=>{
    const {className,onClick}=props

    return(
         <div className={className} onClick={onClick}>
            <MdOutlineArrowBackIosNew
                style={{color:'black',fontSize:25, fontWeight:900}}
            />
        </div>
        
    )

  }

const ProductCaroserl = ({BgImg,Title,Data}) => {

 
const settings={
         dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
     
     }
  return (
    <div className='categoryCarousel'>
      <div className='categoryCarousel-left'
      style={{background:`url(${BgImg}) no-repeat 0px bottom`}} >
          <p className='categoryCarousel-title'>{Title}</p>
          <button className='categoryCarousel-btn'>View All</button>
      </div>
      <div className='categoryCarousel-right'>
        <Slider nextArrow={<Next/>}  prevArrow={<Prev/>}{...settings}>

         {Data.map((item,index)=>(
          <Link key={index} to={'/Products'}>
          <CategoryBanner
            ImgSrc={item.ImgSrc}
            Title={item.CategoryName}
            Data={item.Brand} />
             </Link>
             ))}
               </Slider>
        </div>
    </div> 
    )}

export default ProductCaroserl
