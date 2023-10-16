import React from 'react'
import './Hme.css'
import CategoryBar from '../../componets/CategoryBar/CategoryBar'
import{CategoryBarData,CarouselData,BestOf}from '../../Data'
import BannerCaroserl from '../../componets/BannerCaroserl/BannerCaroserl'
import ProductCaroserl from '../../componets/ProductCaroserl/ProductCaroserl'

const Home = () => {
  return (
    <div className='Home'>
       <div className='Home-CategoryContainer'>
          <div className='Home-categoryBar'>
            {CategoryBarData.map((item, index)=>(
              <CategoryBar
                 key={index}
                ImgSrc={item.imageSrc}
                CategoryName={item.category}
              />
               
              
            ))}
          </div>
       </div>
          <div className='Home-Container'>

            <div className='Home-Carousel'>
            <BannerCaroserl data={CarouselData}/>
           </div>
            

            <div className='home-productCarosel'>
              <ProductCaroserl  BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Best of Electronics"}
            Data={BestOf.Electronics}
          />
          <ProductCaroserl
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Beauty,Food,Toys"}
            Data={BestOf.BeautyFoodsToys}
          />
          <ProductCaroserl
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Winter Essentials"}
            Data={BestOf.WinterEssential}
          />
          <ProductCaroserl
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Wedding & Gifting Specials"}
            Data={BestOf.WeddingsAndGifts}
          /> 
            </div>

          </div>
    </div>
  )
}

export default Home
