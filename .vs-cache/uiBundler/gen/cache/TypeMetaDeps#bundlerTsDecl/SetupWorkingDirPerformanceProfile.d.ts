export interface SetupWorkingDirPerformanceProfile {

  readonly id: string;
  withId(id: string): SetupWorkingDirPerformanceProfile;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): SetupWorkingDirPerformanceProfile;

  readonly name?: string | null;
  withName(name: string | null): SetupWorkingDirPerformanceProfile;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SetupWorkingDirPerformanceProfile;

  readonly version?: number | null;
  withVersion(version: number | null): SetupWorkingDirPerformanceProfile;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): SetupWorkingDirPerformanceProfile;

  readonly uiBundlerPerformanceProfile: UiBundlerPerformanceProfile;
  withUiBundlerPerformanceProfile(uiBundlerPerformanceProfile: IUiBundlerPerformanceProfile): SetupWorkingDirPerformanceProfile;

  readonly configPath: string;
  withConfigPath(configPath: string): SetupWorkingDirPerformanceProfile;

  readonly setupWorkingDirTime?: number | null;
  withSetupWorkingDirTime(setupWorkingDirTime: number | null): SetupWorkingDirPerformanceProfile;
}

