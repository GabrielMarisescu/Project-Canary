import React from 'react';
import { MainProps } from '../interfaces';
import ScanSection from '../components/ScanSection';

//routing here

function index({ result }: MainProps): JSX.Element {
  return (
    <div>
      <ScanSection result={result} />
    </div>
  );
}

export default index;
