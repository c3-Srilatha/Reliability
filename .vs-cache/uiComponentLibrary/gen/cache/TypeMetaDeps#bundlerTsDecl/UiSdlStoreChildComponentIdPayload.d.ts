export interface UiSdlStoreChildComponentIdPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlStoreChildComponentIdPayload;

  readonly childId?: string | null;
  withChildId(childId: string | null): UiSdlStoreChildComponentIdPayload;
}

