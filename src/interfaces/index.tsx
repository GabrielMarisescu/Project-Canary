export interface serverModel {
  model: string;
}

export interface ScanSectionProps {
  result: number[] | undefined;
}

export interface MainProps {
  result: number[] | undefined;
}
export interface CanonizedUrl {
  data: {
    id: string;
    type: string;
  };
}

export interface AnalysisResult {
  meta: {
    url_info: {
      id: string;
      url: string;
    };
  };
  data: {
    attributes: {
      date: number;
      status: string;
      stats: {
        harmless: number;
        malicious: number;
        suspicious: number;
        undetected: number;
        timeout: number;
      };
      results: {};
    };
  };
}
