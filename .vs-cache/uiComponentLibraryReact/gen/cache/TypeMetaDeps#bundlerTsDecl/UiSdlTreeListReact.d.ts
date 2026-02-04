export interface UiSdlTreeListReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTreeListReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTreeListReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTreeListReact;

  readonly dataSpec?: UiSdlTreeListDataSpec | null;
  withDataSpec(dataSpec: IUiSdlTreeListDataSpec | null): UiSdlTreeListReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTreeListReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTreeListReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTreeListReact;

  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlTreeListReact;

  readonly filterComparator?: string | null;
  withFilterComparator(filterComparator: string | null): UiSdlTreeListReact;

  readonly isLoading?: boolean;
  withIsLoading(isLoading: boolean): UiSdlTreeListReact;

  readonly replaceArgument?: string | null;
  withReplaceArgument(replaceArgument: string | null): UiSdlTreeListReact;

  readonly dataSourceFieldMaps?: C3.Map<string | null, C3.Map<string | null, ValueType | null>>;
  withDataSourceFieldMaps(dataSourceFieldMaps: C3.Map<string | null, C3.Map<string | null, ValueType | null>> | {[key: string | null]: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}}): UiSdlTreeListReact;

  readonly activeFilters?: C3.Map<string | null, string | null>;
  withActiveFilters(activeFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlTreeListReact;

  readonly searchSuggestionsSpec?: UiSdlTreeListSearchDataSpec | null;
  withSearchSuggestionsSpec(searchSuggestionsSpec: IUiSdlTreeListSearchDataSpec | null): UiSdlTreeListReact;

  readonly searchable?: boolean;
  withSearchable(searchable: boolean): UiSdlTreeListReact;

  readonly noSearchResultsMessage?: string | null;
  withNoSearchResultsMessage(noSearchResultsMessage: string | null): UiSdlTreeListReact;

  readonly topLevelNodes?: C3.Array<UiSdlTreeListNode | null>;
  withTopLevelNodes(topLevelNodes: C3.Array<UiSdlTreeListNode | null> | Array<IUiSdlTreeListNode | null>): UiSdlTreeListReact;

  readonly searchString?: string | null;
  withSearchString(searchString: string | null): UiSdlTreeListReact;

  readonly searchSuggestions?: C3.Array<string | null>;
  withSearchSuggestions(searchSuggestions: C3.Array<string | null> | Array<string | null>): UiSdlTreeListReact;

  readonly expandedParentList?: C3.Array<string | null>;
  withExpandedParentList(expandedParentList: C3.Array<string | null> | Array<string | null>): UiSdlTreeListReact;

  readonly disabledNodeList?: C3.Array<string | null>;
  withDisabledNodeList(disabledNodeList: C3.Array<string | null> | Array<string | null>): UiSdlTreeListReact;

  readonly itemActions?: C3.Array<UiSdlTreeListItemAction | null>;
  withItemActions(itemActions: C3.Array<UiSdlTreeListItemAction | null> | Array<IUiSdlTreeListItemAction | null>): UiSdlTreeListReact;

  readonly initiallyExpanded?: boolean;
  withInitiallyExpanded(initiallyExpanded: boolean): UiSdlTreeListReact;
}

