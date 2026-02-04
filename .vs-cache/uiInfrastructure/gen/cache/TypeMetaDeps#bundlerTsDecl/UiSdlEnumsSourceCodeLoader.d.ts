export interface UiSdlEnumsSourceCodeLoader {

  readonly enumsToGenerate?: C3.Map<string | null, boolean>;
  withEnumsToGenerate(enumsToGenerate: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlEnumsSourceCodeLoader;

  readonly rootPackage?: Pkg | null;
  withRootPackage(rootPackage: IPkg | null): UiSdlEnumsSourceCodeLoader;
}

