"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFilters = exports.addOffset = exports.addLimit = exports.addDepth = exports.addFields = exports.addDraftKey = exports.QueryParamaterFactory = void 0;
var filters = [
    'equals',
    'not_equals',
    'less_than',
    'greater_than',
    'contains',
    'exists',
    'not_exists',
    'begins_with',
];
var QueryParamaterFactory = /** @class */ (function () {
    function QueryParamaterFactory() {
        var _this = this;
        this.params = '?';
        this.addDraftKey = function (draftKey) {
            _this.params = draftKey
                ? _this.params + "draftKey=" + draftKey + "&"
                : _this.params;
            return _this;
        };
        this.addFields = function (fields) {
            _this.params = fields
                ? _this.params + "fields=" + fields.join(',') + "&"
                : _this.params;
            return _this;
        };
        this.addDepth = function (depth) {
            _this.params = depth ? _this.params + "depth=" + depth + "&" : _this.params;
            return _this;
        };
        this.addLimit = function (limit) {
            _this.params = limit ? _this.params + "limit=" + limit + "&" : _this.params;
            return _this;
        };
        this.addOffset = function (offset) {
            _this.params = offset ? _this.params + "offset=" + offset + "&" : _this.params;
            return _this;
        };
        this.addFilters = function (filters) {
            if (filters) {
                var filterStr = filters
                    .map(function (filter) {
                    return filter.key + "[" + filter.filterType + "]" + filter.value;
                })
                    .join();
                _this.params = _this.params + "filters=" + filterStr + "&";
            }
            return _this;
        };
        this.toParams = function () {
            return _this.params;
        };
        this.clear = function () {
            _this.params = '';
            return _this;
        };
    }
    return QueryParamaterFactory;
}());
exports.QueryParamaterFactory = QueryParamaterFactory;
exports.addDraftKey = function (queryParams, draftKey) {
    return draftKey ? queryParams + "draftKey=" + draftKey + "&" : queryParams;
};
exports.addFields = function (queryParams, fields) {
    return fields ? queryParams + "fields=" + fields.join(',') + "&" : queryParams;
};
exports.addDepth = function (queryParams, depth) {
    return depth ? queryParams + "depth=" + depth + "&" : queryParams;
};
exports.addLimit = function (queryParams, limit) {
    return limit ? queryParams + "limit=" + limit + "&" : queryParams;
};
exports.addOffset = function (queryParams, offset) {
    return offset ? queryParams + "offset=" + offset + "&" : queryParams;
};
exports.addFilters = function (queryParams, filters) {
    if (filters) {
        var filterStr = filters
            .map(function (filter) {
            return filter.key + "[" + filter.filterType + "]" + filter.value;
        })
            .join();
        return queryParams + "filters=" + filterStr + "&";
    }
    else {
        return queryParams;
    }
};
