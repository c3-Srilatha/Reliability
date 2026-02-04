export interface UiSdlInputBase<DataType> {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlInputBase;

  readonly id?: string | null;
  withId(id: string | null): UiSdlInputBase;

  readonly name?: string | null;
  withName(name: string | null): UiSdlInputBase;

  readonly dataSpec?: DataType | null;
  withDataSpec(dataSpec: DataType | null): UiSdlInputBase;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlInputBase;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlInputBase;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlInputBase;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlInputBase;

  readonly value?: any;
  withValue(value: any): UiSdlInputBase;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlInputBase;
}

