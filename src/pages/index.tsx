import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MusicPlayer from '../components/MusicPlayer';
import ScanSection from '../components/ScanSection';

//routing here

function index(): JSX.Element {
  console.log('Hello :D. Have a nice day.');
  return (
    <>
      <Header />
      <ScanSection />
      <MusicPlayer />
      <Footer />
    </>
  );
}

export default index;
