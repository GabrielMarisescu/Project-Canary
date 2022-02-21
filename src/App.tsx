import React, { useState, useEffect } from 'react';
import './App.css';
import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { serverModel } from './interfaces/index';
import Header from './components/Header';

function App(): JSX.Element {
  const [colors, setcolors] = useState<any>();

  //This will fetch the random color pallette
  useEffect(() => {
    const fetchUrl: string = 'http://colormind.io/api/';
    const fetchData: serverModel = {
      model: 'ui',
    };
    const headers: AxiosRequestHeaders = {
      'Content-Type': 'text/plain',
    };

    axios
      .post<any>(fetchUrl, fetchData, { headers })
      .then((res: AxiosResponse<any>) => setcolors(res.data));
  }, []);

  console.log(colors);
  // need to do a load component while the data is being retrieved and sent to the components
  return (
    <>
      <Header colors={colors} />
      <div className='text-7xl font-bold underline'>Hello world!</div>
    </>
  );
}

export default App;
