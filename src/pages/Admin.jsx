import React, { useContext, useEffect, useState } from 'react'
import DoctorCard from '../components/doctors/DoctorCard'
import { getDoctorResponseContext } from '../components/context/ContextShare'
import { getAllDoctorsAPI } from '../../services/allApi'


const Admin = () => {
  const {getDoctorResponse,setgetDoctorResponse}=useContext(getDoctorResponseContext)


  const getAllDoctors=async()=>{
   if(sessionStorage.getItem("token")){
     const token=sessionStorage.getItem("token")
     const reqHeader={
       "Content-Type":"application/json",
       "Authorization":`Bearer ${token}`
     }
     const result=await getAllDoctorsAPI(reqHeader)
     if(result.status===200){
      // setAllDoctors(result.data)
       setgetDoctorResponse(result.data)
     }else{
       console.log(result)
     }
   }
 }

 useEffect(()=>{
   getAllDoctors()
 },[])

  return (
    <>
    <section className="bg-[#fff9ea]">
<div className="container text—center" >

<h2 className='text-center font-bold'>Doctors</h2>
 </div>
 </section>

 <section>
  <div className='container'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
     gap-5 lg:grid-cols-4 '>
        {getDoctorResponse.map((doctor)=>
        <DoctorCard key={doctor._id} doctor={doctor} insideAdmin/>)}
     </div>

  </div>
 </section>

    
    </>
  )
}

export default Admin