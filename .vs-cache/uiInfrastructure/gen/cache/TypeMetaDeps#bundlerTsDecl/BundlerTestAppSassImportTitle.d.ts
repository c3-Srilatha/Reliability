export interface BundlerTestAppSassImportTitle {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppSassImportTitle;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppSassImportTitle;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppSassImportTitle;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BundlerTestAppSassImportTitle;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppSassImportTitle;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppSassImportTitle;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppSassImportTitle;
}

