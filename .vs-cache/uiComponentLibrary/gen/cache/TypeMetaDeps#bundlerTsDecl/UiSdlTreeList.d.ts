export interface UiSdlTreeList {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTreeList;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTreeList;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTreeList;

  readonly dataSpec?: UiSdlTreeListDataSpec | null;
  withDataSpec(dataSpec: IUiSdlTreeListDataSpec | null): UiSdlTreeList;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTreeList;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTreeList;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTreeList;

  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlTreeList;

  readonly filterComparator?: string | null;
  withFilterComparator(filterComparator: string | null): UiSdlTreeList;

  readonly isLoading?: boolean;
  withIsLoading(isLoading: boolean): UiSdlTreeList;

  readonly replaceArgument?: string | null;
  withReplaceArgument(replaceArgument: string | null): UiSdlTreeList;

  readonly dataSourceFieldMaps?: C3.Map<string | null, C3.Map<string | null, ValueType | null>>;
  withDataSourceFieldMaps(dataSourceFieldMaps: C3.Map<string | null, C3.Map<string | null, ValueType | null>> | {[key: string | null]: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}}): UiSdlTreeList;

  readonly activeFilters?: C3.Map<string | null, string | null>;
  withActiveFilters(activeFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlTreeList;

  readonly searchSuggestionsSpec?: UiSdlTreeListSearchDataSpec | null;
  withSearchSuggestionsSpec(searchSuggestionsSpec: IUiSdlTreeListSearchDataSpec | null): UiSdlTreeList;

  readonly searchable?: boolean;
  withSearchable(searchable: boolean): UiSdlTreeList;

  readonly noSearchResultsMessage?: string | null;
  withNoSearchResultsMessage(noSearchResultsMessage: string | null): UiSdlTreeList;

  readonly topLevelNodes?: C3.Array<UiSdlTreeListNode | null>;
  withTopLevelNodes(topLevelNodes: C3.Array<UiSdlTreeListNode | null> | Array<IUiSdlTreeListNode | null>): UiSdlTreeList;

  readonly searchString?: string | null;
  withSearchString(searchString: string | null): UiSdlTreeList;

  readonly searchSuggestions?: C3.Array<string | null>;
  withSearchSuggestions(searchSuggestions: C3.Array<string | null> | Array<string | null>): UiSdlTreeList;

  readonly expandedParentList?: C3.Array<string | null>;
  withExpandedParentList(expandedParentList: C3.Array<string | null> | Array<string | null>): UiSdlTreeList;

  readonly disabledNodeList?: C3.Array<string | null>;
  withDisabledNodeList(disabledNodeList: C3.Array<string | null> | Array<string | null>): UiSdlTreeList;

  readonly itemActions?: C3.Array<UiSdlTreeListItemAction | null>;
  withItemActions(itemActions: C3.Array<UiSdlTreeListItemAction | null> | Array<IUiSdlTreeListItemAction | null>): UiSdlTreeList;

  readonly initiallyExpanded?: boolean;
  withInitiallyExpanded(initiallyExpanded: boolean): UiSdlTreeList;
}

