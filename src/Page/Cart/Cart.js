import React, { useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import {removeCart} from '../../slices/CartSlice'
import { Link } from 'react-router-dom'
const Cart = () => {
  
  const [active,setActive]=useState(1)

  const dispatch=useDispatch()

   const cartItems=useSelector((state)=>state.cartData.cart)
     const user = useSelector((state) => state.userData.user);
     
    const removeFromCart=(id)=>{
      dispatch(removeCart(id))
    }

  return (
    <div className='Cart'>
       <div className='Cart-tabs'>
            <p className={`flipkart ${active===0 ? "active" :""}`}
            onClick={()=>setActive(0)}> Flipkart</p>

             <p className={`grocery ${active===1 ? "active" :""}`}
            onClick={()=>setActive(1)}> grocery</p>
       </div>

       {
        user?(
          <div className='Cart-items'>
               <div className='Cart-container'>
                {
                  cartItems.map((cart,index)=>(
                    <div className='Cart-item' key={index}> 
                       <div className='Cart-item-left'>
                             <img src={cart?.url} alt='' className='Cart-item--left-img'></img>
                       </div>
                       <div className='Cart-item-right'>
                           <h3 className='Cart-item--right-p'>{cart.Product}</h3>
                           <p>
                            {cart.Display},{cart.Descripition}

                           </p>
                           <p>{cart.Sellingprice}</p>
                           <button className='Cart-item-button' onClick={()=>removeFromCart(cart.id)}>Remove From cart</button>
                       </div>
                    </div>

                  ))
                }
               </div>
        </div>
        ):(
          <div className="Cart-items">
              <div className='CartitemsNull'>
                <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              alt=""
              className="CartitemsNull-img"/>  
                <p className="CartitemsNull-title">Missing Cart items?</p>
            <p className="CartitemsNull-des">
              Login to see the items you added previously
            </p>
            
            <button className="CartitemsNull-btn">Login</button>
              
               
              </div>
        </div>)
       }
    </div>
  )
}

export default Cart
