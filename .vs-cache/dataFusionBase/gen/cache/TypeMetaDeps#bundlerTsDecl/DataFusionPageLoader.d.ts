export interface DataFusionPageLoader {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataFusionPageLoader;

  readonly id?: string | null;
  withId(id: string | null): DataFusionPageLoader;

  readonly name?: string | null;
  withName(name: string | null): DataFusionPageLoader;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): DataFusionPageLoader;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): DataFusionPageLoader;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): DataFusionPageLoader;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): DataFusionPageLoader;

  readonly lineLength?: string | null;
  withLineLength(lineLength: string | null): DataFusionPageLoader;

  readonly placeHolderType?: string | null;
  withPlaceHolderType(placeHolderType: string | null): DataFusionPageLoader;

  readonly imageShape?: string | null;
  withImageShape(imageShape: string | null): DataFusionPageLoader;
}

