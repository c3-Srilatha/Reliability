export interface BundlerAbstractUiComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerAbstractUiComponent;

  readonly id?: string | null;
  withId(id: string | null): BundlerAbstractUiComponent;

  readonly name?: string | null;
  withName(name: string | null): BundlerAbstractUiComponent;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BundlerAbstractUiComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerAbstractUiComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerAbstractUiComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerAbstractUiComponent;
}

