export interface UiSdlFieldSetActionButtonStateChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFieldSetActionButtonStateChangePayload;

  readonly actionSuffix: string;
  withActionSuffix(actionSuffix: string): UiSdlFieldSetActionButtonStateChangePayload;

  readonly disable?: boolean;
  withDisable(disable: boolean): UiSdlFieldSetActionButtonStateChangePayload;
}

