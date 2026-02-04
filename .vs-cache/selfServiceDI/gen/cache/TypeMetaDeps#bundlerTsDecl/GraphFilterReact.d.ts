export interface GraphFilterReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): GraphFilterReact;

  readonly id?: string | null;
  withId(id: string | null): GraphFilterReact;

  readonly name?: string | null;
  withName(name: string | null): GraphFilterReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): GraphFilterReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): GraphFilterReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): GraphFilterReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): GraphFilterReact;

  readonly graphId?: string | null;
  withGraphId(graphId: string | null): GraphFilterReact;

  readonly sections?: C3.Array<GraphFilterSection | null>;
  withSections(sections: C3.Array<GraphFilterSection | null> | Array<IGraphFilterSection | null>): GraphFilterReact;

  readonly filterButtonTitle?: string | null;
  withFilterButtonTitle(filterButtonTitle: string | null): GraphFilterReact;

  readonly selectedFilters?: C3.Map<string | null, boolean>;
  withSelectedFilters(selectedFilters: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): GraphFilterReact;

  readonly isExpanded?: boolean;
  withIsExpanded(isExpanded: boolean): GraphFilterReact;
}

