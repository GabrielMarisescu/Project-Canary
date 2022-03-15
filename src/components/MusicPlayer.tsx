import React from 'react';
import { MusicPlayerProps } from '../interfaces';
import AudioPlayer from 'material-ui-audio-player';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function MusicPlayer({ result }: MusicPlayerProps) {
  const src = [
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
  ];
  console.log(result);
  return (
    <>
      <div className='mt-10  w-1/2 m-auto justify-center text-center hidden md:flex'>
        <MusicNoteIcon className='mt-1' />
        <MusicNoteIcon className='ml-5 mr-5 mt-1' />
        <p className='prose-md md:prose-lg'>
          Listen to some futuristic tunes. :D
        </p>
        <MusicNoteIcon className='ml-5 mr-5 mt-1' />
        <MusicNoteIcon className='mt-1' />
      </div>
      <div className='mt-14 w-1/2 m-auto'>
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
