export interface UiSdlSpecHelperTestType {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSpecHelperTestType;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSpecHelperTestType;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSpecHelperTestType;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlSpecHelperTestType;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSpecHelperTestType;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSpecHelperTestType;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSpecHelperTestType;
}

