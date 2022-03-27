import React from 'react';

function Footer() {
  return (
    <div className='overflow-hidden text-zinc-800'>
      <footer className='flex w-screen h-36  antialiased   font-serif mt-5 bg-indigo-100'>
        <div className=' ml-20 flex-grow-5 flex justify-center'>
          <div>Github</div>
          <div>LinkedIn</div>
        </div>
      </footer>
      <div className=' flex bg-indigo-100'>
        <hr className='border-gray-400 border-t-1  w-4/5  m-auto  ' />
      </div>
      <p className='prose-xl  flex justify-center bg-indigo-100'>
        Made with React
      </p>
    </div>
  );
}

export default Footer;
