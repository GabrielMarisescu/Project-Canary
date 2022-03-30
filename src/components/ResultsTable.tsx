import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AnalysisResult } from '../interfaces';
import { getResults, createData } from '../utils/virustotal';
import { LoadingPage } from './Loading';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ResultsTable() {
  //AnalysisResult
  const [analysisResult, setAnalysisResult] = useState<any>();
  const [tableData, setTableData] = useState<any>();
  const [tableDataResult, setTableDataResult] = useState<any>();
  const [tableDataEngineName, setTableDataEngineName] = useState<any>();
  const callStatus: string = analysisResult?.data?.attributes?.status!;
  const { analysisID } = useParams();
  let rows;

  //fetch the data once you get the analysisID param
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

  //sorts the data into something we can use
  useEffect(() => {
    if (callStatus === 'completed' && !tableData) {
      setTableData(Object.values(analysisResult?.data?.attributes.results));
    }

    if (tableData) {
      setTableDataResult(tableData.map((e: any) => e.result));
      setTableDataEngineName(tableData.map((e: any) => e.engine_name));
    }
  }, [analysisResult, callStatus, tableData]);

  //puts all the results data into an array which we can pass to the Table (WILL NEED SORTING)
  if (tableDataEngineName && tableDataResult) {
    rows = tableData?.map((e: any, i: any) =>
      createData(tableDataEngineName[i], tableDataResult[i])
    );
  }

  const showResultData = (arg: any) => {
    if (arg === 'clean') {
      return <div className='text-green-800 font-medium'> {arg}</div>;
    } else if (arg === 'malicious') {
      return <div className='text-red-800 font-medium'> {arg}</div>;
    } else {
      return <div className=' opacity-50 font-medium'> {arg}</div>;
    }
  };

  //TO DO NEED TO REFACTOR THE TABLE INTO AN ANOTHER COMPONENT
  return (
    <>
      {callStatus === 'queued' || !callStatus ? (
        <LoadingPage />
      ) : (
        <>
          <div className='flex my-16  justify-center '>
            <div className='mx-6'>Results for &nbsp;</div>
            <div className='font-bold font-sans text-center'>
              {analysisResult?.meta.url_info.url}
            </div>
          </div>
          <div className=' mx-5 md:mx-36 mt-16'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 200, p: 2 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <span className='font-bold'> EngineName </span>
                    </TableCell>
                    <TableCell align='right'>
                      <span className='font-bold'> Result </span>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map((row: any) => (
                    <TableRow
                      key={row?.EngineName}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {row?.EngineName}
                      </TableCell>
                      <TableCell align='right'>
                        {showResultData(row.Result)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
    </>
  );
}

export default ResultsTable;
