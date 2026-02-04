export interface LighthouseResultsTiming {

  readonly entries?: C3.Array<any | null>;
  withEntries(entries: C3.Array<any | null> | Array<any | null>): LighthouseResultsTiming;

  readonly total?: number | null;
  withTotal(total: number | null): LighthouseResultsTiming;
}

