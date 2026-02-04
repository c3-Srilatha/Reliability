export interface UiSdlPluggableTypesLoader {

  readonly rootPackage?: Pkg | null;
  withRootPackage(rootPackage: IPkg | null): UiSdlPluggableTypesLoader;
}

