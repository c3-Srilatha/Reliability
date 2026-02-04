export interface UiSdlInAppDocShowHidePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlInAppDocShowHidePayload;

  readonly show?: boolean;
  withShow(show: boolean): UiSdlInAppDocShowHidePayload;
}

