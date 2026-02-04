export interface UiSdlDateTimeInputReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDateTimeInputReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDateTimeInputReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDateTimeInputReact;

  readonly dataSpec?: UiSdlDateTimeRangeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDateTimeRangeDataSpec | null): UiSdlDateTimeInputReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDateTimeInputReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDateTimeInputReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDateTimeInputReact;

  readonly allowKeyboardEdit?: boolean;
  withAllowKeyboardEdit(allowKeyboardEdit: boolean): UiSdlDateTimeInputReact;

  readonly showTimePicker?: boolean;
  withShowTimePicker(showTimePicker: boolean): UiSdlDateTimeInputReact;

  readonly timePickerStepMinutes?: number | null;
  withTimePickerStepMinutes(timePickerStepMinutes: number | null): UiSdlDateTimeInputReact;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlDateTimeInputReact;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDateTimeInputReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlDateTimeInputReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlDateTimeInputReact;

  readonly allowInvalidKeyValue?: boolean;
  withAllowInvalidKeyValue(allowInvalidKeyValue: boolean): UiSdlDateTimeInputReact;
}

