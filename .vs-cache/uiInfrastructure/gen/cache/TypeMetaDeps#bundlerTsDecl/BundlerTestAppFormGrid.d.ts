export interface BundlerTestAppFormGrid {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppFormGrid;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppFormGrid;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppFormGrid;

  readonly dataSpec?: BundlerTestAppFormGridDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppFormGridDataSpec | null): BundlerTestAppFormGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppFormGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppFormGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppFormGrid;

  readonly loadedData?: any;
  withLoadedData(loadedData: any): BundlerTestAppFormGrid;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppFormGrid;
}

