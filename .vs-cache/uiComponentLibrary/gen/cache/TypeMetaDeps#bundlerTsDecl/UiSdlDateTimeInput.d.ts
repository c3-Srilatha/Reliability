export interface UiSdlDateTimeInput {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDateTimeInput;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDateTimeInput;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDateTimeInput;

  readonly dataSpec?: UiSdlDateTimeRangeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDateTimeRangeDataSpec | null): UiSdlDateTimeInput;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDateTimeInput;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDateTimeInput;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDateTimeInput;

  readonly allowKeyboardEdit?: boolean;
  withAllowKeyboardEdit(allowKeyboardEdit: boolean): UiSdlDateTimeInput;

  readonly showTimePicker?: boolean;
  withShowTimePicker(showTimePicker: boolean): UiSdlDateTimeInput;

  readonly timePickerStepMinutes?: number | null;
  withTimePickerStepMinutes(timePickerStepMinutes: number | null): UiSdlDateTimeInput;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlDateTimeInput;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDateTimeInput;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlDateTimeInput;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlDateTimeInput;

  readonly allowInvalidKeyValue?: boolean;
  withAllowInvalidKeyValue(allowInvalidKeyValue: boolean): UiSdlDateTimeInput;
}

