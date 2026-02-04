export interface UiSdlFilterPanel {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFilterPanel;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFilterPanel;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFilterPanel;

  readonly dataSpec?: UiSdlFilterPanelDataSpec | null;
  withDataSpec(dataSpec: IUiSdlFilterPanelDataSpec | null): UiSdlFilterPanel;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFilterPanel;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFilterPanel;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFilterPanel;

  readonly title?: UiSdlComponentTitle | null;
  withTitle(title: IUiSdlComponentTitle | null): UiSdlFilterPanel;

  readonly formFieldValues?: any | null;
  withFormFieldValues(formFieldValues: any | null): UiSdlFilterPanel;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlFilterPanel;

  readonly internalDataSpec?: UiSdlFilterPanelInternalDataSpec | null;
  withInternalDataSpec(internalDataSpec: IUiSdlFilterPanelInternalDataSpec | null): UiSdlFilterPanel;

  readonly internalData?: Obj | null;
  withInternalData(internalData: IObj | null): UiSdlFilterPanel;

  readonly filterSpec?: string | null;
  withFilterSpec(filterSpec: string | null): UiSdlFilterPanel;

  readonly filterButtonText?: string | null;
  withFilterButtonText(filterButtonText: string | null): UiSdlFilterPanel;

  readonly clearButtonText?: string | null;
  withClearButtonText(clearButtonText: string | null): UiSdlFilterPanel;

  readonly deleteSavedSearchesError?: boolean;
  withDeleteSavedSearchesError(deleteSavedSearchesError: boolean): UiSdlFilterPanel;

  readonly deletedSavedSearches?: C3.Array<UiSdlSavedSearch | null>;
  withDeletedSavedSearches(deletedSavedSearches: C3.Array<UiSdlSavedSearch | null> | Array<IUiSdlSavedSearch | null>): UiSdlFilterPanel;

  readonly renamedSavedSearches?: C3.Map<string | null, string | null>;
  withRenamedSavedSearches(renamedSavedSearches: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlFilterPanel;

  readonly saveSearchButtonText?: string | null;
  withSaveSearchButtonText(saveSearchButtonText: string | null): UiSdlFilterPanel;

  readonly cancelSaveSearchText?: string | null;
  withCancelSaveSearchText(cancelSaveSearchText: string | null): UiSdlFilterPanel;

  readonly saveSearchSubtitle?: string | null;
  withSaveSearchSubtitle(saveSearchSubtitle: string | null): UiSdlFilterPanel;

  readonly saveSearchTitle?: string | null;
  withSaveSearchTitle(saveSearchTitle: string | null): UiSdlFilterPanel;

  readonly renameSearchPanelSubtitle?: string | null;
  withRenameSearchPanelSubtitle(renameSearchPanelSubtitle: string | null): UiSdlFilterPanel;

  readonly renameSearchPanelTitle?: string | null;
  withRenameSearchPanelTitle(renameSearchPanelTitle: string | null): UiSdlFilterPanel;

  readonly saveSearchFieldLabel?: string | null;
  withSaveSearchFieldLabel(saveSearchFieldLabel: string | null): UiSdlFilterPanel;

  readonly advancedFieldLabel?: string | null;
  withAdvancedFieldLabel(advancedFieldLabel: string | null): UiSdlFilterPanel;

  readonly loadSearchPanelSubtitle?: string | null;
  withLoadSearchPanelSubtitle(loadSearchPanelSubtitle: string | null): UiSdlFilterPanel;

  readonly loadSearchPanelTitle?: string | null;
  withLoadSearchPanelTitle(loadSearchPanelTitle: string | null): UiSdlFilterPanel;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlFilterPanel;

  readonly cancelLoadSearchButtonText?: string | null;
  withCancelLoadSearchButtonText(cancelLoadSearchButtonText: string | null): UiSdlFilterPanel;

  readonly saveAsPrivateToggleText?: string | null;
  withSaveAsPrivateToggleText(saveAsPrivateToggleText: string | null): UiSdlFilterPanel;

  readonly settingsMenu?: UiSdlFilterPanelSettingsMenu | null;
  withSettingsMenu(settingsMenu: IUiSdlFilterPanelSettingsMenu | null): UiSdlFilterPanel;
}

