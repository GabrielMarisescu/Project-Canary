import { Avatar } from '@mui/material';
import mainProfile from '../assets/Canary.png';
import { Link } from 'react-router-dom';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

function Header(): EmotionJSX.Element {
  return (
    <>
      <nav className=' flex justify-center h-24 text-lg text-zinc-800 prose-p:font-bold '>
        <Link to='/'>
          <div className='flex mt-10 ml-5'>
            <Avatar
              alt='Canary Logo'
              src={mainProfile}
              sx={{ width: 56, height: 56 }}
            />
            <p className=' flex self-center ml-5' lang='en'>
              Project Canary
            </p>
          </div>
        </Link>
        <div className=' mt-14 mr-5'></div>
      </nav>
    </>
  );
}
export default Header;
