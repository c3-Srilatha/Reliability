export interface UiSdlClickColumnHeaderPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlClickColumnHeaderPayload;

  readonly columnField?: string | null;
  withColumnField(columnField: string | null): UiSdlClickColumnHeaderPayload;
}

