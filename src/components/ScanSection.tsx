import React, { useEffect, useState } from 'react';

function ScanSection() {
  const [result, setResult] = useState<any>();
  const [url, setUrl] = useState<any>();

  //This will fetch the random color pallette
  useEffect(() => {
    const virusTotalApiKey = process.env.REACT_APP_API_KEY;
    const virusTotalURL = {
      url: 'https://www.youtube.com/',
    };
    const encodedResult = Buffer.from(`${virusTotalURL}`).toString('base64');
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'x-apikey': `${virusTotalApiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        url: `${encodedResult}`,
      }),
    };

    fetch('https://www.virustotal.com/api/v3/urls', options)
      .then((response) => response.json())
      .then((response) => setResult(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(result);
  return (
    <>
      <div>test</div>
    </>
  );
}

export default ScanSection;
