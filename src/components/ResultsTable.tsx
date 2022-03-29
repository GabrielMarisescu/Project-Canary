import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AnalysisResult } from '../interfaces';
import { getResults } from '../utils/virustotal';
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

  useEffect(() => {
    if (callStatus === 'completed' && !tableData) {
      setTableData(Object.values(analysisResult?.data?.attributes.results));
    }

    if (tableData) {
      setTableDataResult(tableData.map((e: any) => e.result));
      setTableDataEngineName(tableData.map((e: any) => e.engine_name));
    }
  }, [analysisResult, callStatus, tableData]);

  //fetch the data once you get the analysisID param
  useEffect(() => {
    getResults(analysisID!).then((res) => setAnalysisResult(res));
  }, [analysisID]);

  console.log(tableData);
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

  // create an object for the Table it needs to have engine name and category
  function createData(EngineName: any, Result: any) {
    return { EngineName, Result };
  }

  if (tableDataEngineName && tableDataResult) {
    rows = tableData?.map((e: any, i: any) =>
      createData(tableDataEngineName[i], tableDataResult[i])
    );
  }

  return (
    <>
      {callStatus === 'queued' || !callStatus ? (
        <LoadingPage />
      ) : (
        <>
          <div className='flex mt-10 justify-center mb-15'>
            Results for &nbsp;
            <span className='font-bold font-sans'>
              {analysisResult?.meta.url_info.url}
            </span>
          </div>
          <div className=' mx-5 md:mx-24 mt-12'>
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
                      <TableCell align='right'>{row.Result}</TableCell>
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
