import React, { useState } from 'react'
import signup from '../assets/images/signup.gif'
import profile from '../assets/images/doctor-img02.png'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../../services/allApi'

const Signup = () => {

  const [selectedFile, setSelectedFile] = useState(null)
  const [url, setUrl] = useState("")
 const navigate=useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
   
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0]

    console.log(file);
  }


  const handleRegister = async (e)=>{
    e.preventDefault()
    const {name,email,password,gender}=formData

    if( !name || !email || !password || !gender){
      alert("please fill the missing fields")
    }else{
      const result = await registerAPI(formData)
      console.log(result);
      if(result.status===200){
        console.log(result);
        alert(`${result.data.name} has registered successfully`)
      setFormData({
        name:"",email:"",password:"",gender:""
      })
      navigate('/login')
      }else{
        alert(result.response.data)
        console.log(result);
      }
    }
  }

 

  console.log(formData);

  return (
    <section>
      <div className='mx-auto max-w-[1100px] '>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* image */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signup} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>

          {/* form */}
          <div className='rounded-l-lg lg:pl-14 '>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-5'>
              Create an <span className='text-primaryColor'>Account</span>
            </h3>

            <form action="" >

              <div className='flex items-center gap-3'>
                <label>
                  <input type="file" id='customFile' onChange={handleFileChange} style={{ display: 'none' }} />
                  <img width={'70px'} height={'200px'} className='ml-5 rounded-full' src={profile} alt="" />
                </label>


              </div>

              <div className='mb-3 p-3'>
                <input type="text" className='form-control'
                  placeholder='Full Name' name='name' value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className='mb-3 p-3'>
                <input type="email" className='form-control'
                  placeholder=' Email' name='email' value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className='mb-3 p-3'>
                <input type="password" className='form-control'
                  placeholder=' Password' name='password' value={formData.password} onChange={handleInputChange} required />
              </div>

              <div className='mb-3 flex items-center justify-between'>
              
        
                <label htmlFor="" className='text-headingColor text-[16px] leading-7 font-bold '>
                  Gender
                  <select name="gender" value={formData.gender} onChange={handleInputChange} id="" className='font-semibold text-[15px] focus:outline-none'>
                    <option value="">select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className='mb-3 p-3'>
                <button type='submit' onClick={handleRegister} className=' rounded-lg form-control bg-primaryColor text-black '>Register</button>
              </div>

              <p className='text-textColor text-center'>
                Already have an account? <Link to={'/login'} className='text-primaryColor' >Login
                </Link>
              </p>




            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Signup