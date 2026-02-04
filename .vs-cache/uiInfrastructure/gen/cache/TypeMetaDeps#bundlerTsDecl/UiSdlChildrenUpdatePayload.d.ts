export interface UiSdlChildrenUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlChildrenUpdatePayload;

  readonly childIds?: C3.Array<string | null>;
  withChildIds(childIds: C3.Array<string | null> | Array<string | null>): UiSdlChildrenUpdatePayload;

  readonly componentRefIds?: C3.Array<string | null>;
  withComponentRefIds(componentRefIds: C3.Array<string | null> | Array<string | null>): UiSdlChildrenUpdatePayload;

  readonly orderedChildrenIds?: C3.Array<string | null>;
  withOrderedChildrenIds(orderedChildrenIds: C3.Array<string | null> | Array<string | null>): UiSdlChildrenUpdatePayload;
}

