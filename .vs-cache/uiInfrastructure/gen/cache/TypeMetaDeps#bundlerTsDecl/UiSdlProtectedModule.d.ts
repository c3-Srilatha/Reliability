export interface UiSdlProtectedModule {

  readonly packageName?: string | null;
  withPackageName(packageName: string | null): UiSdlProtectedModule;

  readonly federatedModules?: C3.Array<string | null>;
  withFederatedModules(federatedModules: C3.Array<string | null> | Array<string | null>): UiSdlProtectedModule;

  readonly componentTypeNames?: C3.Array<string | null>;
  withComponentTypeNames(componentTypeNames: C3.Array<string | null> | Array<string | null>): UiSdlProtectedModule;

  readonly publicKey?: string | null;
  withPublicKey(publicKey: string | null): UiSdlProtectedModule;
}

