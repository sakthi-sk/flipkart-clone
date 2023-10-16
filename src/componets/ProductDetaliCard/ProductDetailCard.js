import React from 'react'
import './ProductDetaliCard.css'

const ProductDetailCard = ({Data}) => {
  return (
    <div className='productDetaliCart'>
        <div className='ProductDetailCard-Img'>
           <img src={Data.url}></img>
        </div>
        <div className='productDetaliCart-details'>
        <p className='ProductDetailCard-name'>{Data.Product}</p>
        <div className='ratingAndreviews'>
           <div className='stars' >{Data.rating} </div>
           <p className='rating'>
              {Data.rating}Rating & {Data.reviews} Reviews 
           </p>
        </div>


            
            <ul className='ProductDetailCard-Productdetails'>
                <li className='ProductDetaliCart-detali'>{Data.Descripition}</li>
                <li className='ProductDetaliCart-detali'>{Data.Display}</li>
                <li className='ProductDetaliCart-detali'>{Data.Camera}</li>
                <li className='ProductDetaliCart-detali'>{Data.Proccessor}</li>
            </ul>
        </div>

        <div className='ProductDetailCard-PriceandDelivery'> 
                <div className='pricecontainer'>
                      <p className='productCard-price'>{Data.Sellingprice}</p>
                       <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            height={21}
            alt=""/>
                
               
                </div>

                 <p className='freedel'>Free Delivery</p>

                <p className="discount">
          Upto <b>17,500</b> off on Exchange No Cost EMI from 23,317/month
        </p>
        </div>
    </div>
  )
}

export default ProductDetailCard