import React, { createContext, useState } from 'react'

export const getDoctorResponseContext=createContext()
function ContextShare({children}) {

 const [getDoctorResponse,setgetDoctorResponse]=useState([])

  return (
   <>

  <getDoctorResponseContext.Provider value={{getDoctorResponse, setgetDoctorResponse}}>
    {children}
  </getDoctorResponseContext.Provider>

   </>
  )
}

export default ContextShare