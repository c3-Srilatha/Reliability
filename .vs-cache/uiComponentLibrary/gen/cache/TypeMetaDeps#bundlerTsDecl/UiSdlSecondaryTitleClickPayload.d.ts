export interface UiSdlSecondaryTitleClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSecondaryTitleClickPayload;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlSecondaryTitleClickPayload;
}

