import { BASEURL } from "./BASE_URL"
import { BOOKAPI, commonAPI } from "./commonAPI"




export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASEURL}/user/register`,user,"")
}

//login

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASEURL}/user/login`,user,"")
}

//userProfile

export  const getUserProfile = async(reqHeader) =>{
    return await commonAPI("GET",`${BASEURL}/user/profile`,"",reqHeader)
}

//review add
export const addReviewAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASEURL}/review/add/`,reqBody,reqHeader)
}

//review get
export const getAllReviewAPI = async(id,reqHeader)=>{
    return await commonAPI("GET",`${BASEURL}/review/all/${id}`,"",reqHeader)
}

//get doctors

export const getAllDoctorsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASEURL}/doctor/all`,"",reqHeader)
}

//get one doctor
export const getOneDoctorAPI =async (id,reqHeader )=>{
   return await commonAPI("GET",`${BASEURL}/doctor/${id}`,"",reqHeader);
}
//booking
export const bookingAPI = async(id,reqHeader)=> {
     return await BOOKAPI("POST",`${BASEURL}/booking/${id}`,reqHeader);
 }

 //get booking
 export const getBookingsAPI= async(reqHeader)=>{
     return await commonAPI("GET",`${BASEURL}/user/bookings`,"",reqHeader);
 }


