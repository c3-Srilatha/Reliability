export interface UiSdlSpecHelperTestTypeChild {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSpecHelperTestTypeChild;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSpecHelperTestTypeChild;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSpecHelperTestTypeChild;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlSpecHelperTestTypeChild;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSpecHelperTestTypeChild;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSpecHelperTestTypeChild;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSpecHelperTestTypeChild;
}

