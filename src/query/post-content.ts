import { AxiosInstance } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postContentQuery = async (
    axios: AxiosInstance,
    path: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    requestBody: any
) => {
    const result = await axios
        .post(`/${path}`, JSON.stringify(requestBody))
        .then(function (response) {
            return response.data;
        });
    return result;
};
