import { Avatar } from '@mui/material';
import React from 'react';
import mainProfile from '../assets/Canary.png';

function Header() {
  return (
    <>
      <nav className=' flex justify-center h-24 text-lg text-zinc-500 font-bold '>
        <div className='flex mt-10 ml-5'>
          <Avatar
            alt='Canary Logo'
            src={mainProfile}
            sx={{ width: 56, height: 56 }}
          />
          <p className=' flex self-center ml-5'>Project Canary</p>
        </div>
        <div className=' mt-14 mr-5'></div>
      </nav>
    </>
  );
}
export default Header;
