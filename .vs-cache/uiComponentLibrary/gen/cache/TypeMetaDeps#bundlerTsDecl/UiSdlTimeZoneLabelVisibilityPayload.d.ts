export interface UiSdlTimeZoneLabelVisibilityPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTimeZoneLabelVisibilityPayload;

  readonly showLabel: boolean;
  withShowLabel(showLabel: boolean): UiSdlTimeZoneLabelVisibilityPayload;
}

