import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import mainProfile from '../assets/profilePic.jpg';
import DroppedHeader from './DroppedHeader';
import MainHeader from './MainHeader';
function Header() {
  const [openedMobileHeader, setOpenedMobileHeader] = useState<boolean>(false);

  const OpenMobile = () => {
    if (window.innerWidth <= 640) {
      setOpenedMobileHeader((prev) => !prev);
    }
  };
  return (
    <>
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
          {!openedMobileHeader ? <MainHeader /> : <DroppedHeader />}
        </div>
      </nav>

      {openedMobileHeader ? (
        <div className=' mt-24 tablet:hidden'>
          <p className=' prose-h3:'> Home </p>
          <p className=' prose-h3:'> Link Analysis </p>
        </div>
      ) : null}
    </>
  );
}
export default Header;
