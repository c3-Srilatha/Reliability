export interface DataRndConfig {

  readonly mag?: number | null;
  withMag(mag: number | null): DataRndConfig;

  readonly lo?: number | null;
  withLo(lo: number | null): DataRndConfig;

  readonly hi?: number | null;
  withHi(hi: number | null): DataRndConfig;
}

