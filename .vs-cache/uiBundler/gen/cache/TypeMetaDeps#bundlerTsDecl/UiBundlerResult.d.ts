export interface UiBundlerResult {

  readonly id: string;
  withId(id: string): UiBundlerResult;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiBundlerResult;

  readonly name?: string | null;
  withName(name: string | null): UiBundlerResult;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiBundlerResult;

  readonly version?: number | null;
  withVersion(version: number | null): UiBundlerResult;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiBundlerResult;

  readonly job?: UiBundler | null;
  withJob(job: IUiBundler | null): UiBundlerResult;

  readonly namespace?: string | null;
  withNamespace(namespace: string | null): UiBundlerResult;

  readonly entryName?: string | null;
  withEntryName(entryName: string | null): UiBundlerResult;

  readonly batch?: number | null;
  withBatch(batch: number | null): UiBundlerResult;

  readonly rawValue?: C3.Map<string | null, any | null>;
  withRawValue(rawValue: C3.Map<string | null, any | null> | {[key: string | null]: any | null}): UiBundlerResult;
}

