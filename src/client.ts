import axios, { AxiosRequestConfig } from 'axios';
import { GetContentParams, getContentQuery } from './query/get-content';
import { Data } from './types/data';
import { GetContentsParams, getContentsQuery } from './query/get-contents';

export type ClientConfig = {
    contentType?: string;
    X_API_KEY: string;
    baseUrl: string;
};

export const createClient = (config: ClientConfig) => {
    const axiosConfig: AxiosRequestConfig = {
        baseURL: config.baseUrl,
        headers: {
            'Content-Type': config.contentType,
            'X-API-KEY': config.X_API_KEY,
        },
    };
    const axiosClient = axios.create(axiosConfig);

    const client: Client = {
        getContent: (params: GetContentParams) => {
            return getContentQuery(axiosClient, params);
        },
        getContents: (params: GetContentsParams) => {
            return getContentsQuery(axiosClient, params);
        },
    };

    return client;
};

export type Client = {
    getContent: <T>(params: GetContentParams) => Promise<T & Data>;
    getContents: <T>(params: GetContentsParams) => Promise<(T & Data)[]>;
};
