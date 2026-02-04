export interface UiSdlAtomicButtonSetDisabledPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlAtomicButtonSetDisabledPayload;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlAtomicButtonSetDisabledPayload;
}

