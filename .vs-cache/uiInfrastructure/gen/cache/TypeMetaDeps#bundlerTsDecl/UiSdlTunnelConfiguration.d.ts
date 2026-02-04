export interface UiSdlTunnelConfiguration {

  readonly url?: string | null;
  withUrl(url: string | null): UiSdlTunnelConfiguration;

  readonly tenant?: string | null;
  withTenant(tenant: string | null): UiSdlTunnelConfiguration;

  readonly tag?: string | null;
  withTag(tag: string | null): UiSdlTunnelConfiguration;

  readonly to?: string | null;
  withTo(to: string | null): UiSdlTunnelConfiguration;

  readonly timeoutSecs?: number | null;
  withTimeoutSecs(timeoutSecs: number | null): UiSdlTunnelConfiguration;

  readonly authorization?: string | null;
  withAuthorization(authorization: string | null): UiSdlTunnelConfiguration;

  readonly keepData?: boolean;
  withKeepData(keepData: boolean): UiSdlTunnelConfiguration;
}

