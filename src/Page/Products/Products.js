import React from 'react'
import './Products.css'
import {ProductsData} from '../../ProdutsData'
import { Link } from 'react-router-dom'
import ProductDetailCard  from '../../componets/ProductDetaliCard/ProductDetailCard'


const Products = () => {
  return (
    <div className='Products'>
       <div className='Products-Filters'>
       <p className='fliter-head'>Filters</p>
       <div className='category'>
           <p className='fliter-categoryHead'>categories</p>
            <div className='fliter-category'>Mobile</div>
       </div>
         
         <div className='price'>
            <p className='priceHead'>Price</p>
            <input type='range' name='' id='' className='pricerange'/>
            <div className='price-input'>
              <input placeholder='0' className='pricebox'/><p>to</p>
               <input placeholder='50000' className='pricebox'/>
            </div>
         </div>
         
         <div className='brand'>
         <p>Brand</p>
          </div>
       </div>

      
          <div className='products-items'>
          <p className='totalresults'>Shoeing 1-{ProductsData.length}of{ProductsData.length} results</p>
            <div className='sortby'>
              <p>sort by</p>
              <ul className='sortitems'>
              <li className='sortitem'> Relevance</li>
              <li className='sortitem'>Popularity</li>
               <li className='sortitem'> Price-Low to High</li>
              <li className='sortitem'> Price -High to Low</li>
              <li className='sortitem'> Newest First</li>


              </ul>
            </div>  
        
            
            <div>
              {ProductsData.map((item,index)=>(
                   <Link key={index} to={`/productdetails/${item.id}`}>
                       <ProductDetailCard Data={item} />
               </Link>
              ))}
            </div>
          </div>    
    </div>
  )
}

export default Products




