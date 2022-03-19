import React from 'react';
import AudioPlayer from 'material-ui-audio-player';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function MusicPlayer() {
  const src = [
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  ];

  return (
    <>
      <div className='mt-10  m-auto justify-center text-center hidden md:flex'>
        <MusicNoteIcon className='mt-1' />
        <MusicNoteIcon className='ml-5 mr-5 mt-1' />
        <div className='prose-md md:prose-lg flex'>test</div>
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
