import { AxiosInstance } from 'axios';
import { Data } from '../types/data';
export declare type GetContentParams = {
    path: string;
    contentId: string;
    draftKey?: string;
    fields?: string[];
    depth?: 1 | 2 | 3;
};
export declare const getContentQuery: <T>(axios: AxiosInstance, params: GetContentParams) => Promise<T & Data>;
