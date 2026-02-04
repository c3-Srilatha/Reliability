export interface UiSdlTunnelConfigurationSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTunnelConfigurationSetAction;

  readonly payload?: UiSdlTunnelConfigurationSetPayload | null;
  withPayload(payload: IUiSdlTunnelConfigurationSetPayload | null): UiSdlTunnelConfigurationSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTunnelConfigurationSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTunnelConfigurationSetAction;
}

