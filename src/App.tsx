import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState<any>([]);

  const fetchUrl = 'http://colormind.io/api/';
  const fetchData: any = {
    model: 'Default',
  };

  const headers = {
    'Content-Type': 'text/plain',
  };

  useEffect(() => {
    axios
      .post(fetchUrl, fetchData, { headers })
      .then((res) => console.log(res.data));
  }, [data]);

  return (
    <>
      <div className='text-7xl font-bold underline'>Hello world!</div>
      <div>Hello world!</div>
    </>
  );
}

export default App;
