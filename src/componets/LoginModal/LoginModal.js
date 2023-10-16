import React, { useState } from 'react'
import './LoginModal.css'
import {RxCross2} from 'react-icons/rx'
import supabase from '../../supabase'
import { useDispatch } from 'react-redux'
import { setUser } from '../../slices/UserSlices'
// import { createClient } from '@supabase/supabase-js'

const LoginModal = ({isOpen,setIsOpen}) => {
  // const supabase = createClient('https://jyzqpomdjykcztynatas.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5enFwb21kanlrY3p0eW5hdGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMTQyNTksImV4cCI6MjAxMjU5MDI1OX0.CwhZbX4MEe2b7y1sTcNR7ebIShopWIeKZiknGIxigBU')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [loginType,setLoginType]=useState(true)

    const dispatch=useDispatch()

    const signup = async ()=>{
        console.log('sign');
        const {data,error}= await supabase.auth.signUp({
            email,
            password,
        });
        console.log(data,error);
        if(data.user){
          alert('Account created. please verify your emali.')
          return;
        }
    }

    const login = async ()=>{
         console.log('login');
        const {data,error}= await supabase.auth.signInWithPassword({
            email,
            password, 
        });
        console.log(data,error);
        if(error){
          alert(error?.message)
          return;
        }
        dispatch(setUser(data.user))
          
      

    }

    

  return isOpen ? (
    <div className='overlay'>
     <div className='LoginModel'>
        <div className='left'>
           <div className='left-container'>
           <p className='Login-title'>Login</p>
           <p className='Login-des'>Get access to you Orders, Wishlist and  Recommendations  </p>

           </div>
        </div>
        <div className='right'>
          <input type='email' className='Login-Input' placeholder=' Email' required value={email}  onChange={(e)=> setEmail(e.target.value)}/>

          <input type='password' className='Login-Input' placeholder=' Password' required value={password}  onChange={(e)=> setPassword(e.target.value)}/>

          <p className='termandcon'>
          By continuing, you agree to Flipkart's{''}
          <span style={{color:'blue'}}>Terms of use </span> and
           <span style={{color:'blue'}}>use Privacy policy.</span>{''}
           </p>
           {loginType?(<button className='login-btn' onClick={login} >Login</button>)
           :(<button className='login-btn' onClick={signup} >signup</button>)}



           {loginType?(<p className='login-signup' style={{color:'blue'}} onClick={()=> setLoginType(false)}>
            New to Flipkart? Create an account
           </p>):(<p className='login-signup' style={{color:'blue'}} onClick={()=> setLoginType(true)}>
            Already an user? Login to an account
           </p>)}
          
        </div>
        <div className='close' onClick={()=>setIsOpen(false)}>
          <RxCross2/>
        </div>
     </div>

    </div>
   
  ):<></>
}

export default LoginModal
