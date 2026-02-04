export interface UiSdlHiddenAddonUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlHiddenAddonUpdatePayload;

  readonly addOnIds?: C3.Array<string | null>;
  withAddOnIds(addOnIds: C3.Array<string | null> | Array<string | null>): UiSdlHiddenAddonUpdatePayload;

  readonly mergeWithExisting?: boolean;
  withMergeWithExisting(mergeWithExisting: boolean): UiSdlHiddenAddonUpdatePayload;
}

