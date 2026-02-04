export interface LoadingListItem {

  readonly itemKey?: string | null;
  withItemKey(itemKey: string | null): LoadingListItem;

  readonly loadingText?: string | null | UiSdlDynamicValueSpec | null | null;
  withLoadingText(loadingText: string | null | IUiSdlDynamicValueSpec | null | null): LoadingListItem;
}

