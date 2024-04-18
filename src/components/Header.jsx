import React, { useEffect, useRef } from 'react'
import logo from '../assets/images/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import userimg from '../assets/images/avatar-icon.png'
import { BiMenu } from 'react-icons/bi';
import "../app.css";



const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  }

]

const Header = () => {

  const headerRef=useRef(null)
  const menuRef=useRef(null)
  const navigate=useNavigate()

  const handleStickyHeader=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    handleStickyHeader()
    return()=> window.removeEventListener('scroll',handleStickyHeader)
  })

  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

  const profile=()=>{
     navigate('/user/profile')
  }

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>

          <div>
            <img src={logo} alt="" />
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {

                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={navClass =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-primaryColor text-[16px] leading-7 font-[500] hover:text-textColor"
                      }
                      >
                      {link.display}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='flex items-center gap-4'>

            <div className='hidden'>
              <Link to={"/"}>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userimg} alt="" className='w-full rounded-full' />
                </figure>
              </Link>
            </div>
 
      {sessionStorage.getItem("token")? <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userimg} alt="" onClick={profile} className='w-full rounded-full' />
                </figure> : <Link to={'/login'}>
        <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
       </Link>}

       <span className='md:hidden' onClick={toggleMenu}>
        <BiMenu className="w-6 h-6 cursor-pointer"/>
       </span>


          </div>


        </div>
      </div>
    </header>
  )
}

export default Header