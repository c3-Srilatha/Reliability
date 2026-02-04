export interface BundlerOptions {

  readonly enableSse?: boolean;
  withEnableSse(enableSse: boolean): BundlerOptions;

  readonly setup?: boolean;
  withSetup(setup: boolean): BundlerOptions;

  readonly watcher?: boolean;
  withWatcher(watcher: boolean): BundlerOptions;

  readonly bundler?: boolean;
  withBundler(bundler: boolean): BundlerOptions;

  readonly skipInitialLoader?: boolean;
  withSkipInitialLoader(skipInitialLoader: boolean): BundlerOptions;

  readonly port?: boolean;
  withPort(port: boolean): BundlerOptions;

  readonly uiNamespace?: string | null;
  withUiNamespace(uiNamespace: string | null): BundlerOptions;

  readonly withTests?: boolean;
  withWithTests(withTests: boolean): BundlerOptions;

  readonly codeCoverage?: boolean;
  withCodeCoverage(codeCoverage: boolean): BundlerOptions;

  readonly mode?: string | null;
  withMode(mode: string | null): BundlerOptions;

  readonly minLogLevel?: string | null;
  withMinLogLevel(minLogLevel: string | null): BundlerOptions;

  readonly workDir?: string | null;
  withWorkDir(workDir: string | null): BundlerOptions;

  readonly outDir?: string | null;
  withOutDir(outDir: string | null): BundlerOptions;

  readonly logDir?: string | null;
  withLogDir(logDir: string | null): BundlerOptions;

  readonly emitToServer?: boolean;
  withEmitToServer(emitToServer: boolean): BundlerOptions;

  readonly configNames?: string | null;
  withConfigNames(configNames: string | null): BundlerOptions;

  readonly enableBundleAnalyzer?: boolean;
  withEnableBundleAnalyzer(enableBundleAnalyzer: boolean): BundlerOptions;
}

