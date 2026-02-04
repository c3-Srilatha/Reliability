export interface StudioSearchBar {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioSearchBar;

  readonly id?: string | null;
  withId(id: string | null): StudioSearchBar;

  readonly name?: string | null;
  withName(name: string | null): StudioSearchBar;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioSearchBar;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioSearchBar;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioSearchBar;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioSearchBar;

  readonly focused?: boolean;
  withFocused(focused: boolean): StudioSearchBar;

  readonly selectedOptionValue?: string | null;
  withSelectedOptionValue(selectedOptionValue: string | null): StudioSearchBar;

  readonly options?: C3.Map<string | null, StudioSearchBarOption | null>;
  withOptions(options: C3.Map<string | null, StudioSearchBarOption | null> | {[key: string | null]: IStudioSearchBarOption | null}): StudioSearchBar;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): StudioSearchBar;

  readonly sortAlphabetically?: boolean;
  withSortAlphabetically(sortAlphabetically: boolean): StudioSearchBar;

  readonly translateOptionText?: boolean;
  withTranslateOptionText(translateOptionText: boolean): StudioSearchBar;
}

