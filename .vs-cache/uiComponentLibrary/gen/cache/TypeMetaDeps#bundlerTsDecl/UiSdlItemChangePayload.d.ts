export interface UiSdlItemChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlItemChangePayload;

  readonly id: string;
  withId(id: string): UiSdlItemChangePayload;

  readonly field: string;
  withField(field: string): UiSdlItemChangePayload;

  readonly newValue?: string | null;
  withNewValue(newValue: string | null): UiSdlItemChangePayload;
}

