import { AnalysisResult, CanonizedUrl } from 'interfaces';

const apiKey = process.env.REACT_APP_API_KEY;

/**
 * @param {string} url (example: www.google.com or https://www.google.com)
 * @returns {Promise<CanonizedUrl>} the canonized url
 */
export async function getCanonizedUrl(url: any) {
  try {
    const request = await fetch('https://www.virustotal.com/api/v3/urls', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'x-apikey': `${apiKey}`,
      },
      body: new URLSearchParams({ url: `${url}` }),
    });
    return (await request.json()) as CanonizedUrl;
  } catch (err) {
    console.error(err);
  }
}

/**
 * @param {string} analysisData a canonized url
 * @returns {Promise<AnalysisResult>} results of the analysis
 */
export async function getResults(analysisData: string) {
  if (analysisData) {
    try {
      const request = await fetch(
        'https://www.virustotal.com/api/v3/analyses/' + analysisData,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'x-apikey': `${apiKey}`,
          },
        }
      );
      return (await request.json()) as AnalysisResult;
    } catch (err) {
      console.error(err);
    }
  }
}

export function SortResponseCanonizedUrlData(
  data: any,
  setStateId: any,
  setStateErr: any
): any {
  // takes the CanonizedResponse and sets the data so TS is happy :)
  if (data?.data?.id) {
    setStateId(data.data.id);
  } else if (data?.error.message) {
    setStateErr(data?.error?.message);
  }
}

// create an object for the Table
export function createData(EngineName: any, Result: any) {
  return { EngineName, Result };
}
