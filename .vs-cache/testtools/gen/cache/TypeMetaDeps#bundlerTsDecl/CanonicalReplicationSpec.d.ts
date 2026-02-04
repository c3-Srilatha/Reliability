export interface CanonicalReplicationSpec {

  readonly useCanonical?: boolean;
  withUseCanonical(useCanonical: boolean): CanonicalReplicationSpec;

  readonly name?: string | null;
  withName(name: string | null): CanonicalReplicationSpec;

  readonly replicationLambda?: λQuadFunction<Stream<Obj | null>, DateTime | null, DateTime | null, string, C3.Map<string | null, C3.Array<Obj | null>>> | null;
  withReplicationLambda(replicationLambda: λQuadFunction<Stream<Obj | null>, DateTime | null, DateTime | null, string, C3.Map<string | null, C3.Array<Obj | null>> | {[key: string | null]: C3.Array<Obj | null> | Array<IObj | null>}> | null): CanonicalReplicationSpec;
}


interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}
