export interface UiSdlSavedSearchRenamePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSavedSearchRenamePayload;

  readonly savedSearch: UiSdlSavedSearch;
  withSavedSearch(savedSearch: IUiSdlSavedSearch): UiSdlSavedSearchRenamePayload;

  readonly name: string;
  withName(name: string): UiSdlSavedSearchRenamePayload;
}

