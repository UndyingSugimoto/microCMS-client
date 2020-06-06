"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var config = {
    baseURL: process.env.CMS_BASE_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-API-KEY': "" + process.env.X_API_KEY,
    },
};
exports.default = axios_1.default.create(config);
