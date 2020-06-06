export declare type Filters = {
    key: string;
    filterType: FiltersType;
    value?: string;
};
declare const filters: readonly ["equals", "not_equals", "less_than", "greater_than", "contains", "exists", "not_exists", "begins_with"];
export declare type FiltersType = typeof filters[number];
export declare class QueryParamaterFactory {
    private params;
    addDraftKey: (draftKey?: string | undefined) => this;
    addFields: (fields?: string[] | undefined) => this;
    addDepth: (depth?: number | undefined) => this;
    addLimit: (limit?: number | undefined) => this;
    addOffset: (offset?: number | undefined) => this;
    addFilters: (filters?: Filters[] | undefined) => this;
    toParams: () => string;
    clear: () => this;
}
export declare const addDraftKey: (queryParams: string, draftKey?: string | undefined) => string;
export declare const addFields: (queryParams: string, fields?: string[] | undefined) => string;
export declare const addDepth: (queryParams: string, depth?: number | undefined) => string;
export declare const addLimit: (queryParams: string, limit?: number | undefined) => string;
export declare const addOffset: (queryParams: string, offset?: number | undefined) => string;
export declare const addFilters: (queryParams: string, filters?: Filters[] | undefined) => string;
export {};
