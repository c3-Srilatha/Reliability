export interface WebpackStatus {

  readonly version?: string | null;
  withVersion(version: string | null): WebpackStatus;

  readonly hash?: string | null;
  withHash(hash: string | null): WebpackStatus;

  readonly time?: number | null;
  withTime(time: number | null): WebpackStatus;

  readonly builtAt?: DateTime | null;
  withBuiltAt(builtAt: DateTime | Date | string | null): WebpackStatus;

  readonly filteredModules?: number | null;
  withFilteredModules(filteredModules: number | null): WebpackStatus;

  readonly outputPath?: string | null;
  withOutputPath(outputPath: string | null): WebpackStatus;

  readonly entrypoints?: any | null;
  withEntrypoints(entrypoints: any | null): WebpackStatus;

  readonly assetsByChunkName?: any | null;
  withAssetsByChunkName(assetsByChunkName: any | null): WebpackStatus;

  readonly errors?: C3.Array<string | null>;
  withErrors(errors: C3.Array<string | null> | Array<string | null>): WebpackStatus;

  readonly warnings?: C3.Array<string | null>;
  withWarnings(warnings: C3.Array<string | null> | Array<string | null>): WebpackStatus;
}

