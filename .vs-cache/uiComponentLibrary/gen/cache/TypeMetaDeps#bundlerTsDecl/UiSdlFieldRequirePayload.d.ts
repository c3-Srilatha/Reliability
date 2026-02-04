export interface UiSdlFieldRequirePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFieldRequirePayload;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlFieldRequirePayload;

  readonly required?: boolean;
  withRequired(required: boolean): UiSdlFieldRequirePayload;
}

