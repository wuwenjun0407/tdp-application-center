import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { loadEnv } from '@build/index';
import { TdpHttpError, RequestMethods, TdpHttpResoponse, TdpHttpRequestConfig } from './types.d';
import NProgress from '../progress';

// 加载环境变量 VITE_PROXY_DOMAIN（开发环境）  VITE_PROXY_DOMAIN_REAL（打包后的线上环境）
const { VITE_PROXY_DOMAIN, VITE_PROXY_DOMAIN_REAL } = loadEnv();

// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
    baseURL: process.env.NODE_ENV === 'production' ? VITE_PROXY_DOMAIN_REAL : VITE_PROXY_DOMAIN,
    timeout: 10000,
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

class TdpHttp {
    constructor() {
        this.httpInterceptorsRequest();
        this.httpInterceptorsResponse();
    }
    // 初始化配置对象
    private static initConfig: TdpHttpRequestConfig = {};

    // 保存当前Axios实例对象
    private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);

    // 请求拦截
    private httpInterceptorsRequest(): void {
        TdpHttp.axiosInstance.interceptors.request.use(
            (config: TdpHttpRequestConfig) => {
                NProgress.start();
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    // 响应拦截
    private httpInterceptorsResponse(): void {
        const instance = TdpHttp.axiosInstance;
        instance.interceptors.response.use(
            (response: TdpHttpResoponse) => {
                NProgress.done();
                return response.data;
            },
            (error: TdpHttpError) => {
                const $error = error;
                $error.isCancelRequest = Axios.isCancel($error);
                NProgress.done();
                this.processErrorStatus(error);
                return Promise.reject($error);
            }
        );
    }

    // 区分不同状态码
    private processErrorStatus(error: TdpHttpError) {
        switch (error.response.status) {
            case 401:
            case 400:
            case 403:
            case 404:
            case 500:
            default:
                return Promise.reject(error);
        }
    }

    // 通用请求工具函数
    public request<T>(method: RequestMethods, url: string, param?: AxiosRequestConfig, axiosConfig?: TdpHttpRequestConfig): Promise<T> {
        const config = {
            method,
            url,
            ...param,
            ...axiosConfig
        } as TdpHttpRequestConfig;

        // 单独处理自定义请求/响应回掉
        return new Promise((resolve, reject) => {
            TdpHttp.axiosInstance
                .request(config)
                .then((response: undefined) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    // 单独抽离的post工具函数
    public post<T, P>(url: string, params?: T, config?: TdpHttpRequestConfig): Promise<P> {
        return this.request<P>('post', url, params, config);
    }

    // 单独抽离的get工具函数
    public get<T, P>(url: string, params?: T, config?: TdpHttpRequestConfig): Promise<P> {
        return this.request<P>('get', url, params, config);
    }

    // 单独抽离的delete工具函数
    public delete<T, P>(url: string, params?: T, config?: TdpHttpRequestConfig): Promise<P> {
        return this.request<P>('delete', url, params, config);
    }

    // 单独抽离的put工具函数
    public put<T, P>(url: string, params?: T, config?: TdpHttpRequestConfig): Promise<P> {
        return this.request<P>('put', url, params, config);
    }
}

export const http = new TdpHttp();
