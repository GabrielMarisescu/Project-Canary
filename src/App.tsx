import { Button } from '@mui/material';
import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { LoadingPage } from './components/Loading';
import { serverModel } from './interfaces';
import MainApp from './pages/index';

function App(): JSX.Element {
  const [colors, setColors] = useState<number[]>();
  const [colorsflag, setColorsFlag] = useState(true);

  const changeColors = () => {
    setColorsFlag((prev) => !prev);
  };

  //This will fetch the random color palette
  useEffect(() => {
    const fetchUrl: string = 'http://colormind.io/api/';
    const fetchData: serverModel = {
      model: 'ui',
    };
    const headers: AxiosRequestHeaders = {
      'Content-Type': 'text/plain',
    };

    axios
      .post<AxiosResponse<string, serverModel>, any>(fetchUrl, fetchData, {
        headers,
      })
      .then((res: AxiosResponse<number[]>) => setColors(res.data))
      .catch((err) => console.log(err));
  }, [colorsflag]);

  //can fetch the data here for the tracker or in mainApp directly.
  // Loading Page might need some css changes.
  return (
    <>
      {colors ? (
        <div>
          <Button onClick={changeColors}> ChangeColors</Button>
          <MainApp result={colors} />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default App;
