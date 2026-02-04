export interface UiSdlReadonlySetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlReadonlySetPayload;

  readonly readonly: boolean;
  withReadonly(readonly: boolean): UiSdlReadonlySetPayload;
}

