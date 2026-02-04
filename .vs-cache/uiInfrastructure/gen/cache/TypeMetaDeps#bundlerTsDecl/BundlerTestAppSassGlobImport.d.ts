export interface BundlerTestAppSassGlobImport {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppSassGlobImport;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppSassGlobImport;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppSassGlobImport;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BundlerTestAppSassGlobImport;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppSassGlobImport;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppSassGlobImport;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppSassGlobImport;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppSassGlobImport;
}

