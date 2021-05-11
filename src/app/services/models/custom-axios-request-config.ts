import { AxiosRequestConfig } from 'axios';

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  unknownErrorCode?: string;
  acceptableErrorCodes?: string[];
}
