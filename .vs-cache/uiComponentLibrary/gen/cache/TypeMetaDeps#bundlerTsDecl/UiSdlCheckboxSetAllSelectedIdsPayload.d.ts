export interface UiSdlCheckboxSetAllSelectedIdsPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlCheckboxSetAllSelectedIdsPayload;

  readonly itemIds?: C3.Array<string | null>;
  withItemIds(itemIds: C3.Array<string | null> | Array<string | null>): UiSdlCheckboxSetAllSelectedIdsPayload;
}

