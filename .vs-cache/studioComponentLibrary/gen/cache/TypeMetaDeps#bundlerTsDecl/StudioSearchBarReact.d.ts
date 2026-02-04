export interface StudioSearchBarReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioSearchBarReact;

  readonly id?: string | null;
  withId(id: string | null): StudioSearchBarReact;

  readonly name?: string | null;
  withName(name: string | null): StudioSearchBarReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioSearchBarReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioSearchBarReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioSearchBarReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioSearchBarReact;

  readonly focused?: boolean;
  withFocused(focused: boolean): StudioSearchBarReact;

  readonly selectedOptionValue?: string | null;
  withSelectedOptionValue(selectedOptionValue: string | null): StudioSearchBarReact;

  readonly options?: C3.Map<string | null, StudioSearchBarOption | null>;
  withOptions(options: C3.Map<string | null, StudioSearchBarOption | null> | {[key: string | null]: IStudioSearchBarOption | null}): StudioSearchBarReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): StudioSearchBarReact;

  readonly sortAlphabetically?: boolean;
  withSortAlphabetically(sortAlphabetically: boolean): StudioSearchBarReact;

  readonly translateOptionText?: boolean;
  withTranslateOptionText(translateOptionText: boolean): StudioSearchBarReact;
}

