import React, { useEffect, useState } from 'react'

import avatar from '../../assets/images/avatar-icon.png'
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'
import { getAllReviewAPI } from '../../../services/allApi'
import { useParams } from 'react-router-dom'


const Feedback = () => {

const [feedbackForm,setFeedbackForm]=useState(false)
const [review,setReview]=useState([])

let params=useParams()
  const doctor=params.id;
  console.log(doctor);

const getAllReviews=async()=>{
  if(sessionStorage.getItem("token")){
    const token=sessionStorage.getItem("token")

    const reqBody = { doctor: doctor };
    console.log("heyrequest", reqBody);
    
    const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result=await getAllReviewAPI(reqBody,reqHeader)
    if(result.status===200){
      setReview(result.data)
    }else{
      console.log(result)
    }
  }
}

//console.log(allProjects)
useEffect(()=>{
 getAllReviews()
},[])


  return (
    
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] '>
          All Services

        </h4>
      
        {review?.length>0?review.map((review,index)=> (<div  key={index} className='flex justify-between gap-10 mb-[30px] '>
        <div className='flex gap-3'>
          <figure className='w-10 h-10 rounded-full'>
            <img src={avatar} alt="" />

          </figure>
        <div className='flex flex-col'>
            <h5 className='font-bold text-primaryColor'>
              Ali Ahmed
            </h5>
            <p className='text-textColor text-[12px]'>
              {review.createdAt}
            </p>
            <p className='text_para mt-3 font-medium text-[14px]'> 
                {review.reviewText}
            </p>
          </div>

        </div>

        <div className='flex gap-1'>
          {
            [...Array(review.rating).keys()].map((_,index)=>(
              <AiFillStar key={index} color="#0067FF"/>
            ))
          }

        </div>

      </div>)):<p>No reviews</p>
          }

      </div>
  
    {!feedbackForm &&  <div className='text-center' >
    <button className='btn' onClick={()=>setFeedbackForm(true)}>Give Feedback</button>

  </div>}

{feedbackForm && <FeedbackForm form={setFeedbackForm} />}

    </div>
  )
}

export default Feedback