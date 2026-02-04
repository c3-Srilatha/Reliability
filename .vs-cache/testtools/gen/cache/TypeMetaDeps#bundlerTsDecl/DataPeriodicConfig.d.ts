export interface DataPeriodicConfig {

  readonly values?: C3.Array<number | null>;
  withValues(values: C3.Array<number | null> | Array<number | null>): DataPeriodicConfig;
}

