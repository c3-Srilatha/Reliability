export interface PollingSuccessSpec {

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): PollingSuccessSpec;

  readonly comparator?: string | null;
  withComparator(comparator: string | null): PollingSuccessSpec;

  readonly value?: any;
  withValue(value: any): PollingSuccessSpec;
}

