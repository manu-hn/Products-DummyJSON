import React, { useContext } from 'react';
import PleaseLogin from "../auth/PleaseLogin.js";
import { UserContext } from "../auth/UserContext.js";

const About = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className='w-full flex justify-center my-8 h-[26rem]'>
      <div className='flex flex-col w-2/3 items-center'>

        <h1 className='font-bold'>Welcome to ProductCart</h1>


        <section className='w-2/4 m-6'>
          <p>In this platform, you will find your loved belongings and everything you need. Our goal is to provide you with a seamless shopping experience, offering a wide range of products to meet your preferences and requirements.</p>
        </section>


        <p className='font-semibold text-blue-400'>Thank you for choosing ProductCart. Happy shopping!</p>
        { isLoggedIn || <PleaseLogin />}
      </div>
    </div>
  )
}

export default About