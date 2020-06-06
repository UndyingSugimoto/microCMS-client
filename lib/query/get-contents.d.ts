import { Data } from './../types/data';
import { AxiosInstance } from 'axios';
import { Filters } from '../util/query-util';
export declare type GetContentsParams = {
    path: string;
    draftKey?: string;
    limit?: number;
    offset?: number;
    fields?: string[];
    filters?: Filters[];
    depth?: 1 | 2 | 3;
};
export declare const getContentsQuery: <T>(axios: AxiosInstance, params: GetContentsParams) => Promise<(T & Data)[]>;
