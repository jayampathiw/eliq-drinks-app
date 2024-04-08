export interface Configuration {
  baseAPIUrl: string;
  appTitle: string;
  logURL: string;
  style: Styles;
}

export interface Styles {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}

export const initConfig: Configuration = {
  baseAPIUrl: '',
  appTitle: '',
  logURL: '',
  style: {
    primaryColor: '',
    secondaryColor: '',
    backgroundColor: '',
    textColor: '',
    borderColor: '',
  },
};
