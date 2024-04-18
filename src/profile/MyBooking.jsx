import React, { useEffect, useState } from 'react'
//import {Row} from 'react-router-dom'
import { getBookingsAPI } from '../../services/allApi'

const MyBooking = () => {

  const [booking,setBooking]=useState([])

  const getAllBookings=async()=>{
    if(sessionStorage.getItem("token")){
      const token=sessionStorage.getItem("token")
      const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result=await getBookingsAPI(reqHeader)
      if(result.status===200){
       setBooking(result.data)
      }else{
        console.log(result)
      }
    }
  }
console.log(booking);
  useEffect(()=>{
    getAllBookings()
  },[])



  return (

    <>
    <div className='text-danger'>My Bookings</div>

    
      {
        booking.map((item)=>(
         <div className=' border-2 border-green-600 w-full'>
           <h2>{item.doctor.name}</h2>
          <p>{item.doctor.timeSlots[1]}</p>
         </div>
         
        ))
      }
   

    </>
  )
}

export default MyBooking