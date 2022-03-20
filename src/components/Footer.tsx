import React from 'react';

function Footer() {
  return (
    <div className='overflow-hidden'>
      <footer className='flex w-screen h-52  antialiased  bg-black text-white font-serif mt-5 '>
        <div className=' ml-20 flex-grow-5'>
          <div>Gabriel Marisescu </div>
          <div>Description </div>
        </div>

        <div className=' flex-grow-2'>right</div>
      </footer>
      <div className='bg-black flex'>
        <hr className='border-stone-400 border-t-1  w-4/5  m-auto ' />
      </div>

      <p className='prose-xl text-white flex justify-center bg-black'>
        Made by ecc
      </p>
    </div>
  );
}

export default Footer;
