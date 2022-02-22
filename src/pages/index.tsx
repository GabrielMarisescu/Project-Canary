import React from 'react';
import Header from '../components/Header';
import { MainProps } from '../interfaces';

//routing here

function index({ result }: MainProps): JSX.Element {
  return (
    <div>
      <Header result={result} />
    </div>
  );
}

export default index;
