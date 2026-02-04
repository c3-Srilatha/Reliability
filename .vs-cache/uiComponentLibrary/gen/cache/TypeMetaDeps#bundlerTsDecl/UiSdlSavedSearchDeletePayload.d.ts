export interface UiSdlSavedSearchDeletePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSavedSearchDeletePayload;

  readonly savedSearch?: UiSdlSavedSearch | null;
  withSavedSearch(savedSearch: IUiSdlSavedSearch | null): UiSdlSavedSearchDeletePayload;
}

