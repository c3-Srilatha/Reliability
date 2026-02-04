export interface BundlerTestAppDoDataMergeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppDoDataMergeReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppDoDataMergeReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppDoDataMergeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppDoDataMergeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppDoDataMergeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppDoDataMergeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppDoDataMergeReact;
}

