export interface DecimalPair {

  readonly first?: number | null;
  withFirst(first: number | null): DecimalPair;

  readonly second?: number | null;
  withSecond(second: number | null): DecimalPair;
}

