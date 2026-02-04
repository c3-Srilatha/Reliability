export interface SampleEntity {

  readonly id?: string | null;
  withId(id: string | null): SampleEntity;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): SampleEntity;

  readonly name?: string | null;
  withName(name: string | null): SampleEntity;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SampleEntity;

  readonly version?: number | null;
  withVersion(version: number | null): SampleEntity;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): SampleEntity;

  readonly value?: number | null;
  withValue(value: number | null): SampleEntity;
}

