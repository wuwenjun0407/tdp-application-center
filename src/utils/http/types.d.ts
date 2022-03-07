import { Method, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

// export type resultType = {
//     accessToken?: string;
// };

export type RequestMethods = Extract<Method, 'get' | 'post' | 'put' | 'delete' | 'patch' | 'option' | 'head'>;

export interface TdpHttpError extends AxiosError {
    isCancelRequest?: boolean;
}

export interface TdpHttpRequestConfig extends AxiosRequestConfig {
    beforeRequestCallback?: (request: TdpHttpRequestConfig) => void;
    // eslint-disable-next-line no-use-before-define
    beforeResponseCallback?: (response: TdpHttpResoponse) => void;
}

export interface TdpHttpResoponse extends AxiosResponse {
    config: TdpHttpRequestConfig;
}

export default class TdpHttp {
    request<T>(method: RequestMethods, url: string, param?: AxiosRequestConfig, axiosConfig?: TdpHttpRequestConfig): Promise<T>;
    post<T, P>(url: string, params?: T, config?: TdpHttpRequestConfig): Promise<P>;
    get<T, P>(url: string, params?: T, config?: TdpHttpRequestConfig): Promise<P>;
    delete<T, P>(url: string, params?: T, config?: TdpHttpRequestConfig): Promise<P>;
    put<T, P>(url: string, params?: T, config?: TdpHttpRequestConfig): Promise<P>;
}
