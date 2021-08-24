export declare const client: {
    GetPlayer(variables: import("../__generated__/hasura-sdk").Exact<{
        playerId: any;
    }>, requestHeaders?: (string[][] | Record<string, string> | import("graphql-request/dist/types.dom").Headers) | undefined): Promise<import("../__generated__/hasura-sdk").GetPlayerQuery>;
    GetPlayerFromETH(variables?: import("../__generated__/hasura-sdk").Exact<{
        ethereum_address?: import("../__generated__/hasura-sdk").Maybe<string> | undefined;
    }> | undefined, requestHeaders?: (string[][] | Record<string, string> | import("graphql-request/dist/types.dom").Headers) | undefined): Promise<import("../__generated__/hasura-sdk").GetPlayerFromEthQuery>;
};
//# sourceMappingURL=client.d.ts.map