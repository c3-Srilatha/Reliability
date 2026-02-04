export interface TestApiMapReduceEntity {

  readonly id: string;
  withId(id: string): TestApiMapReduceEntity;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestApiMapReduceEntity;

  readonly name?: string | null;
  withName(name: string | null): TestApiMapReduceEntity;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestApiMapReduceEntity;

  readonly version?: number | null;
  withVersion(version: number | null): TestApiMapReduceEntity;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestApiMapReduceEntity;

  readonly codeName: string;
  withCodeName(codeName: string): TestApiMapReduceEntity;
}

