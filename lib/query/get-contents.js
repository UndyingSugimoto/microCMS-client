"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentsQuery = void 0;
var query_util_1 = require("./../util/query-util");
exports.getContentsQuery = function (axios, params) {
    var path = params.path, draftKey = params.draftKey, offset = params.offset, fields = params.fields, filters = params.filters, depth = params.depth;
    var queryParams = new query_util_1.QueryParamaterFactory()
        .addDraftKey(draftKey)
        .addOffset(offset)
        .addFields(fields)
        .addFilters(filters)
        .addDepth(depth)
        .toParams();
    return axios
        .get("/" + path + queryParams)
        .then(function (response) {
        return response.data.contents;
    });
};
