export type Filters = {
    key: string;
    filterType: FiltersType;
    value?: string;
};

const filters = [
    'equals',
    'not_equals',
    'less_than',
    'greater_than',
    'contains',
    'exists',
    'not_exists',
    'begins_with',
] as const;

export type FiltersType = typeof filters[number];

export class QueryParamaterFactory {
    private params = '?';

    addDraftKey = (draftKey?: string) => {
        this.params = draftKey
            ? `${this.params}draftKey=${draftKey}&`
            : this.params;
        return this;
    };
    addFields = (fields?: string[]) => {
        this.params = fields
            ? `${this.params}fields=${fields.join(',')}&`
            : this.params;
        return this;
    };
    addDepth = (depth?: number) => {
        this.params = depth ? `${this.params}depth=${depth}&` : this.params;
        return this;
    };
    addLimit = (limit?: number) => {
        this.params = limit ? `${this.params}limit=${limit}&` : this.params;
        return this;
    };
    addOffset = (offset?: number) => {
        this.params = offset ? `${this.params}offset=${offset}&` : this.params;
        return this;
    };
    addFilters = (filters?: Filters[]) => {
        if (filters) {
            const filterStr = filters
                .map((filter) => {
                    return `${filter.key}[${filter.filterType}]${filter.value}`;
                })
                .join();
            this.params = `${this.params}filters=${filterStr}&`;
        }
        return this;
    };
    toParams = () => {
        return this.params;
    };
    clear = () => {
        this.params = '';
        return this;
    };
}

export const addDraftKey = (queryParams: string, draftKey?: string) => {
    return draftKey ? `${queryParams}draftKey=${draftKey}&` : queryParams;
};

export const addFields = (queryParams: string, fields?: string[]) => {
    return fields ? `${queryParams}fields=${fields.join(',')}&` : queryParams;
};

export const addDepth = (queryParams: string, depth?: number) => {
    return depth ? `${queryParams}depth=${depth}&` : queryParams;
};

export const addLimit = (queryParams: string, limit?: number) => {
    return limit ? `${queryParams}limit=${limit}&` : queryParams;
};

export const addOffset = (queryParams: string, offset?: number) => {
    return offset ? `${queryParams}offset=${offset}&` : queryParams;
};

export const addFilters = (queryParams: string, filters?: Filters[]) => {
    if (filters) {
        const filterStr = filters
            .map((filter) => {
                return `${filter.key}[${filter.filterType}]${filter.value}`;
            })
            .join();
        return `${queryParams}filters=${filterStr}&`;
    } else {
        return queryParams;
    }
};
