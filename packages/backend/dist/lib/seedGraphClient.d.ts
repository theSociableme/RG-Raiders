export declare const seedGraphClient: {
    GetTokenBalances(variables: import("./autogen/seedgraph-sdk").Exact<{
        address: string;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/seedgraph-sdk").GetTokenBalancesQuery>;
    GetTopPSeedHolders(variables?: import("./autogen/seedgraph-sdk").Exact<{
        limit: import("./autogen/seedgraph-sdk").Maybe<number>;
    }> | undefined, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/seedgraph-sdk").GetTopPSeedHoldersQuery>;
};
//# sourceMappingURL=seedGraphClient.d.ts.map