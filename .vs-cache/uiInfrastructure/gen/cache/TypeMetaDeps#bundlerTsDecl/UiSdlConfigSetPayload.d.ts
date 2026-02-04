export interface UiSdlConfigSetPayload {

  readonly siteId: string;
  withSiteId(siteId: string): UiSdlConfigSetPayload;

  readonly key?: string | null;
  withKey(key: string | null): UiSdlConfigSetPayload;

  readonly value?: any;
  withValue(value: any): UiSdlConfigSetPayload;
}

