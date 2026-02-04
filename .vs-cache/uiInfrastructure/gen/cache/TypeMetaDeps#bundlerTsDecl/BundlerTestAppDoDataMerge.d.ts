export interface BundlerTestAppDoDataMerge {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppDoDataMerge;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppDoDataMerge;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppDoDataMerge;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppDoDataMerge;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppDoDataMerge;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppDoDataMerge;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppDoDataMerge;
}

