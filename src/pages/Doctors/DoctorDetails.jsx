import React, {  useEffect, useState } from 'react'
import doctorimg from '../../assets/images/doctor-img02.png'
import star from '../../assets/images/Star.png'
import DoctorAbout from '../../components/doctors/DoctorAbout'
import Feedback from '../../components/doctors/Feedback'
import SidePanel from '../../components/doctors/SidePanel'
import { useParams } from 'react-router-dom';
import { getOneDoctorAPI } from '../../../services/allApi'




const DoctorDetails = () => {
  const [tab,setTab]=useState("about")
  const [doctor,setDoctor]=useState([])
  
   let params=useParams()
  const id=params.id;
  const getADoctor=async()=>{
    if(sessionStorage.getItem("token")){
      const token=sessionStorage.getItem("token")
      const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result=await getOneDoctorAPI(id,reqHeader)
      if(result.status===200){
       // setAllDoctors(result.data)
        setDoctor(result.data)
      }else{
        console.log(result)
      }
    }
  }

  useEffect(()=>{
    getADoctor()
  },[])

   
 
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto '>
        <div className='grid md:grid-cols-4 gap-[50px] '>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5 '>
              <figure className='max-w-[200px] max-h-[200px] '>
                <img src={doctor.photo} alt="" className='w-full'/>

              </figure>
              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 text-[12px] 
                leading-4 font-semibold rounded '>
{doctor.specialty}                </span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                   {doctor.name}
                </h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] tex-[14px] leading-5 lg:text-[16px]
                  lg:leading-7 font-semibold text-headingColor '>
                    <img src={star} alt="" /> {doctor.avgRating}

                  </span>
                  <span className='tex-[14px] leading-5 lg:text-[16px]
                  lg:leading-7 font-semibold text-headingColor'>
                    ({doctor.totalRating})
                  </span>

                </div>
                <p className='text_para text-[14px] leading-5'> {doctor.hospital}</p>
              </div>


            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff34] '>
              <button onClick={()=>setTab("about")}
              className={`${tab=="about" && "border-b border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                About
              </button>

              <button onClick={()=>setTab("feedback")}
              className={`${tab=="feedback" && "border-b border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                Feedback
              </button>

            </div>

            <div className='mt-3'>
             {
              tab==="about" && <DoctorAbout doctor={doctor}/>
             }
             {
              tab==="feedback" && <Feedback />
             }
            </div>


          </div>

          <div>
            <SidePanel doctor={doctor}/>
          </div>

        </div>

      </div>
    </section>
  )
}

export default DoctorDetails