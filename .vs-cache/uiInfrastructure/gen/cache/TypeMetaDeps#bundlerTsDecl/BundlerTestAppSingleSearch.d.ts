export interface BundlerTestAppSingleSearch {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppSingleSearch;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppSingleSearch;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppSingleSearch;

  readonly dataSpec?: BundlerTestAppSingleSearchDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppSingleSearchDataSpec | null): BundlerTestAppSingleSearch;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppSingleSearch;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppSingleSearch;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppSingleSearch;
}

