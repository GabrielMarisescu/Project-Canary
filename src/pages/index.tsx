import React from 'react';
import Header from '../components/Header';
import { MainProps } from '../interfaces';
import ScanSection from '../components/ScanSection';

//routing here

function index({ result }: MainProps): JSX.Element {
  return (
    <div>
      <Header result={result} />
      <ScanSection />
    </div>
  );
}

export default index;
