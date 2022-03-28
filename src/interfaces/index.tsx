export interface serverModel {
  model: string;
}

export interface ScanSectionProps {
  result: number[] | undefined;
}
export interface FooterProps {
  result: number[] | undefined;
}

export interface MusicPlayerProps {
  result: number[] | undefined;
}
//export interface MusicPlayerProps {
// result: [number[] | undefined];
//}
export interface MainProps {
  result: number[] | undefined;
}

export interface CanonizedUrlSuccess {
  data: {
    id: string;
    type: string;
  };
}

export interface CanonizedUrlError {
  error: {
    code: string;
    message: string;
  };
}
export type CanonizedUrl = CanonizedUrlSuccess | CanonizedUrlError;
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
      results: {
        category: string;
        result: string;
        method: string;
        engine_name: string;
      }[];
    };
    type: string;
    id: string;
    links: {
      item: string;
      self: string;
    };
  };
}
