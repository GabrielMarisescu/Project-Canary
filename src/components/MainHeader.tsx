import React from 'react';
import HeaderList from './HeaderList';

function MainHeader() {
  return (
    <>
      <div className=' space-y-2 tablet:hidden cursor-pointer'>
        <div className='w-8 h-0.5 bg-zinc-500 '></div>
        <div className='w-8 h-0.5 bg-zinc-500 '></div>
        <div className='w-8 h-0.5 bg-zinc-500 '></div>
      </div>
      <HeaderList />
    </>
  );
}

export default MainHeader;
