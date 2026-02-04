export interface UiSdlPackageExports {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPackageExports;

  readonly id: string;
  withId(id: string): UiSdlPackageExports;

  readonly exposedModules: C3.Map<string | null, boolean>;
  withExposedModules(exposedModules: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlPackageExports;
}

