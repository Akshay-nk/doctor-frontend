import React from 'react'
import {Link} from 'react-router-dom'

const Success = () => {
  return (
    <div>
        <h1 className='text-center text-success fw-bolder'>Your Appointment is successful</h1>

       <Link to={'/'}>
       <button className='btn'>Back To Home </button>
       </Link>
    </div>
  )
}

export default Success