export interface BundlerTestAppSearchFilter {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppSearchFilter;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppSearchFilter;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppSearchFilter;

  readonly dataSpec?: BundlerTestAppSingleSearchDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppSingleSearchDataSpec | null): BundlerTestAppSearchFilter;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppSearchFilter;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppSearchFilter;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppSearchFilter;

  readonly options?: C3.Array<Obj | null>;
  withOptions(options: C3.Array<Obj | null> | Array<IObj | null>): BundlerTestAppSearchFilter;
}

