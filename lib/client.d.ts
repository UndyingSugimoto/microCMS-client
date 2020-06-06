import { GetContentParams } from './query/get-content';
import { Data } from './types/data';
import { GetContentsParams } from './query/get-contents';
export declare type ClientConfig = {
    contentType?: string;
    X_API_KEY: string;
    X_WRITE_API_KEY?: string;
    baseUrl: string;
};
export declare const createClient: (config: ClientConfig) => Client;
export declare type Client = {
    getContent: <T>(params: GetContentParams) => Promise<T & Data>;
    getContents: <T>(params: GetContentsParams) => Promise<(T & Data)[]>;
    postContent: (path: string, requestBody: any) => void;
};
