export interface BundlerTestAppSassGlobImportReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppSassGlobImportReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppSassGlobImportReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppSassGlobImportReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BundlerTestAppSassGlobImportReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppSassGlobImportReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppSassGlobImportReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppSassGlobImportReact;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppSassGlobImportReact;
}

