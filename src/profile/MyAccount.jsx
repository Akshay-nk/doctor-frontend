import React, { useContext, useEffect, useState } from 'react'
import userimg from '../assets/images/avatar-icon.png'
//import Mybooking from './Mybooking'
//import Settings from './Settings'
//import userGetProfile from '../../hooks/UseFetchData'
//import { BASE_URL } from '../../../config'
import ProfileSetting from './ProfileSetting'
import { Link, useNavigate } from 'react-router-dom'
import { getUserProfile } from '../../services/allApi'
import MyBooking from './MyBooking'





const MyAccount = () => {

  const [user, setUser] = useState({})
  const navigate=useNavigate()

  const getUser = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getUserProfile(reqHeader)
      if (result.status === 200) {
        setUser(result.data)
      } else {
        console.log(result)
      }
    }
  }

  //console.log(allProjects)
  useEffect(() => {
    getUser()
  }, [])



  const handleLogout = () => {

    sessionStorage.clear()
    navigate("/login")
}

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto d-flex'>
        <div className='grid md:grid-cols-3'>
          <div className='rounded-md'>
            <div className='flex items-center justify-center'>
              <figure className='rounded-full'>
                <img src={userimg} alt="" className='rounded-full' />
              </figure>
            </div>
            <div className='text-center mt-4'>
              <h3>
                {user.name}

              </h3>
              <p>
                {user.email}
              </p>
            </div>
            <div>
              <button className='btn' onClick={handleLogout}>Logout</button>
              <button className='btn' >Delete Account</button>
            </div>
          </div>
        </div>
{/* bookings */}
<div>
                <div>
                 <h2 className='mt-3 mb-3'></h2>
                 <MyBooking/>
                 
                </div>
            </div>


      </div>
    </section>
  )
}

export default MyAccount