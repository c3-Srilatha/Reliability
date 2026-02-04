export interface GraphFilter {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): GraphFilter;

  readonly id?: string | null;
  withId(id: string | null): GraphFilter;

  readonly name?: string | null;
  withName(name: string | null): GraphFilter;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): GraphFilter;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): GraphFilter;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): GraphFilter;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): GraphFilter;

  readonly graphId?: string | null;
  withGraphId(graphId: string | null): GraphFilter;

  readonly sections?: C3.Array<GraphFilterSection | null>;
  withSections(sections: C3.Array<GraphFilterSection | null> | Array<IGraphFilterSection | null>): GraphFilter;

  readonly filterButtonTitle?: string | null;
  withFilterButtonTitle(filterButtonTitle: string | null): GraphFilter;

  readonly selectedFilters?: C3.Map<string | null, boolean>;
  withSelectedFilters(selectedFilters: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): GraphFilter;

  readonly isExpanded?: boolean;
  withIsExpanded(isExpanded: boolean): GraphFilter;
}

