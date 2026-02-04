export interface UiSdlAxisReorderPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlAxisReorderPayload;

  readonly fromIndex?: number | null;
  withFromIndex(fromIndex: number | null): UiSdlAxisReorderPayload;

  readonly toIndex?: number | null;
  withToIndex(toIndex: number | null): UiSdlAxisReorderPayload;
}

