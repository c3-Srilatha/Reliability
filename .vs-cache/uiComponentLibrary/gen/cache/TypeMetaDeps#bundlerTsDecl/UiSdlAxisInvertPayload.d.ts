export interface UiSdlAxisInvertPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlAxisInvertPayload;

  readonly axisName?: string | null;
  withAxisName(axisName: string | null): UiSdlAxisInvertPayload;
}

