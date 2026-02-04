export interface BundlerTestAppDeepNestedComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppDeepNestedComponentReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppDeepNestedComponentReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppDeepNestedComponentReact;

  readonly dataSpec?: BundlerTestAppFormGridDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppFormGridDataSpec | null): BundlerTestAppDeepNestedComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppDeepNestedComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppDeepNestedComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppDeepNestedComponentReact;

  readonly loadedData?: any;
  withLoadedData(loadedData: any): BundlerTestAppDeepNestedComponentReact;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppDeepNestedComponentReact;
}

