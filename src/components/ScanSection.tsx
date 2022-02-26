import React, { useEffect, useState } from 'react';
function ScanSection() {
  const [result, setResult] = useState<any>();
  const [url, setUrl] = useState<any>();
  const virusTotalURL = 'https://www.twitch.tv/lec';
  const virusTotalApiKey = process.env.REACT_APP_API_KEY;
  const resultUrl = url?.data.id;

  useEffect(() => {
    const optionsEncoder = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'x-apikey': `${virusTotalApiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        url: `${virusTotalURL}`,
      }),
    };
    const optionsAnalysis = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'x-apikey': `${virusTotalApiKey}`,
      },
    };

    fetch('https://www.virustotal.com/api/v3/urls', optionsEncoder)
      .then((response) => response.json())
      .then((response) => setUrl(response))
      .catch((err) => console.error(err));

    if (resultUrl) {
      fetch(
        'https://www.virustotal.com/api/v3/analyses/' + resultUrl,
        optionsAnalysis
      )
        .then((response) => response.json())
        .then((response) => setResult(response))
        .catch((err) => console.error(err));
    }
  }, [resultUrl, virusTotalApiKey]);

  console.log(url?.data?.id, result);
  return (
    <>
      <div>test</div>
    </>
  );
}

export default ScanSection;
