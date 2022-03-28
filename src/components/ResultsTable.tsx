import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AnalysisResult } from '../interfaces';
import { getResults } from '../utils/virustotal';
import { LoadingPage } from './Loading';

function ResultsTable() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult>();
  const callStatus: string = analysisResult?.data?.attributes?.status!;
  const { analysisID } = useParams();

  useEffect(() => {
    getResults(analysisID!).then((res) => setAnalysisResult(res));
  }, [analysisID]);
  // If the result is "queued", it will redo the api call to get the actual result.
  //Enter key event listener
  useEffect(() => {
    let intervalID: NodeJS.Timer;

    if (callStatus === 'queued') {
      intervalID = setInterval(() => {
        getResults(analysisID!).then((res) => setAnalysisResult(res));
      }, 4000);
    }
    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [callStatus, analysisID]);

  return (
    <>
      {analysisResult?.data?.attributes?.status === 'queued' ? (
        <LoadingPage />
      ) : (
        <div>Results for {analysisResult?.meta.url_info.url}</div>
        //<div>
        //{analysisResult?.data?.attributes?.results.map((data) => {
        // <div>{data.engine_name}</div>;
        // })}
        //  </div>
      )}
    </>
  );
}

export default ResultsTable;
