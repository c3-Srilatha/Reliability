export interface BundlerTestAppDeepNestedComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppDeepNestedComponent;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppDeepNestedComponent;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppDeepNestedComponent;

  readonly dataSpec?: BundlerTestAppDeepNestedComponentDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppDeepNestedComponentDataSpec | null): BundlerTestAppDeepNestedComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppDeepNestedComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppDeepNestedComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppDeepNestedComponent;

  readonly loadedData?: any;
  withLoadedData(loadedData: any): BundlerTestAppDeepNestedComponent;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppDeepNestedComponent;
}

