export interface UiSdlTestType {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTestType;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTestType;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTestType;

  readonly dataSpec?: UiSdlTestTypeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlTestTypeDataSpec | null): UiSdlTestType;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTestType;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTestType;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTestType;

  readonly header?: any | null;
  withHeader(header: any | null): UiSdlTestType;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlTestType;

  readonly dataCollection?: number | null;
  withDataCollection(dataCollection: number | null): UiSdlTestType;

  readonly value?: C3.Array<string | null>;
  withValue(value: C3.Array<string | null> | Array<string | null>): UiSdlTestType;
}

