import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import mainProfile from '../assets/profilePic.jpg';
function Header() {
  const [openedMobileHeader, setOpenedMobileHeader] = useState<boolean>(false);

  const OpenMobile = () => {
    setOpenedMobileHeader((prev) => !prev);
    console.log('inverted');
  };
  return (
    <nav className=' flex justify-between h-24 text-lg text-zinc-500 font-bold '>
      <div className='flex mt-10 ml-5'>
        <Avatar
          alt='Gabriel Marisescu'
          src={mainProfile}
          sx={{ width: 56, height: 56 }}
        />
        <p className=' flex self-center  ml-5'>Gabriel Marisescu</p>
      </div>
      <div className=' mt-14 mr-5 ' onClick={OpenMobile}>
        {!openedMobileHeader ? (
          // needs to be created a new component for this css,link to other parts of the app,needs hook

          <div>
            <div className=' space-y-2 tablet:hidden'>
              <div className='w-8 h-0.5 bg-zinc-500 '></div>
              <div className='w-8 h-0.5 bg-zinc-500 '></div>
              <div className='w-8 h-0.5 bg-zinc-500 '></div>
            </div>
            <div className='hidden  tablet:flex'>test(needs to be done)</div>
          </div>
        ) : (
          // needs to be created a new component for this css
          <div className='mt-2'>
            <div className='w-8 h-0.5 bg-zinc-500 rotate-45 '></div>
            <div className='w-8 h-0.5 bg-zinc-500 -rotate-45 '></div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
