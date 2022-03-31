import React, { useEffect, useRef, useState } from 'react';
import mainProfile from 'assets/Canary.png';
import { TextField } from '@material-ui/core';
import { Search } from '@mui/icons-material';
import { CanonizedUrl } from 'interfaces';
import {
  getCanonizedUrl,
  SortResponseCanonizedUrlData,
} from 'utils/virustotal';
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
      <div className="flex flex-wrap mt-10 mb-5 font-sans antialiased text-center bg-indigo-100 h-128 sm:h-96 lg:h-80 lg:flex-nowrap">
        <div className="flex flex-col justify-center mt-10 ml-5">
          <div className="flex justify-center mb-10 font-bold prose-lg text-center text-zinc-800">
            <p className="mx-5 md:mx-10 lg:mx-20">
              Analyze suspicious domains, IPs and URLs to detect malware.
            </p>
          </div>
          <div className="flex text-zinc-800 prose-md ">
            <p className="mx-5 md:mx-10 lg:mx-20">
              Project Canary is a virus analyzer which will show you whether or
              not your links are safe for use or potentially dangerous using the
              most performant antivirus engines.
            </p>
          </div>
        </div>

        <img
          className="flex justify-center object-contain h-40 m-auto w-80 lg:ml-6 lg:mx-20"
          alt="Project Canary"
          src={mainProfile}
        />
      </div>

      {analysisErr === 'Unable to canonicalize url' && !analysisId ? (
        <div className="flex justify-center">
          <Alert severity="error">Please insert a valid URL</Alert>
        </div>
      ) : (
        <div className="flex justify-center invisible ">
          <Alert severity="error">Please insert a valid URL</Alert>
        </div>
      )}

      <div className="flex justify-center my-10 ml-4 mr-4">
        <form className="flex justify-center w-screen p-1 mt-10 ml-2 border-none outline-none md:w-1/2">
          <TextField
            autoComplete="off"
            type="text"
            name="value"
            inputRef={inputRef}
            placeholder="Scan an URL"
            className="w-full"
          />
          <Search
            type="submit"
            onClick={submitData}
            className="mt-2 ml-2 cursor-pointer active:border-indigo-300"
          />
        </form>
      </div>
    </>
  );
}

export default ScanSection;
