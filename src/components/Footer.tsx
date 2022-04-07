import React from 'react';
import linkedinLogo from '../assets/linkedInLogo.svg';
import githubLogo from '../assets/githubLogo.svg';

function Footer() {
  return (
    <div className='overflow-hidden text-zinc-800 antialiased invisible  md:visible  h-0 md:h-52 mt-24'>
      <footer className='flex w-screen h-36 mt-5 bg-indigo-100'>
        <div className=' flex-grow-4 flex'>
          <div className='flex flex-col mx-12 justify-center mb-10 text-center'>
            <div className='prose-lg  mx-auto font-bold mt-5'>
              Project Canary
            </div>
            <p className='prose-md text-md text-center'>
              Project Canary uses the VirusTotal API and is actively mantained
              by developers.
            </p>
          </div>
        </div>
        <div className=' flex-grow-2 flex justify-center content-center flex-col'>
          <div className='flex'>
            <a href='https://github.com/GabrielMarisescu/Project-Canary'>
              <img
                className=' object-contain h-16 w-32 mt-4 cursor-pointer'
                alt='github'
                src={githubLogo}
              />
            </a>
            <a href='https://www.linkedin.com/in/gabriel-marisescu/'>
              <img
                className=' object-contain h-16 w-32 mt-4 cursor-pointer'
                alt='linkedin'
                src={linkedinLogo}
              />
            </a>
          </div>
        </div>
      </footer>
      <div className=' flex bg-indigo-100'>
        <hr className='border-gray-400 border-t-1  w-4/5  m-auto mb-2 ' />
      </div>
      <p className='prose-xl  flex justify-center bg-indigo-100'>
        © 2022 Gabriel Marisescu. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
