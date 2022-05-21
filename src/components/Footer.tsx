import linkedinLogo from '../assets/linkedInLogo.svg';
import githubLogo from '../assets/githubLogo.svg';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

function Footer(): EmotionJSX.Element {
  return (
    <div className='overflow-hidden text-zinc-800 antialiased invisible mt-10  md:visible h-52 bg-indigo-100 lg:h-64 '>
      <footer
        className='flex w-screen h-36 mt-5 bg-indigo-100'
        aria-label='footer'
      >
        <div className=' flex-grow-4 flex'>
          <div className='flex flex-col mx-12 justify-center mb-10 text-center'>
            <div className='prose-lg  mx-auto font-bold mt-5' lang='en'>
              Project Canary
            </div>
            <p className='prose-md text-md text-center' lang='en'>
              Project Canary uses the VirusTotal API and is actively mantained
              by developers.
            </p>
          </div>
        </div>
        <div className=' flex-grow-2 flex justify-center content-center flex-col'>
          <div className='flex'>
            <a
              href='https://github.com/GabrielMarisescu/Project-Canary'
              aria-label='GitHub Link'
            >
              <img
                className=' object-contain h-16 w-32 mt-4 cursor-pointer'
                alt='GitHub Logo'
                src={githubLogo}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/gabriel-marisescu/'
              aria-label='linkedIn Link'
            >
              <img
                className=' object-contain h-16 w-32 mt-4 cursor-pointer'
                alt='linkedIn Logo'
                src={linkedinLogo}
              />
            </a>
          </div>
        </div>
      </footer>
      <div className=' flex bg-indigo-100'>
        <hr className='border-gray-400 border-t-1  w-4/5  m-auto mb-2 ' />
      </div>
      <p className='prose-xl  flex justify-center bg-indigo-100' lang='en'>
        © 2022 Gabriel Marisescu. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
