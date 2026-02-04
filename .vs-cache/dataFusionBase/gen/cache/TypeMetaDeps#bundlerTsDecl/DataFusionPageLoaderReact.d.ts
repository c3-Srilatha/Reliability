export interface DataFusionPageLoaderReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataFusionPageLoaderReact;

  readonly id?: string | null;
  withId(id: string | null): DataFusionPageLoaderReact;

  readonly name?: string | null;
  withName(name: string | null): DataFusionPageLoaderReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): DataFusionPageLoaderReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): DataFusionPageLoaderReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): DataFusionPageLoaderReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): DataFusionPageLoaderReact;

  readonly lineLength?: string | null;
  withLineLength(lineLength: string | null): DataFusionPageLoaderReact;

  readonly placeHolderType?: string | null;
  withPlaceHolderType(placeHolderType: string | null): DataFusionPageLoaderReact;

  readonly imageShape?: string | null;
  withImageShape(imageShape: string | null): DataFusionPageLoaderReact;
}

