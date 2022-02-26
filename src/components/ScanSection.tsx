import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ScanSection() {
  const [result, setResult] = useState<any>();
  const [url, setUrl] = useState<any>();

  //This will fetch the random color pallette
  useEffect(() => {
    const virusTotalApiKey = process.env.virustotal;
    const virusTotalURL = {
      url: 'https://www.youtube.com/',
    };
    const headers = {
      'Content-Type': 'text/plain',
      'x-apikey': `${virusTotalApiKey}`,
    };
    axios
      .post(
        'https://www.virustotal.com/api/v3/urls/',
        { headers },
        virusTotalURL
      )
      .then((data) => setResult(data));
  }, []);
  console.log(result);
  return (
    <>
      <div>test</div>
      {result}
    </>
  );
}

export default ScanSection;
