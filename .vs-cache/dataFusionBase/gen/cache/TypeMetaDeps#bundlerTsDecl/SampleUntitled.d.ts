export interface SampleUntitled {

  readonly id: string;
  withId(id: string): SampleUntitled;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): SampleUntitled;

  readonly name?: string | null;
  withName(name: string | null): SampleUntitled;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SampleUntitled;

  readonly version?: number | null;
  withVersion(version: number | null): SampleUntitled;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): SampleUntitled;
}

