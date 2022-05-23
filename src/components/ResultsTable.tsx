import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { AnalysisResult, filteredTableData } from '../interfaces';
import { getResults, createData } from '../utils/virustotal';
import { LoadingPage } from './Loading';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { goToTop } from '../utils/utils';

function ResultsTable() {
  //AnalysisResult
  const [analysisResult, setAnalysisResult] = useState<any>();
  const [tableData, setTableData] = useState<any>();
  const [tableDataResult, setTableDataResult] = useState<any>();
  const [tableDataEngineName, setTableDataEngineName] = useState<any>();
  const callStatus: string = analysisResult?.data?.attributes?.status!;
  const { analysisID }: Readonly<Params<string>> = useParams();
  let rows;

  goToTop();

  useEffect(() => {
    getResults(analysisID!).then((res) => setAnalysisResult(res));
  }, [analysisID]);

  // Engine needs time to process the link, redo the api all if the element is "queued"
  useEffect(() => {
    let intervalID: NodeJS.Timer;

    if (callStatus === 'queued') {
      intervalID = setInterval(() => {
        getResults(analysisID!).then((res) => setAnalysisResult(res));
      }, 2500);
    }
    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [callStatus, analysisID]);

  useEffect(() => {
    if (callStatus === 'completed' && !tableData) {
      //Refactor
      setTableData(Object.values(analysisResult?.data?.attributes.results));
    }

    if (tableData) {
      setTableDataResult(tableData.map((e: filteredTableData) => e.result));
      setTableDataEngineName(
        tableData.map((e: filteredTableData) => e.engine_name)
      );
    }
  }, [analysisResult, callStatus, tableData]);

  //puts all the results data into an array which we can pass to the Table (WILL NEED REFACTORING)
  if (tableDataEngineName && tableDataResult) {
    let sortedResults: string[] = [];
    let sortedEngineName: string[] = [];
    let sortedResultsUnrated: string[] = [];
    let sortedEngineNameUnrated: string[] = [];
    tableData.forEach((e: any, i: number) => {
      if (tableDataResult[i] === 'malicious') {
        sortedResults.unshift(tableDataResult[i]);
        sortedEngineName.unshift(tableDataEngineName[i]);
      } else if (tableDataResult[i] === 'clean') {
        sortedResults.push(tableDataResult[i]);
        sortedEngineName.push(tableDataEngineName[i]);
      } else {
        sortedResultsUnrated.push(tableDataResult[i]);
        sortedEngineNameUnrated.push(tableDataEngineName[i]);
      }
    });

    const finalResults = sortedResults.concat(sortedResultsUnrated);
    const finalEngine = sortedEngineName.concat(sortedEngineNameUnrated);
    console.log(sortedResults, sortedEngineName);
    rows = tableData.map((e: any, i: number) =>
      createData(finalEngine[i], finalResults[i])
    );
  }

  const showResultData = (arg: string) => {
    if (arg === 'clean') {
      return <div className='text-green-800 font-medium'> {arg}</div>;
    } else if (arg === 'malicious') {
      return <div className='text-red-800 font-medium'> {arg}</div>;
    } else {
      return <div className=' opacity-50 font-medium'> {arg}</div>;
    }
  };

  return (
    <>
      {callStatus === 'queued' || !callStatus ? (
        <>
          <div
            className='flex justify-center prose-lg mt-12 font-bold font-sans text-center  mx-12 md:mx-24'
            lang='en'
          >
            Please wait while we analyze your link
          </div>
          <LoadingPage />
        </>
      ) : (
        <>
          <div className='flex my-16  justify-center '>
            <div className='font-bold font-sans text-center  mx-12 md:mx-24'>
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
