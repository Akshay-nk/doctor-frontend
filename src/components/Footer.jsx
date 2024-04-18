import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../assets/images/logo.png'

function Footer() {
  return (
    <div>
      <MDBFooter className=' m-3 text-center text-lg-start text-dark '>
      {}

      <section className='mt-3'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={logo} alt="" />
              </h6>
              <p className=''>
              World-class care for everyone. Our health System offers unmatched,
                    expert health care
    
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
              <a href='/doctors' className='text-dark' style={{textDecoration:'none'}}>
                 Find a Doctor
                </a>
              </p>
              <p>
              <a href='/services' className='text-dark' style={{textDecoration:'none'}}>
                  Services
                </a>
              </p>
              <p>
              <a href='/contact' className='text-dark' style={{textDecoration:'none'}}>
                  Contact
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
              <a href='https://react.dev/' className='text-dark' style={{textDecoration:'none'}}>
                  React
                </a>
              </p>
              <p>
              <a href='https://react-bootstrap.github.io/' className='text-dark' style={{textDecoration:'none'}}>
                  React Bootsrap
                </a>
              </p>
              <p>
                <a href='https://bootswatch.com/' className='text-dark' style={{textDecoration:'none'}}>
                  Bootswatch
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <div>
              <div>
              <input className='mb-3 me-2 border rounded' type="text" placeholder='Enter Your Email ID' />
              <button style={{backgroundColor:'orange'}} className='border rounded'>Subscribe</button>
              
              </div>
              <div className=''>
          <a href='/' className='m-4 text-dark'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/' className='m-4 text-dark'>
            <MDBIcon fab icon="twitter" />
          </a>
          
          <a href='/' className='m-4 text-dark '>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/' className='m-4 text-dark'>
            <MDBIcon fab icon="linkedin" />
          </a>
          
        </div>
        </div>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='/' style={{textDecoration:'none'}}>
          medicare.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer