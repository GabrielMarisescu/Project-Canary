import React from 'react';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import ScanSection from '../components/ScanSection';
import { MainProps } from '../interfaces';

//routing here

function index({ result }: MainProps): JSX.Element {
  return (
    <>
      <ScanSection result={result} />
      <MusicPlayer result={result} />
      <Footer result={result} />
    </>
  );
}

export default index;
