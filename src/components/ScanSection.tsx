import { TextField } from '@material-ui/core';
import { Search } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useEffect, useRef, useState } from 'react';
import { AnalysisResult, CanonizedUrl } from '../interfaces';
import {
  getCanonizedUrl,
  getResults,
  SortResponseCanonizedUrlData,
} from '../utils/virustotal';
import Header from './Header';
import mainProfile from '../assets/Canary.png';
import { Alert } from '@mui/material';

function ScanSection(): JSX.Element {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult>();
  const [canonizedUrl, setCanonizedUrl] = useState<CanonizedUrl>();
  const callStatus: string = analysisResult?.data?.attributes?.status!;
  const inputRef = useRef<any>(null);
  const [analysisId, setAnalysisId] = useState<any>();
  const [analysisErr, setAnalysisErr] = useState<any>();

  const submitData = (e: any) => {
    // todo: make it obvious for the user that the button is not clickable
    e.preventDefault(); // prevents user from clicking the search button when already searching
    //Using the Ref element to get the value for the canonized Url.
    getCanonizedUrl(inputRef.current?.value).then((res) =>
      setCanonizedUrl(res)
    );
  };

  useEffect(() => {
    if (canonizedUrl) {
      SortResponseCanonizedUrlData(canonizedUrl, setAnalysisId, setAnalysisErr);
      getResults(analysisId).then((res) => setAnalysisResult(res));
    }
  }, [analysisId, canonizedUrl]);
  // If the result is "queued", it will redo the api call to get the actual result + enter listener
  useEffect(() => {
    let intervalID: NodeJS.Timer;
    const listener = (event: any) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        getCanonizedUrl(inputRef.current?.value).then((res) =>
          setCanonizedUrl(res)
        );
      }
    };
    document.addEventListener('keydown', listener);
    if (callStatus === 'queued') {
      intervalID = setInterval(() => {
        getResults(analysisId).then((res) => setAnalysisResult(res));
      }, 4000);
    }
    return () => {
      document.removeEventListener('keydown', listener);
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [analysisId, callStatus, canonizedUrl]);

  return (
    <>
      {analysisResult?.data?.attributes?.status === 'queued' ? (
        <LinearProgress />
      ) : null}
      <Header />
      <div className='mb-5 flex mt-10  bg-indigo-100 h-128 sm:h-96 lg:h-80 lg:flex-nowrap flex-wrap text-center antialiased font-sans'>
        <div className='ml-5  flex flex-col  mt-10 justify-center'>
          <div className='flex  text-zinc-800 prose-lg font-bold mb-10 text-center justify-center'>
            <p className='mx-5 md:mx-10 lg:mx-20'>
              Analyze suspicious domains, IPs and URLs to detect malware.
            </p>
          </div>
          <div className='flex  text-zinc-800 prose-md '>
            <p className='mx-5 md:mx-10 lg:mx-20'>
              Project Canary is a virus analyzer which will show you whether or
              not your links are safe for use or potentially dangerous using the
              most performant antivirus engines.
            </p>
          </div>
        </div>

        <img
          className='w-96 h-48 flex m-auto justify-center lg:ml-6  lg:mx-20 object-contain'
          alt='Project Canary'
          src={mainProfile}
        />
      </div>

      {analysisErr ? (
        <div className='flex justify-center'>
          <Alert severity='error'>Please insert a valid URL</Alert>
        </div>
      ) : null}

      <div className='flex justify-center ml-4 mr-4 '>
        <form className='mt-10 w-screen md:w-1/2 p-1 ml-2 border-none outline-none flex justify-center'>
          <TextField
            autoComplete='off'
            type='text'
            name='value'
            inputRef={inputRef}
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
