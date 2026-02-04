export interface TestCassandraType {

  readonly id: string;
  withId(id: string): TestCassandraType;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestCassandraType;

  readonly name?: string | null;
  withName(name: string | null): TestCassandraType;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestCassandraType;

  readonly version?: number | null;
  withVersion(version: number | null): TestCassandraType;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestCassandraType;

  readonly quantity?: number | null;
  withQuantity(quantity: number | null): TestCassandraType;

  readonly timestamp?: DateTime | null;
  withTimestamp(timestamp: DateTime | Date | string | null): TestCassandraType;
}

