export interface TestApiOtherEntityType {

  readonly id: string;
  withId(id: string): TestApiOtherEntityType;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestApiOtherEntityType;

  readonly name?: string | null;
  withName(name: string | null): TestApiOtherEntityType;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestApiOtherEntityType;

  readonly version?: number | null;
  withVersion(version: number | null): TestApiOtherEntityType;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestApiOtherEntityType;
}

