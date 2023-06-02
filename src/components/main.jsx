import React from 'react';
import SocialButtons from './social-buttons';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            let's build something together
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#5651e5]'>Alejandro</span>
          </h1>
          <h1 className='py-4 text-gray-700'>A Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            As a software engineer, I have extensive experience working with
            popular frameworks such as Spring and Angular. I have successfully
            developed and deployed robust web applications utilizing these
            technologies. With Spring, I have leveraged its powerful features to
            build scalable and efficient back-end systems, effectively managing
            data and implementing business logic. In conjunction with Angular, I
            have crafted dynamic and responsive user interfaces, providing
            seamless user experiences across multiple devices.
          </p>
          <SocialButtons pad={'6'} scale={'110'} customClass={'flex items-center justify-between max-w-[330px] m-auto py-4'}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
