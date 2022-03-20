import React from 'react';
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import ScanSection from '../components/ScanSection';

//routing here

function index(): JSX.Element {
  return (
    <>
      <Nav />
      <ScanSection />
      <MusicPlayer />
      <Footer />
    </>
  );
}

export default index;
