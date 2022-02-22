import React, { useState, useEffect } from 'react';
import './App.css';
import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { serverModel } from './interfaces/index';
import MainApp from './pages/index';

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

  // need to do a load component while the data is being retrieved and sent to the components
  //can fetch the data here for the tracker or in mainApp directly.
  return (
    <>
      <MainApp colors={colors} />
    </>
  );
}

export default App;
