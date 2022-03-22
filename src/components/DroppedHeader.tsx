import React from 'react';
import HeaderList from './HeaderList';

function DroppedHeader() {
  return (
    <>
      <div className='mt-2 tablet:hidden cursor-pointer'>
        <div className='w-8 h-0.5 bg-zinc-500 rotate-45 '></div>
        <div className='w-8 h-0.5 bg-zinc-500 -rotate-45 '></div>
      </div>

      <HeaderList />
    </>
  );
}

export default DroppedHeader;
