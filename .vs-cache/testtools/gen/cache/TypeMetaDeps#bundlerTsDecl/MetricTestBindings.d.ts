export interface MetricTestBindings {

  readonly bindings?: C3.Array<number | null>;
  withBindings(bindings: C3.Array<number | null> | Array<number | null>): MetricTestBindings;
}

