import { QueryParamaterFactory } from './../util/query-util';
import { Data } from './../types/data';
import { AxiosInstance } from 'axios';
import { CMSResponse } from '../types/response';
import { Filters } from '../util/query-util';

export type GetContentsParams = {
    path: string;
    draftKey?: string;
    limit?: number;
    offset?: number;
    fields?: string[];
    filters?: Filters[];
    depth?: 1 | 2 | 3;
};

export const getContentsQuery = <T>(
    axios: AxiosInstance,
    params: GetContentsParams
) => {
    const { path, draftKey, offset, fields, filters, depth } = params;
    const queryParams = new QueryParamaterFactory()
        .addDraftKey(draftKey)
        .addOffset(offset)
        .addFields(fields)
        .addFilters(filters)
        .addDepth(depth)
        .toParams();

    return axios
        .get<CMSResponse<Array<T & Data>>>(`/${path}${queryParams}`)
        .then(function (response) {
            return response.data.contents;
        });
};
