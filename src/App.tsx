import React, { useState, useEffect } from 'react';
import './App.css';
import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { serverModel, Theme } from './interfaces/index';
import { createTheme, rgbToHex, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';

function App(): JSX.Element {
  const [colors, setcolors] = useState<number[]>();

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
      .post<number[]>(fetchUrl, fetchData, { headers })
      .then((res: AxiosResponse<number[]>) => setcolors(res.data));
  }, []);
  //MUI Theme to randomize the colors
  const theme: Theme = createTheme({
    palette: {
      primary: {
        main: rgbToHex('rgb(244, 246, 246)'),
        dark: rgbToHex('rgb(244, 246, 246)'),
      },
      secondary: {
        main: rgbToHex('rgb(244, 246, 246)'),
        dark: rgbToHex('rgb(2244, 246, 246)'),
      },
    },
  });

  console.log(colors);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div className='text-7xl font-bold underline'>Hello world!</div>
      </ThemeProvider>
    </>
  );
}

export default App;
