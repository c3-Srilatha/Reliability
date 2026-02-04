export interface UiSdlColumnsReorderedPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlColumnsReorderedPayload;

  readonly columnsOrder?: C3.Map<string | null, number | null>;
  withColumnsOrder(columnsOrder: C3.Map<string | null, number | null> | {[key: string | null]: number | null}): UiSdlColumnsReorderedPayload;
}

