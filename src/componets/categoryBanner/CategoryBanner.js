import React from 'react'
import './CategoryBanner.css'

const CategoryBanner = ({ImgSrc,Title,Brand}) => {
  return (
    <div className='categoryBanner'>
      <img src={ImgSrc} alt='' className='categoryBanner-img'></img>
      <p className='categoryBanner-title'>
           {Title.length<25? Title: Title.slice(0,15)+ "..."}
      </p>
      <p className='categoryBanner-ShopNow'>ShopNow!</p>
      <p className='categoryBanner-Brands'>{Brand}</p>
    </div>
  )
}

export default CategoryBanner
