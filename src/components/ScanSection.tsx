import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ScanSection() {
  const [result, setResult] = useState<any>();
  const [url, setUrl] = useState<any>();

  //This will fetch the random color pallette
  useEffect(() => {
    const virusTotalURL = {
      url: 'https://www.youtube.com/',
    };
    const virusTotalApiKey = process.env.virustotal;
    axios
      // eslint-disable-next-line no-template-curly-in-string
      .get('https://www.virustotal.com/api/v3/URL/https://www.youtube.com/')
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
