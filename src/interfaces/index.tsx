export interface serverModel {
  model: string;
}

export interface Theme {
  palette: {
    primary: { main: string; dark: string };
    secondary: { main: string; dark: string };
  };
}
