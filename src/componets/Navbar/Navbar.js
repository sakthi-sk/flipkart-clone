import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {BsCart} from 'react-icons/bs'
import LoginModal from '../LoginModal/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import supabase from '../../supabase'
import { removeUser } from '../../slices/UserSlices'
 
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)

  const dispatch=useDispatch()

  const user=useSelector((state)=>state.userData.user)
  console.log(user);

  useEffect(()=>{
    if(user){
      setIsOpen(false)
    }
  })

  const signOut= async()=>{
    const {error}=await supabase.auth.signOut();
    if(!error){
       dispatch(removeUser())
    }

  }


  return (
    <>
      <div className='navbar-container'> 

          <div className='navbar'>   
            <Link to={"/"}>
            <img src='	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='Flipcartlogo'
             className="navbar-logo"></img>
             
             <p className='explore'>Explore </p>
            </Link>

              <div className='navbar-search'>
                 <input type='text' placeholder='search fro products' className='navbar-searchBox'/>
                 <button className='searchbtn'> <BsSearch id='searchbtn'/></button>
                 </div>
                
                 {user?(<h3 className='navbar-btnh3' onClick={signOut}>@{user?.email.slice(0,10)}</h3>):
                 (<button className='navbar-btn' onClick={()=>setIsOpen(true)}>login</button>)}

                <div className='nacbar-bcs'>
                  <h1> Become a Seller</h1>
               </div>

                  <div className='navbar-more'>
                    <h3>more <i className='moredown '> <MdKeyboardArrowDown/></i></h3>
            
                  </div>

                 <div className='navbar-cart'>
                     <div className='cart-icon'>
                      <BsCart/>
                  </div>
                   <Link to={'/cart'} className='cart'> cart</Link>
              </div>
            
               
          </div>
          <LoginModal isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
      </div>

     
    </>
  )
}

export default Navbar
