import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialButtons = ({ pad, scale, customClass }) => {
  return (
    <div className={`${customClass}`}>
      <div
        className={`rounded-full shadow-lg shadow-gray-400 p-${pad} cursor-pointer hover:scale-${scale} ease-in duration-300`}>
        <FaLinkedinIn />
      </div>
      <div
        className={`rounded-full shadow-lg shadow-gray-400 p-${pad} cursor-pointer hover:scale-${scale} ease-in duration-300`}>
        <FaGithub />
      </div>
      <div
        className={`rounded-full shadow-lg shadow-gray-400 p-${pad} cursor-pointer hover:scale-${scale} ease-in duration-300`}>
        <AiOutlineMail />
      </div>
      <div
        className={`rounded-full shadow-lg shadow-gray-400 p-${pad} cursor-pointer hover:scale-${scale} ease-in duration-300`}>
        <BsFillPersonLinesFill />
      </div>
    </div>
  );
};

export default SocialButtons;
