export interface BundlerTestAppFormGridReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppFormGridReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppFormGridReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppFormGridReact;

  readonly dataSpec?: BundlerTestAppFormGridDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppFormGridDataSpec | null): BundlerTestAppFormGridReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppFormGridReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppFormGridReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppFormGridReact;

  readonly loadedData?: any;
  withLoadedData(loadedData: any): BundlerTestAppFormGridReact;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppFormGridReact;
}

