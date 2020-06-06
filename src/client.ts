import { postContentQuery } from './query/post-content';
import axios, { AxiosRequestConfig } from 'axios';
import { GetContentParams, getContentQuery } from './query/get-content';
import { Data } from './types/data';
import { GetContentsParams, getContentsQuery } from './query/get-contents';

export type ClientConfig = {
    contentType?: string;
    X_API_KEY: string;
    X_WRITE_API_KEY?: string;
    baseUrl: string;
};

export const createClient = (config: ClientConfig) => {
    const axiosConfig: AxiosRequestConfig = {
        baseURL: config.baseUrl,
        headers: {
            'Content-Type': config.contentType,
            'X-API-KEY': config.X_API_KEY,
            'X-WRITE-API-KEY': config.X_WRITE_API_KEY,
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        postContent: (path: string, requestBody: any) => {
            return postContentQuery(axiosClient, path, requestBody);
        },
    };

    return client;
};

export type Client = {
    getContent: <T>(params: GetContentParams) => Promise<T & Data>;
    getContents: <T>(params: GetContentsParams) => Promise<(T & Data)[]>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    postContent: (path: string, requestBody: any) => void;
};
