import React from 'react'
import aboutimg from '../assets/images/about.png';
import abcard from '../assets/images/about-card.png'
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section>
        <div className='container'>
        <div className='flex justify-between flex-col lg:flex-row'>

            <div className='relative w-3/4 lg:w-1/2 xl:-w-[770px] z-10 order-2 lg:order-1 '>
                <img src={aboutimg} alt="" />
                <div className='absolute z-20 bottom-4 '>
                    <img src={abcard} alt="" />

                </div>
            </div>

            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2  ml-9'>
                <h2 className='heading'> Proud to be one of the nations best</h2>
                <p className='text_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam eveniet suscipit tempore non eius, aliquam reiciendis ad, excepturi exercitationem natus, cum dolorum officiis tempora. Sequi quis doloribus totam suscipit!</p>
                <p className='text_para mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quasi mollitia modi voluptatem qui tempore quibusdam nisi sed, consequatur recusandae similique alias explicabo debitis, aut rerum sit excepturi aspernatur unde!</p>

                <Link to={'/'}>
                    <button className='btn'>Learn More</button> 

                </Link>
            </div>

        </div>
        </div>
    </section>
  )
}

export default About