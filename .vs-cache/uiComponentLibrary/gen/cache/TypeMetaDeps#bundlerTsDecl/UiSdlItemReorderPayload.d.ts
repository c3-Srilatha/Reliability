export interface UiSdlItemReorderPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlItemReorderPayload;

  readonly listId: string;
  withListId(listId: string): UiSdlItemReorderPayload;

  readonly fromIndex: number;
  withFromIndex(fromIndex: number): UiSdlItemReorderPayload;

  readonly toIndex: number;
  withToIndex(toIndex: number): UiSdlItemReorderPayload;
}

