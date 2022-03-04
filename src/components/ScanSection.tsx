import React, { useCallback, useEffect, useState } from 'react';
import { ScanSectionProps } from '../interfaces';
import { Paper, TextField, Typography } from '@material-ui/core';
import logoMain from '../assets/Logogab.png';
import { Search } from '@mui/icons-material';

function ScanSection({ result }: ScanSectionProps): JSX.Element {
  const [analysisResult, setAnalysisResult] = useState<any>();
  const [inputURL, setInputUrl] = useState<string>();
  const [url, setUrl] = useState<any>();
  const virusTotalApiKey = process.env.REACT_APP_API_KEY;
  const analysisData = url?.data?.id;

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

  const optionsAnalysis = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'x-apikey': `${virusTotalApiKey}`,
    },
  };

  const submitData = useCallback((e: { preventDefault: () => void }) => {
    e.preventDefault();
    //  setInputUrl('');
  }, []);

  useEffect(() => {}, [submitData]);

  const analyze = () => {
    fetch('https://www.virustotal.com/api/v3/urls', optionsEncoder)
      .then((response) => response.json())
      .then((response) => setUrl(response))
      .catch((err) => console.error(err));

    fetch(
      'https://www.virustotal.com/api/v3/analyses/' + analysisData,
      optionsAnalysis
    )
      .then((response) => response.json())
      .then((response) => setAnalysisResult(response))
      .catch((err) => console.error(err));
  };

  console.log(url?.data?.id, result, analysisResult);
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
            className=' ml-2 mt-2 active:border-indigo-300'
          />
        </form>
      </div>
      <div className='flex justify-center'>
        {analysisResult ? analysisResult.data.attributes.status : null}
      </div>
    </>
  );
}

export default ScanSection;
