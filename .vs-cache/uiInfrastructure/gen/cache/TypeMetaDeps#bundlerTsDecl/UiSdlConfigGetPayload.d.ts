export interface UiSdlConfigGetPayload {

  readonly siteId: string;
  withSiteId(siteId: string): UiSdlConfigGetPayload;

  readonly typeName: string;
  withTypeName(typeName: string): UiSdlConfigGetPayload;

  readonly configPath: string;
  withConfigPath(configPath: string): UiSdlConfigGetPayload;

  readonly configId?: string | null;
  withConfigId(configId: string | null): UiSdlConfigGetPayload;
}

