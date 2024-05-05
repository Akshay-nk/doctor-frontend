import React from 'react'
import star from '../../assets/images/star.png'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'


const DoctorCard = ({doctor,insideAdmin}) => {

    const{
        name,
        specialty,
        avgRating,
        photo,
        totalrating,
        totalPatient,
        hospital,
        _id
    }=doctor
  return (
    <div className='p-3 lg:p-5'>
       <div>
        <img src={photo} className='w-full' alt="" />
       </div>

       <h2 className='text-[18px]  '>{name}</h2>
       <div className='flex'>
          <span className='bg-[#CCF0F3] mt-3'>{specialty}</span>
          <div className='gap-[6px]'>
            <span className='flex items-center ms-auto mt-3 '>
                <img src={star} alt="" />{avgRating}
            </span>
          </div>
       </div>

      <div className='mt-2'>
        <span className='mt-3'>
            {hospital}
        </span>
        <span>
        <Link to={`/doctors/${_id}`} className='w-[44px] h-[44px] rounded-full border border-solid border-blue-400 mt-[30px] mx-auto flex items-center 
                  justify-center group hover:bg-blue-600'> 
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                 </Link>
                 {
                  insideAdmin &&
                  <button  className='btn btn-outline align-items-right border items-center 
                  justify-center'>DELETE</button>
                 }
        </span>
      </div>

    </div>
  )
}

export default DoctorCard