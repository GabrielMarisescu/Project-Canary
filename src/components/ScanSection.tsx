import React, { useState } from 'react';
import { ScanSectionProps } from '../interfaces';
import { Paper, Typography } from '@material-ui/core';
import logoMain from '../assets/Logogab.png';

function ScanSection({ result }: ScanSectionProps): JSX.Element {
  const [analysisResult, setAnalysisResult] = useState<any>();
  const [inputURL, setInputUrl] = useState<string>();
  const [url, setUrl] = useState<any>();
  const virusTotalApiKey = process.env.REACT_APP_API_KEY;

  const submitData = (e: { preventDefault: () => void }) => {
    analyze();
    e.preventDefault();
    setInputUrl('');
  };

  const analyze = () => {
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

    if (inputURL) {
      fetch('https://www.virustotal.com/api/v3/urls', optionsEncoder)
        .then((response) => response.json())
        .then((response) => setUrl(response))
        .catch((err) => console.error(err));
    }

    if (analysisData) {
      fetch(
        'https://www.virustotal.com/api/v3/analyses/' + analysisData,
        optionsAnalysis
      )
        .then((response) => response.json())
        .then((response) => setAnalysisResult(response))
        .catch((err) => console.error(err));
    }
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

      <Typography variant='h5' className='flex important justify-center  mb-10'>
        Analyze suspicious URLs to detect malware.
      </Typography>

      <form className='border-2 border-indigo-100 mt-20 w-screen md:w-1/2 inline-flex'>
        <input
          type='text'
          name='value'
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder='Write a link here'
          className='w-full'
        />
        <button type='submit' onClick={submitData} className='hidden' />
      </form>
    </>
  );
}

export default ScanSection;
