import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { bookingAPI } from '../../../services/allApi';
import Checkout from '../Checkout';

const SidePanel = ({doctor}) => {

    
      let params=useParams()
  const doctorId=params.id;
  
//   const bookingHandle=async()=>{
//     if(sessionStorage.getItem("token")){
//       const token=sessionStorage.getItem("token")
//       const reqHeader={
//        // "Content-Type":"application/json",
//         "Authorization":`Bearer ${token}`
//       }
//       const result=await bookingAPI(doctorId,reqHeader)
//       console.log(result);
     
//          //const data= await result.json()
//          window.location.href=result.data.url
    
//     }
//   }
    
    
  return (
    <div className='shadow shadow-panelShadow mt-3  lg:p-5 '>
        <div className='flex items-center justify-between'>
            <p className='text_para font-semibold'>Ticket Price</p>
            <span className='font-bold text-headingColor text-[16px] mt-3'>{doctor.ticketPrice} Rs</span>
        </div>

        <div className='mt-[30px]'>
            <p className='text_para font-semibold text-headingColor'>
                Available Time Slots:
            </p>

            <ul className='mt-3'>
            {doctor && doctor.timeSlots && doctor.timeSlots.map((item,index)=>(
                  <li key={index} className='flex items-center justify-between mb-2'>
                  
                  <p className='text-[15px] leading-6 text-textColor font-semibold '>
                      {item}
                  </p>

              </li>
                ))
               }

              
            </ul>

        </div>
        {/* <button onClick={bookingHandle}  className='btn w-full px-2 rounded-md'>Book Appointment</button> */}
        <Checkout doctor={doctor}/>



      

       
    </div>
  )
}

export default SidePanel