import React, { useState, useEffect } from 'react';
import './App.css';
import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { serverModel } from './interfaces/index';
function App(): JSX.Element {
  const [data, setData] = useState<number[][] | null>(null);
  //This will fetch the random color pallette

  useEffect(() => {
    const fetchUrl: string = 'http://colormind.io/api/';
    const fetchData: serverModel = {
      model: 'default',
    };
    const headers: AxiosRequestHeaders = {
      'Content-Type': 'text/plain',
    };
    axios
      .post<number[][] | null>(fetchUrl, fetchData, { headers })
      .then((res: AxiosResponse<number[][] | null>) => setData(res.data));
  }, []);
  //This will fetch the random color pallette
  return (
    <>
      <div className='text-7xl font-bold underline'>Hello world!</div>
      <div>Hello world!</div>
    </>
  );
}

export default App;
