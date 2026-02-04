export interface DataApiOtherEntityType {

  readonly id: string;
  withId(id: string): DataApiOtherEntityType;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): DataApiOtherEntityType;

  readonly name?: string | null;
  withName(name: string | null): DataApiOtherEntityType;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataApiOtherEntityType;

  readonly version?: number | null;
  withVersion(version: number | null): DataApiOtherEntityType;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): DataApiOtherEntityType;
}

