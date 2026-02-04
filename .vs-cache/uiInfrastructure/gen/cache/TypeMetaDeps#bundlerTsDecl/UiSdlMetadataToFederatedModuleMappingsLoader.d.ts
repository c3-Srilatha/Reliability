export interface UiSdlMetadataToFederatedModuleMappingsLoader {

  readonly MODULE_SEPARATOR?: string | null;
  withMODULE_SEPARATOR(MODULE_SEPARATOR: string | null): UiSdlMetadataToFederatedModuleMappingsLoader;

  readonly MAX_PER_MODULE?: number | null;
  withMAX_PER_MODULE(MAX_PER_MODULE: number | null): UiSdlMetadataToFederatedModuleMappingsLoader;
}

