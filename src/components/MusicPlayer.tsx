import React, { useEffect, useState } from 'react';
import { MusicPlayerProps } from '../interfaces';
import AudioPlayer from 'material-ui-audio-player';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { rgbToHex } from '../utils/utils';

function MusicPlayer({ result }: any) {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const src = [
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  ];
  useEffect(() => {
    setColor1(rgbToHex(result?.result[1]));
    setColor2(rgbToHex(result?.result[4]));
  }, [result]);

  console.log(result, color1, color2);

  return (
    <>
      <div className='mt-10  m-auto justify-center text-center hidden md:flex'>
        <MusicNoteIcon className='mt-1' />
        <MusicNoteIcon className='ml-5 mr-5 mt-1' />
        <div className='prose-md md:prose-lg flex'>
          <p
            style={{
              color: `${color1}`,
              marginTop: 0,
            }}
          >
            LISTEN TO SO
          </p>
          <p
            style={{
              color: `${color2}`,
              marginTop: 0,
            }}
          >
            ME TUNES :D
          </p>
          &nbsp;
        </div>
        <MusicNoteIcon className='ml-5 mr-5 mt-1' />
        <MusicNoteIcon className='mt-1' />
      </div>
      <div className='mt-14 m-auto w-full md:w-1/2'>
        <AudioPlayer
          src={src}
          elevation={2}
          variation='primary'
          loop={true}
          //OnPlayer= {changeColors()}
        />
      </div>
    </>
  );
}

export default MusicPlayer;
