export interface DataApiContext {

  readonly id: string;
  withId(id: string): DataApiContext;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): DataApiContext;

  readonly name?: string | null;
  withName(name: string | null): DataApiContext;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataApiContext;

  readonly version?: number | null;
  withVersion(version: number | null): DataApiContext;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): DataApiContext;

  readonly seed?: number | null;
  withSeed(seed: number | null): DataApiContext;

  readonly next?: number | null;
  withNext(next: number | null): DataApiContext;
}

