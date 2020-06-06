"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
var post_content_1 = require("./query/post-content");
var axios_1 = __importDefault(require("axios"));
var get_content_1 = require("./query/get-content");
var get_contents_1 = require("./query/get-contents");
exports.createClient = function (config) {
    var axiosConfig = {
        baseURL: config.baseUrl,
        headers: {
            'Content-Type': config.contentType,
            'X-API-KEY': config.X_API_KEY,
            'X-WRITE-API-KEY': config.X_WRITE_API_KEY
                ? config.X_WRITE_API_KEY
                : '',
        },
    };
    var axiosClient = axios_1.default.create(axiosConfig);
    var client = {
        getContent: function (params) {
            return get_content_1.getContentQuery(axiosClient, params);
        },
        getContents: function (params) {
            return get_contents_1.getContentsQuery(axiosClient, params);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        postContent: function (path, requestBody) {
            return post_content_1.postContentQuery(axiosClient, path, requestBody);
        },
    };
    return client;
};
