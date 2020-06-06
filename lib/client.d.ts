declare type ClientConfig = {
    contentType?: string;
    X_API_KEY: string;
    baseUrl: string;
};
declare const createClient: (config: ClientConfig) => import("axios").AxiosInstance;
export default createClient;
