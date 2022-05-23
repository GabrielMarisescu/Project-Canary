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

export interface listener {
  code: string;
  preventDefault: () => void;
}
export interface AnalysisResult {
  meta: {
    url_info: { url: string; id: string };
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
      results: any;
    };
    type: string;
    id: string;
    links: {
      item: string;
      self: string;
    };
  };
}
