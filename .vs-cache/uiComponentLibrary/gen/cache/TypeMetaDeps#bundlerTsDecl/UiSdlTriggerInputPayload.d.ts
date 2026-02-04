export interface UiSdlTriggerInputPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTriggerInputPayload;

  readonly field?: string | null;
  withField(field: string | null): UiSdlTriggerInputPayload;
}

