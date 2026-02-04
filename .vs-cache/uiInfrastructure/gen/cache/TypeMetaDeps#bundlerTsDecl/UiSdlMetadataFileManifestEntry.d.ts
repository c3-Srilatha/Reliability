export interface UiSdlMetadataFileManifestEntry {

  readonly md5?: string | null;
  withMd5(md5: string | null): UiSdlMetadataFileManifestEntry;

  readonly federatedModule?: C3.Array<string | null>;
  withFederatedModule(federatedModule: C3.Array<string | null> | Array<string | null>): UiSdlMetadataFileManifestEntry;

  readonly category?: string | null;
  withCategory(category: string | null): UiSdlMetadataFileManifestEntry;

  readonly moduleName?: string | null;
  withModuleName(moduleName: string | null): UiSdlMetadataFileManifestEntry;

  readonly package?: string | null;
  withPackage(package_: string | null): UiSdlMetadataFileManifestEntry;
}

