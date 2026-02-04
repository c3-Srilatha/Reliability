export interface UiSdlTunnelConfigurationSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTunnelConfigurationSetPayload;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlTunnelConfigurationSetPayload;
}

