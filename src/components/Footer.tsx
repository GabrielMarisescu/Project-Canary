import { Link, Typography } from '@mui/material';
import React from 'react';
import { FooterProps } from '../interfaces';

function Footer({ result }: FooterProps) {
  console.log(result);
  return (
    <footer className='bottom-0 fixed w-screen h-1/6 flex-wrap flex justify-around antialiased  bg-gray-100  '>
      <div className=' hidden mt-5 sm:inline-block'>
        <Typography variant='body1' className=''>
          Colorful Analyzer
        </Typography>
        <Typography variant='body2'>
          <Link
            href='https://developers.virustotal.com/reference/overview'
            target='_blank'
            underline='none'
            className='outline-none'
            color='inherit'
          >
            VirusTotal
          </Link>
        </Typography>
        <Typography variant='body2'>
          <Link
            href='http://colormind.io/api-access/'
            target='_blank'
            underline='none'
            className='outline-none'
            color='inherit'
          >
            Colormind
          </Link>
        </Typography>
      </div>
      <div className='mt-5'>
        <Typography variant='body1' className=''>
          Colorful Analyzer
        </Typography>

        <Typography variant='body2'>
          <Link
            href='https://github.com/GabrielMarisescu/Colorful-Analyser'
            target='_blank'
            underline='none'
            className='outline-none'
            color='inherit'
          >
            GitHub
          </Link>
        </Typography>
        <Typography variant='body2'>
          <Link
            href='https://www.linkedin.com/in/gabriel-marisescu/'
            target='_blank'
            underline='none'
            className='outline-none'
            color='inherit'
          >
            LinkedIn
          </Link>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
