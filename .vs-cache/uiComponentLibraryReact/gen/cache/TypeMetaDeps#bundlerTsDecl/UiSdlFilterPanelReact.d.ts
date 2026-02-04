export interface UiSdlFilterPanelReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFilterPanelReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFilterPanelReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFilterPanelReact;

  readonly dataSpec?: UiSdlFilterPanelDataSpec | null;
  withDataSpec(dataSpec: IUiSdlFilterPanelDataSpec | null): UiSdlFilterPanelReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFilterPanelReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFilterPanelReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFilterPanelReact;

  readonly title?: UiSdlComponentTitle | null;
  withTitle(title: IUiSdlComponentTitle | null): UiSdlFilterPanelReact;

  readonly formFieldValues?: any | null;
  withFormFieldValues(formFieldValues: any | null): UiSdlFilterPanelReact;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlFilterPanelReact;

  readonly internalDataSpec?: UiSdlFilterPanelInternalDataSpec | null;
  withInternalDataSpec(internalDataSpec: IUiSdlFilterPanelInternalDataSpec | null): UiSdlFilterPanelReact;

  readonly internalData?: Obj | null;
  withInternalData(internalData: IObj | null): UiSdlFilterPanelReact;

  readonly filterSpec?: string | null;
  withFilterSpec(filterSpec: string | null): UiSdlFilterPanelReact;

  readonly filterButtonText?: string | null;
  withFilterButtonText(filterButtonText: string | null): UiSdlFilterPanelReact;

  readonly clearButtonText?: string | null;
  withClearButtonText(clearButtonText: string | null): UiSdlFilterPanelReact;

  readonly deleteSavedSearchesError?: boolean;
  withDeleteSavedSearchesError(deleteSavedSearchesError: boolean): UiSdlFilterPanelReact;

  readonly deletedSavedSearches?: C3.Array<UiSdlSavedSearch | null>;
  withDeletedSavedSearches(deletedSavedSearches: C3.Array<UiSdlSavedSearch | null> | Array<IUiSdlSavedSearch | null>): UiSdlFilterPanelReact;

  readonly renamedSavedSearches?: C3.Map<string | null, string | null>;
  withRenamedSavedSearches(renamedSavedSearches: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlFilterPanelReact;

  readonly saveSearchButtonText?: string | null;
  withSaveSearchButtonText(saveSearchButtonText: string | null): UiSdlFilterPanelReact;

  readonly cancelSaveSearchText?: string | null;
  withCancelSaveSearchText(cancelSaveSearchText: string | null): UiSdlFilterPanelReact;

  readonly saveSearchSubtitle?: string | null;
  withSaveSearchSubtitle(saveSearchSubtitle: string | null): UiSdlFilterPanelReact;

  readonly saveSearchTitle?: string | null;
  withSaveSearchTitle(saveSearchTitle: string | null): UiSdlFilterPanelReact;

  readonly renameSearchPanelSubtitle?: string | null;
  withRenameSearchPanelSubtitle(renameSearchPanelSubtitle: string | null): UiSdlFilterPanelReact;

  readonly renameSearchPanelTitle?: string | null;
  withRenameSearchPanelTitle(renameSearchPanelTitle: string | null): UiSdlFilterPanelReact;

  readonly saveSearchFieldLabel?: string | null;
  withSaveSearchFieldLabel(saveSearchFieldLabel: string | null): UiSdlFilterPanelReact;

  readonly advancedFieldLabel?: string | null;
  withAdvancedFieldLabel(advancedFieldLabel: string | null): UiSdlFilterPanelReact;

  readonly loadSearchPanelSubtitle?: string | null;
  withLoadSearchPanelSubtitle(loadSearchPanelSubtitle: string | null): UiSdlFilterPanelReact;

  readonly loadSearchPanelTitle?: string | null;
  withLoadSearchPanelTitle(loadSearchPanelTitle: string | null): UiSdlFilterPanelReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlFilterPanelReact;

  readonly cancelLoadSearchButtonText?: string | null;
  withCancelLoadSearchButtonText(cancelLoadSearchButtonText: string | null): UiSdlFilterPanelReact;

  readonly saveAsPrivateToggleText?: string | null;
  withSaveAsPrivateToggleText(saveAsPrivateToggleText: string | null): UiSdlFilterPanelReact;

  readonly settingsMenu?: UiSdlFilterPanelSettingsMenu | null;
  withSettingsMenu(settingsMenu: IUiSdlFilterPanelSettingsMenu | null): UiSdlFilterPanelReact;
}

