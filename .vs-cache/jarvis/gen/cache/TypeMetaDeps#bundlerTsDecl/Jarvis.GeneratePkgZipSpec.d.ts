declare namespace Jarvis {
  export interface GeneratePkgZipSpec {

    readonly pkgName: string;
    withPkgName(pkgName: string): Jarvis.GeneratePkgZipSpec;

    readonly pkgVersion: string;
    withPkgVersion(pkgVersion: string): Jarvis.GeneratePkgZipSpec;

    readonly zipLocation: string;
    withZipLocation(zipLocation: string): Jarvis.GeneratePkgZipSpec;

    readonly rootSourceContentOnly?: boolean;
    withRootSourceContentOnly(rootSourceContentOnly: boolean): Jarvis.GeneratePkgZipSpec;

    readonly doValidation?: boolean;
    withDoValidation(doValidation: boolean): Jarvis.GeneratePkgZipSpec;

    readonly shouldInstrument?: boolean;
    withShouldInstrument(shouldInstrument: boolean): Jarvis.GeneratePkgZipSpec;

    readonly devBundling?: Jarvis.GeneratePkgZipSpec.Bundling | null;
    withDevBundling(devBundling: IJarvis.GeneratePkgZipSpec.Bundling | null): Jarvis.GeneratePkgZipSpec;

    readonly prodBundling?: Jarvis.GeneratePkgZipSpec.Bundling | null;
    withProdBundling(prodBundling: IJarvis.GeneratePkgZipSpec.Bundling | null): Jarvis.GeneratePkgZipSpec;

    readonly buildDocIndex?: boolean;
    withBuildDocIndex(buildDocIndex: boolean): Jarvis.GeneratePkgZipSpec;

    readonly resolvedDependencies: C3.Map<string | null, string | null>;
    withResolvedDependencies(resolvedDependencies: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): Jarvis.GeneratePkgZipSpec;
  }
}

