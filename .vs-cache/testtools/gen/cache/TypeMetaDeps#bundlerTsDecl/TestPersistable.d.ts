export interface TestPersistable {

  readonly id: string;
  withId(id: string): TestPersistable;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestPersistable;

  readonly name?: string | null;
  withName(name: string | null): TestPersistable;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestPersistable;

  readonly version?: number | null;
  withVersion(version: number | null): TestPersistable;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestPersistable;

  readonly category?: string | null;
  withCategory(category: string | null): TestPersistable;
}

