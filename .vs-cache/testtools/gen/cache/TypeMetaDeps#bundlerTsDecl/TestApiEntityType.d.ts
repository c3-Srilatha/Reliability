export interface TestApiEntityType {

  readonly id: string;
  withId(id: string): TestApiEntityType;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestApiEntityType;

  readonly name?: string | null;
  withName(name: string | null): TestApiEntityType;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestApiEntityType;

  readonly version?: number | null;
  withVersion(version: number | null): TestApiEntityType;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestApiEntityType;

  readonly intField?: number | null;
  withIntField(intField: number | null): TestApiEntityType;

  readonly referenceField?: DataApiEntityType | null;
  withReferenceField(referenceField: IDataApiEntityType | null): TestApiEntityType;
}

