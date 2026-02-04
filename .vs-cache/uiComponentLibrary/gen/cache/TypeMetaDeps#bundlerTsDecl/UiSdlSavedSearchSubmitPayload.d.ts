export interface UiSdlSavedSearchSubmitPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSavedSearchSubmitPayload;

  readonly savedSearchName?: string | null;
  withSavedSearchName(savedSearchName: string | null): UiSdlSavedSearchSubmitPayload;

  readonly saveAsPrivate?: boolean;
  withSaveAsPrivate(saveAsPrivate: boolean): UiSdlSavedSearchSubmitPayload;
}

