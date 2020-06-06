import axios, { AxiosRequestConfig } from 'axios';

type ClientConfig = {
    contentType?: string;
    X_API_KEY: string;
    baseUrl: string;
};

const createClient = (config: ClientConfig) => {
    const axiosConfig: AxiosRequestConfig = {
        baseURL: config.baseUrl,
        headers: {
            'Content-Type': config.contentType,
            'X-API-KEY': config.X_API_KEY,
        },
    };
    const axiosClient = axios.create(axiosConfig);

    return axiosClient;
};

export default createClient;
