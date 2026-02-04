export interface UiSdlInfrastructureConfig {

  readonly parent?: UiSdlConfig | null;
  withParent(parent: IUiSdlConfig | null): UiSdlInfrastructureConfig;

  readonly webpackMode?: string | null;
  withWebpackMode(webpackMode: string | null): UiSdlInfrastructureConfig;

  readonly bundlerMaxMem?: number | null;
  withBundlerMaxMem(bundlerMaxMem: number | null): UiSdlInfrastructureConfig;

  readonly disableExtraFilesLoader?: boolean;
  withDisableExtraFilesLoader(disableExtraFilesLoader: boolean): UiSdlInfrastructureConfig;

  readonly cacheGenFiles?: boolean;
  withCacheGenFiles(cacheGenFiles: boolean): UiSdlInfrastructureConfig;
}

