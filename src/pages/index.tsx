import React from 'react';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import ScanSection from '../components/ScanSection';

//routing here

function index(): JSX.Element {
  return (
    <>
      <ScanSection />
      <MusicPlayer />
      <Footer />
    </>
  );
}

export default index;
