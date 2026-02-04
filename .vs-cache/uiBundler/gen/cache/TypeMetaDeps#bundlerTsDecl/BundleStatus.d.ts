export interface BundleStatus {

  readonly id: string;
  withId(id: string): BundleStatus;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): BundleStatus;

  readonly name?: string | null;
  withName(name: string | null): BundleStatus;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundleStatus;

  readonly version?: number | null;
  withVersion(version: number | null): BundleStatus;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): BundleStatus;

  readonly job: UiBundler;
  withJob(job: IUiBundler): BundleStatus;

  readonly namespace: string;
  withNamespace(namespace: string): BundleStatus;

  readonly configPath: string;
  withConfigPath(configPath: string): BundleStatus;

  readonly configNames: C3.Array<string | null>;
  withConfigNames(configNames: C3.Array<string | null> | Array<string | null>): BundleStatus;

  readonly workingDir?: string | null;
  withWorkingDir(workingDir: string | null): BundleStatus;

  readonly maxMemory?: number | null;
  withMaxMemory(maxMemory: number | null): BundleStatus;

  readonly webpackStatus: WebpackStatus;
  withWebpackStatus(webpackStatus: IWebpackStatus): BundleStatus;
}

