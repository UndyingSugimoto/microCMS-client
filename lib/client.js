"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var createClient = function (config) {
    var axiosConfig = {
        baseURL: config.baseUrl,
        headers: {
            'Content-Type': config.contentType,
            'X-API-KEY': config.X_API_KEY,
        },
    };
    var axiosClient = axios_1.default.create(axiosConfig);
    return axiosClient;
};
exports.default = createClient;
