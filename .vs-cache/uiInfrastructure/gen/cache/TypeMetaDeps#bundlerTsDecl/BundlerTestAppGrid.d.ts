export interface BundlerTestAppGrid {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppGrid;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppGrid;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppGrid;

  readonly dataSpec?: BundlerTestAppGridDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppGridDataSpec | null): BundlerTestAppGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppGrid;

  readonly loadedData?: any;
  withLoadedData(loadedData: any): BundlerTestAppGrid;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppGrid;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): BundlerTestAppGrid;

  readonly placeholders?: C3.Array<UiSdlDynamicValueSpec | null>;
  withPlaceholders(placeholders: C3.Array<UiSdlDynamicValueSpec | null> | Array<IUiSdlDynamicValueSpec | null>): BundlerTestAppGrid;

  readonly items?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withItems(items: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BundlerTestAppGrid;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): BundlerTestAppGrid;

  readonly pageSize?: number | null;
  withPageSize(pageSize: number | null): BundlerTestAppGrid;

  readonly dataOffset?: number | null;
  withDataOffset(dataOffset: number | null): BundlerTestAppGrid;

  readonly expandedItems?: any | null;
  withExpandedItems(expandedItems: any | null): BundlerTestAppGrid;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): BundlerTestAppGrid;

  readonly headings?: C3.Array<BundlerTestAppHeading | null>;
  withHeadings(headings: C3.Array<BundlerTestAppHeading | null> | Array<IBundlerTestAppHeading | null>): BundlerTestAppGrid;
}

