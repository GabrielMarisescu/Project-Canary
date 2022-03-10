import React, { useCallback, useEffect, useState } from 'react';
import { AnalysisResult, CanonizedUrl, ScanSectionProps } from '../interfaces';
import { Paper, TextField, Typography } from '@material-ui/core';
import logoMain from '../assets/Logogab.png';
import { Search } from '@mui/icons-material';

function ScanSection({ result }: ScanSectionProps): JSX.Element {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult>();
  const [inputURL, setInputUrl] = useState<string>();
  const [canonizedUrl, setCanonizedUrl] = useState<CanonizedUrl>();
  const virusTotalApiKey = process.env.REACT_APP_API_KEY;
  const analysisData: string = canonizedUrl?.data?.id!;
  const callStatus: string = analysisResult?.data?.attributes?.status!;

  const submitData = async (e: any) => {
    e.preventDefault();
    getResults();
  };
  //Data Payload for the API calls

  const getResults = useCallback(() => {
    const optionsAnalysis = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'x-apikey': `${virusTotalApiKey}`,
      },
    };
    if (analysisData) {
      fetch(
        'https://www.virustotal.com/api/v3/analyses/' + analysisData,
        optionsAnalysis
      )
        .then((response) => response.json())
        .then((response) => setAnalysisResult(response))
        .catch((err) => console.error(err));
    }
  }, [analysisData, virusTotalApiKey]);

  const getCanonizedUrl = useCallback(() => {
    const optionsEncoder = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'x-apikey': `${virusTotalApiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        url: `${inputURL}`,
      }),
    };
    if (inputURL) {
      fetch('https://www.virustotal.com/api/v3/urls', optionsEncoder)
        .then((response) => response.json())
        .then((response) => setCanonizedUrl(response))
        .catch((err) => console.error(err));
    }
  }, [inputURL, virusTotalApiKey]);

  //Get the Canonized URL  necessary to make the API calls that tells you if an URL is dangerous.
  useEffect(() => {
    getCanonizedUrl();
  }, [getCanonizedUrl, inputURL]);

  // Time for the
  useEffect(() => {
    let intervalID: NodeJS.Timer;
    const listener = (event: any) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        console.log('Enter key was pressed. Run your function.');
        event.preventDefault();
        getResults();
      }
    };
    document.addEventListener('keydown', listener);
    if (callStatus === 'queued') {
      intervalID = setInterval(() => {
        getResults();
      }, 4000);
    }
    return () => {
      document.removeEventListener('keydown', listener);
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [callStatus, getResults]);

  console.log(canonizedUrl?.data?.id, result, analysisResult);
  //bg gradient can be made dynamic thru the colormind api or the colors of the logo
  return (
    <>
      <Paper variant='elevation' className='mb-5'>
        <div className='flex mt-10 justify-center  bg-gray-50'>
          <img
            src={logoMain}
            alt='main logo'
            className='w-32 md:w-40 mb-1 mt-5'
          />
        </div>
      </Paper>

      <div className=' mb-2 ml-4 mr-4'>
        <Typography
          variant='h5'
          className='flex important justify-center  md:text-lg antialiased font-normal'
        >
          Analyze suspicious URLs to detect malware
        </Typography>
      </div>
      <div className='flex justify-center ml-4 mr-4'>
        <form className='mt-20 w-screen md:w-1/2 p-1 ml-2 border-none outline-none flex justify-center'>
          <TextField
            autoComplete='off'
            type='text'
            name='value'
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder='Scan an URL'
            className='w-full'
          />
          <Search
            type='submit'
            onClick={submitData}
            className=' ml-2 mt-2 active:border-indigo-300 cursor-pointer'
          />
        </form>
      </div>
      <div className='flex justify-center'>
        {analysisResult
          ? 'Your Search is ' + analysisResult.data?.attributes?.status
          : null}
      </div>

      <div className='flex justify-center'>
        <div>
          {analysisResult
            ? 'Harmless: ' + analysisResult.data?.attributes?.stats?.harmless
            : null}
        </div>
        <div>
          {analysisResult
            ? '  Malicious: ' +
              analysisResult.data?.attributes?.stats?.malicious
            : null}
        </div>
      </div>
    </>
  );
}

export default ScanSection;
