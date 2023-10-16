import React, { useEffect } from 'react'
import './ProductsDetalis.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import{ProductsData} from "../../ProdutsData"
import {FaShoppingCart}from 'react-icons/fa'
import {AiFillThunderbolt,AiFillStar}from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {addCart} from "../../slices/CartSlice"

const ProductsDetalis = () => {
  
  const [data,setData]=useState({})
    
  const dispatch =useDispatch()

 const {id}= useParams()

 useEffect(()=>{
    const Product=ProductsData.find((item)=>{
       return item.id.toString()==id
    })
    setData(Product)
 },[id])
 console.log(data);

  const addToCart =()=>{
    dispatch(addCart(data))
  }


  return (
    <div className='ProductsDetalis'>
       <div className='ProductsDetalis-left'>
       <div className='otherImgs'>
           <img src={data.url} alt='' className='proimg'></img>
            <img src={data.url} alt='' className='proimg'></img>
             <img src={data.url} alt='' className='proimg'></img>
              <img src={data.url} alt='' className='proimg'></img>
         </div>  
         <div className='ProductDetali-img'>
          <img src={data.url} alt=''></img>
          <div className='ProductDetail-btns'>
             <button className='ProductDetail-btn' onClick={addToCart}><FaShoppingCart/> Add To Cart</button>
             <button className='ProductDetail-btn'><AiFillThunderbolt/> Buy Now</button>
          </div>
         </div>    
       </div>
        
        <div className='ProductsDetalis-right'>
           <p className='ProductName'>{data.ProductName}</p>
           <div className='ratingreviews'>
           <div className='stars'>
             {data.reviews} Rating & {data.rating}
           </div>
           </div>
            <p className='Price'>{data.Sellingprice}</p>
            <p className='packfee'>+ ₹69 secured packing fee</p>
            <p className='avilableoff'> Available Offer</p>
            <div className='offers'>
              <img src="" about='' height={20}></img><img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}></img>
            <b>Bank Offer</b>5% Cashback On Flipkart Axis Bank CartT&C
            </div>

             <div className='offers'>
              <img src="" about='' height={20}></img><img
           src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}></img>
             <b>Partner Offer </b> Purchase now & get a surprise cashback coupon
          for January / February 2023Know More
            </div>

            <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <b>Partner Offer </b> Sign up for Flipkart Pay Later and get Flipkart
          Gift Card worth up to ₹500*Know More
            </div>
            
             <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90"
            alt=""
            height={20}
          />
          <b> EMI starting </b> from ₹832/monthView Plans
        </div>

              <div className="descriptions">
                <div className='Colors'>
                  <p className='Color'>Color</p>
                  <div className='colorImgs'>
                    <img src={data.url} about=''></img>
                    <img src={data.url} about=''></img>
                    <img src={data.url} about=''></img>
                </div>
              </div> 

                 <div className='highlights'>
                       <p  className='highlights-title'>Highlights</p>
                       <ul className='highlight'>
                          <li className='highlight-item'>{data.Descripition}</li>
                          <li className='highlight-item'>{data.Display}</li>
                          <li className='highlight-item'>{data.Camera}</li>
                          <li className='highlight-item'>{data.Battery}</li>
                          <li className='highlight-item'>{data.Proccessor}</li>
                       </ul>
                   </div>
               
              </div>

         <div className='RatingsAndReviews'>
          <p className='RatingAndReviews-title'> rating & Reviews</p>
          <div className='RatingAndReviews-container'>

              <div className='RatingAndReviews-stars'>
                 <p className='RatingAndReviews-reviews'> {data.rating} <AiFillStar/></p>
                 <p className='RatingAndReviews-ratings'>
                  {data.rating} Rating & {data.reviews} Reviews
                 </p>
              </div>
               
               <ul className='RatingAndReviews-charts'>
                   <li>
                    <p className='star'>5</p>
                    <div className='bar'>
                        <div className='innerbar' style={{width:"80%"}}> </div>
                    </div>
                    
                     </li>

                      <li>
                    <p className='star'>4</p>
                    <div className='bar'>
                         <div className='innerbar' style={{width:"50%"}}> </div>
                    </div>
                   
                     </li>

                      <li>
                    <p className='star'>3</p>
                    <div className='bar'>
                        <div className='innerbar' style={{width:"33.6%"}}> </div>
                    </div>
                    
                     </li>

                      <li>
                    <p className='star'>2</p>
                    <div className='bar'>
                        <div className='innerbar' style={{width:"29.6%"}}> </div>
                    
                    </div>
                    
                     
                     </li>

                      <li>
                    <p className='star'>1</p>
                    <div className='bar'>
                         <div className='innerbar' style={{width:"10%"}}> </div>
                    </div>
                    
                     </li>
               </ul>

          </div>
        </div>       

        </div>
    </div>
  )
}

export default ProductsDetalis
