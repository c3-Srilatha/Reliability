export interface LukeTestUiSdlCollectionList {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlCollectionList;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlCollectionList;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlCollectionList;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlCollectionList;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlCollectionList;

  readonly collectionListSelector?: string | null;
  withCollectionListSelector(collectionListSelector: string | null): LukeTestUiSdlCollectionList;

  readonly listItemSelector?: string | null;
  withListItemSelector(listItemSelector: string | null): LukeTestUiSdlCollectionList;

  readonly primaryValueSelector?: string | null;
  withPrimaryValueSelector(primaryValueSelector: string | null): LukeTestUiSdlCollectionList;

  readonly secondaryValueSelector?: string | null;
  withSecondaryValueSelector(secondaryValueSelector: string | null): LukeTestUiSdlCollectionList;

  readonly deleteItemOptionSelector?: string | null;
  withDeleteItemOptionSelector(deleteItemOptionSelector: string | null): LukeTestUiSdlCollectionList;
}

