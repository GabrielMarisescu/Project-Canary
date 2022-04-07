import { TextField } from '@material-ui/core';
import { Search } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react';
import { CanonizedUrl } from '../interfaces';
import {
  getCanonizedUrl,
  SortResponseCanonizedUrlData,
} from '../utils/virustotal';
import mainProfile from '../assets/Canary.png';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ScanSection(): JSX.Element {
  const [canonizedUrl, setCanonizedUrl] = useState<CanonizedUrl>();
  const inputRef = useRef<any>(null);
  const [analysisId, setAnalysisId] = useState<any>();
  const [analysisErr, setAnalysisErr] = useState<any>();
  let navigate = useNavigate();

  const submitData = (e: any) => {
    // todo: make it obvious for the user that the button is not clickable
    e.preventDefault(); // prevents user from clicking the search button when already searching
    //Using the Ref element to get the value for the canonized Url.
    getCanonizedUrl(inputRef.current?.value).then((res) =>
      setCanonizedUrl(res)
    );
  };

  //Sorts the CanonizedUrl Data
  useEffect(() => {
    if (canonizedUrl) {
      SortResponseCanonizedUrlData(canonizedUrl, setAnalysisId, setAnalysisErr);
    }
  }, [canonizedUrl]);

  // If the result is "queued", it will redo the api call to get the actual result.
  //Enter key event listener
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

    return () => {
      document.removeEventListener('keydown', listener);
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [analysisId]);

  //If it finds the analysisID(after the apicall),it goes to the page where it displays all the data in a  table format
  if (analysisId) {
    navigate(`/results/${analysisId}`);
  }

  return (
    <>
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
          className='w-80 h-40 flex m-auto justify-center lg:ml-6  lg:mx-20 object-contain'
          alt='Project Canary'
          src={mainProfile}
        />
      </div>

      {analysisErr === 'Unable to canonicalize url' && !analysisId ? (
        <div className='flex justify-center'>
          <Alert severity='error'>Please insert a valid URL</Alert>
        </div>
      ) : (
        <div className='justify-center invisible flex '>
          <Alert severity='error'>Please insert a valid URL</Alert>
        </div>
      )}

      <div className='flex justify-center ml-4 mr-4  my-5'>
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
    </>
  );
}

export default ScanSection;
