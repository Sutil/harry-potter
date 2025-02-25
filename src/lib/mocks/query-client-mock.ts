import {
  DefaultError,
  Query,
  QueryCache,
  QueryClient,
  QueryKey,
  QueryState,
} from "@tanstack/react-query";

class QueryMock extends Query {
  constructor(key: QueryKey, public state: QueryState) {
    super({
      queryKey: key,
      options: {
        retry: false,
      },
      queryHash: "hash",
      cache: new QueryCache(),
      state,
    });
  }
}

class QueryCacheMock extends QueryCache {
  constructor(private queryKey: QueryKey, private state: QueryState) {
    super();
  }

  get<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey
  >(
    queryHash: string
  ): Query<TQueryFnData, TError, TData, TQueryKey> | undefined {
    const queryKey = JSON.parse(queryHash) as QueryKey;

    if (JSON.stringify(queryKey) !== JSON.stringify(this.queryKey)) {
      return undefined;
    }

    return new QueryMock(this.queryKey, this.state) as unknown as Query<
      TQueryFnData,
      TError,
      TData,
      TQueryKey
    >;
  }
}

class QueryClientMock extends QueryClient {
  private readonly queryCache: QueryCacheMock;

  constructor(
    private queryKey: QueryKey,
    private queryState: QueryState<any, any>
  ) {
    super({
      defaultOptions: {
        queries: {
          retry: false,
          staleTime: Infinity,
          enabled: false,
        },
      },
    });

    this.queryCache = new QueryCacheMock(this.queryKey, this.queryState);
  }

  getQueryCache(): QueryCache {
    return this.queryCache;
  }
}

const mockQuery = <T>(queryKey: QueryKey, data: T): QueryClient => {
  return new QueryClientMock(queryKey, {
    status: "success",
    data,
  } as QueryState<T>);
};

const mockQueryLoading = <T>(queryKey: QueryKey): QueryClient => {
  return new QueryClientMock(queryKey, {
    status: "pending",
    fetchStatus: "fetching",
  } as QueryState<T>);
};

const mockQueryError = <T>(queryKey: QueryKey, error: Error): QueryClient => {
  return new QueryClientMock(queryKey, {
    status: "error",
    error,
    fetchFailureCount: 1,
    fetchStatus: "idle",
  } as QueryState<T>);
};

export { mockQuery, mockQueryLoading, mockQueryError };
