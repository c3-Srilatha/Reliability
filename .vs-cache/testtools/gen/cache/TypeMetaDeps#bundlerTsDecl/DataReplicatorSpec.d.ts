export interface DataReplicatorSpec {

  readonly id: string;
  withId(id: string): DataReplicatorSpec;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): DataReplicatorSpec;

  readonly name?: string | null;
  withName(name: string | null): DataReplicatorSpec;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataReplicatorSpec;

  readonly version?: number | null;
  withVersion(version: number | null): DataReplicatorSpec;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): DataReplicatorSpec;

  readonly start: DateTime;
  withStart(start: DateTime | Date | string): DataReplicatorSpec;

  readonly end: DateTime;
  withEnd(end: DateTime | Date | string): DataReplicatorSpec;

  readonly data: C3.Array<CanonicalReplicationSpec | null>;
  withData(data: C3.Array<CanonicalReplicationSpec | null> | Array<ICanonicalReplicationSpec | null>): DataReplicatorSpec;

  readonly postReplication?: λBiConsumer<DateTime | null, DateTime | null> | null;
  withPostReplication(postReplication: λBiConsumer<DateTime | null, DateTime | null> | null): DataReplicatorSpec;

  readonly sanityCheck?: λBiPredicate<DateTime | null, DateTime | null> | null;
  withSanityCheck(sanityCheck: λBiPredicate<DateTime | null, DateTime | null> | null): DataReplicatorSpec;
}


interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λBiPredicate<T, U> {
  (t: T, u: U): boolean
}
