declare namespace Jarvis.GeneratePkgZipSpec {
  export interface Bundling {

    readonly timeout?: number | null;
    withTimeout(timeout: number | null): Jarvis.GeneratePkgZipSpec.Bundling;

    readonly uiSdlConfig?: string | null;
    withUiSdlConfig(uiSdlConfig: string | null): Jarvis.GeneratePkgZipSpec.Bundling;

    readonly uiBundlerConfig?: string | null;
    withUiBundlerConfig(uiBundlerConfig: string | null): Jarvis.GeneratePkgZipSpec.Bundling;
  }
}

