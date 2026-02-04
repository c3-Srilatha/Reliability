export interface WebpackPerformanceProfile {

  readonly id: string;
  withId(id: string): WebpackPerformanceProfile;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): WebpackPerformanceProfile;

  readonly name?: string | null;
  withName(name: string | null): WebpackPerformanceProfile;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): WebpackPerformanceProfile;

  readonly version?: number | null;
  withVersion(version: number | null): WebpackPerformanceProfile;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): WebpackPerformanceProfile;

  readonly uiBundlerPerformanceProfile?: UiBundlerPerformanceProfile | null;
  withUiBundlerPerformanceProfile(uiBundlerPerformanceProfile: IUiBundlerPerformanceProfile | null): WebpackPerformanceProfile;

  readonly entryPointName?: string | null;
  withEntryPointName(entryPointName: string | null): WebpackPerformanceProfile;

  readonly configNames?: C3.Array<string | null>;
  withConfigNames(configNames: C3.Array<string | null> | Array<string | null>): WebpackPerformanceProfile;

  readonly bundlerRunTime?: number | null;
  withBundlerRunTime(bundlerRunTime: number | null): WebpackPerformanceProfile;

  readonly bundlingTime?: number | null;
  withBundlingTime(bundlingTime: number | null): WebpackPerformanceProfile;

  readonly webpackTime?: number | null;
  withWebpackTime(webpackTime: number | null): WebpackPerformanceProfile;

  readonly fileUploadTime?: number | null;
  withFileUploadTime(fileUploadTime: number | null): WebpackPerformanceProfile;

  readonly writeContentsTime?: number | null;
  withWriteContentsTime(writeContentsTime: number | null): WebpackPerformanceProfile;

  readonly fileNumbers?: number | null;
  withFileNumbers(fileNumbers: number | null): WebpackPerformanceProfile;

  readonly fileUploadSize?: number | null;
  withFileUploadSize(fileUploadSize: number | null): WebpackPerformanceProfile;

  readonly maxMemory?: number | null;
  withMaxMemory(maxMemory: number | null): WebpackPerformanceProfile;
}

