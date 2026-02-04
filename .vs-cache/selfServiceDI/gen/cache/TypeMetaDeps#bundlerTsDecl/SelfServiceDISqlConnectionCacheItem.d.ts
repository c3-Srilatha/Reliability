export interface SelfServiceDISqlConnectionCacheItem {

  readonly tableNamesLoading?: boolean;
  withTableNamesLoading(tableNamesLoading: boolean): SelfServiceDISqlConnectionCacheItem;

  readonly tableNamesBySchema?: C3.Map<string | null, C3.Array<string | null>>;
  withTableNamesBySchema(tableNamesBySchema: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): SelfServiceDISqlConnectionCacheItem;
}

