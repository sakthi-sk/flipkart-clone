import React, { useEffect } from 'react'
import './App.css'
import Home from './Page/Home/Home'
import Products from './Page/Products/Products'
import ProductsDetalis from './Page/ProductsDetalis/ProductsDetalis'
import Cart from './Page/Cart/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './componets/Navbar/Navbar'
import LoginModal from './componets/LoginModal/LoginModal'
import supabase from './supabase'
import { useDispatch } from 'react-redux'
import { setUser } from './slices/UserSlices'


const App = () => {

   const dispatch=useDispatch()

  const getUser= async()=>{
    const {data,error}=await supabase.auth.getSession()
    if(data.session){
    console.log(data.session.user,'login data sakthi')
      dispatch(setUser(data.session.user))
    }
      
    
  }

  useEffect(()=>{
    getUser()
  },[])

   
  return (
     
     
    <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/productdetails/:id' element={<ProductsDetalis/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route  path='/LoginModal' element={<LoginModal/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
