import { environment } from 'app/environment';
import Axios from 'axios';
import { CustomAxiosRequestConfig } from './models/custom-axios-request-config';

class HttpServiceImpl {
  private baseUrl = environment.apiBaseUrl;

  public get<ResponseType>(url: string, config?: CustomAxiosRequestConfig) {
    return Axios.get<ResponseType>(url, this.mergeConfig(config));
  }

  public post<ResponseType>(
    url: string,
    body?: any,
    config?: CustomAxiosRequestConfig,
  ) {
    return Axios.post<ResponseType>(url, body, this.mergeConfig(config));
  }

  public put<ResponseType>(
    url: string,
    body?: any,
    config?: CustomAxiosRequestConfig,
  ) {
    return Axios.put<ResponseType>(url, body, this.mergeConfig(config));
  }

  public patch<ResponseType>(
    url: string,
    body?: any,
    config?: CustomAxiosRequestConfig,
  ) {
    return Axios.patch<ResponseType>(url, body, this.mergeConfig(config));
  }

  public delete<ResponseType>(url: string, config?: CustomAxiosRequestConfig) {
    return Axios.delete<ResponseType>(url, this.mergeConfig(config));
  }

  private mergeConfig(config?: CustomAxiosRequestConfig) {
    return {
      ...config,
      headers: {
        ...config?.headers,
      },
      baseURL: this.baseUrl,
    } as CustomAxiosRequestConfig;
  }
}

const HttpService = new HttpServiceImpl();

export { HttpService };
