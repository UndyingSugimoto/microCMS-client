import { AxiosInstance } from 'axios';
import { Data } from '../types/data';
import { QueryParamaterFactory } from '../util/query-util';

export type GetContentParams = {
    path: string;
    contentId: string;
    draftKey?: string;
    fields?: string[];
    depth?: 1 | 2 | 3;
};

export const getContentQuery = async <T>(
    axios: AxiosInstance,
    params: GetContentParams
) => {
    const { path, contentId, draftKey, fields, depth } = params;

    const queryParams = new QueryParamaterFactory()
        .addDraftKey(draftKey)
        .addFields(fields)
        .addDepth(depth)
        .toParams();

    const result = await axios
        .get<T & Data>(`/${path}/${contentId}${queryParams}`)
        .then(function (response) {
            return response.data;
        });
    return result;
};
