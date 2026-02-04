export interface BundlerTestAppGridReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppGridReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppGridReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppGridReact;

  readonly dataSpec?: BundlerTestAppGridDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppGridDataSpec | null): BundlerTestAppGridReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppGridReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppGridReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppGridReact;

  readonly loadedData?: any;
  withLoadedData(loadedData: any): BundlerTestAppGridReact;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppGridReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): BundlerTestAppGridReact;

  readonly placeholders?: C3.Array<UiSdlDynamicValueSpec | null>;
  withPlaceholders(placeholders: C3.Array<UiSdlDynamicValueSpec | null> | Array<IUiSdlDynamicValueSpec | null>): BundlerTestAppGridReact;

  readonly items?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withItems(items: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BundlerTestAppGridReact;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): BundlerTestAppGridReact;

  readonly pageSize?: number | null;
  withPageSize(pageSize: number | null): BundlerTestAppGridReact;

  readonly dataOffset?: number | null;
  withDataOffset(dataOffset: number | null): BundlerTestAppGridReact;

  readonly expandedItems?: any | null;
  withExpandedItems(expandedItems: any | null): BundlerTestAppGridReact;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): BundlerTestAppGridReact;

  readonly headings?: C3.Array<BundlerTestAppHeading | null>;
  withHeadings(headings: C3.Array<BundlerTestAppHeading | null> | Array<IBundlerTestAppHeading | null>): BundlerTestAppGridReact;
}

