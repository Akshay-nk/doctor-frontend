import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import signup from '../assets/images/loginp.gif'
import { loginAPI } from '../../services/allApi'

const Login = () => {

  const [formData,setFormData]=useState({
    email:"",password:""
  })

  const navigate=useNavigate()

  const handlelogin =async(e)=>{
    e.preventDefault()
    const {email,password}=formData
  
    if(  !email || !password){
      alert("please fill the missing fields")
    }
    else{
      const result=await loginAPI(formData)
      console.log(result)
      if(result.status===200){
        console.log(result)
        //sessionstorage for existing user and token
        sessionStorage.setItem('exisitingUser',JSON.stringify(result.data.exisitingUser))
        sessionStorage.setItem('token',result.data.token)
        sessionStorage.setItem('role',result.data.userRole)
  
        setFormData({
          email:"",password:""
        })
        navigate('/redirect')
      }
      else{
        alert(result.response.data)
        console.log(result);
      }
    }
  
    }

  


  

  return (
   <section className='px-5 lg:px-0'>
    <div className='w-full max-w-[1100px] mx-auto rounded-lg  md:p-10  '>
      <div className='grid grid-cols-1 lg:grid-cols-2'>

      <div className='hidden lg:block bg-primaryColor rounded-l-lg m-5'>
            <figure className='rounded-l-lg'>
              <img src={signup} alt=""  className='w-full rounded-l-lg'/>
            </figure>
           </div>
      

      <form className='py-4 md:py-0 m-5' action="">
      <h3 className=' text-[22px] leading-9 font-bold mb-5 '>
        Hello! <span className='text-primaryColor'> Welcome</span>
      </h3>
        <div className='mb-5'>
          <input type="email" className='form-control' onChange={e=>setFormData({...formData,email:e.target.value})} 
          placeholder='Enter Your Email' name='email'/>
          </div>    
          <div className='mb-5'>
          <input type="password" className='form-control' onChange={e=>setFormData({...formData,password:e.target.value})} 
          placeholder='Enter Your Password' name='psd'/>
          </div> 
           
           <div className='mb-3'>
            <button type='submit' onClick={handlelogin} className=' rounded-lg form-control bg-primaryColor text-black '>Login</button>
           </div>

           <p className='text-textColor text-center'>
            Don&apos;t have an account? <Link to={'/register'} className='text-primaryColor' >Register
            </Link>
           </p>

      </form>

      </div>
    </div>

   </section>
  )
}

export default Login