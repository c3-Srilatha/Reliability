export interface UiSdlDateTimeInputFormDataGridReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDateTimeInputFormDataGridReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDateTimeInputFormDataGridReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDateTimeInputFormDataGridReact;

  readonly dataSpec?: UiSdlDateTimeRangeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDateTimeRangeDataSpec | null): UiSdlDateTimeInputFormDataGridReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDateTimeInputFormDataGridReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDateTimeInputFormDataGridReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDateTimeInputFormDataGridReact;

  readonly allowKeyboardEdit?: boolean;
  withAllowKeyboardEdit(allowKeyboardEdit: boolean): UiSdlDateTimeInputFormDataGridReact;

  readonly showTimePicker?: boolean;
  withShowTimePicker(showTimePicker: boolean): UiSdlDateTimeInputFormDataGridReact;

  readonly timePickerStepMinutes?: number | null;
  withTimePickerStepMinutes(timePickerStepMinutes: number | null): UiSdlDateTimeInputFormDataGridReact;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlDateTimeInputFormDataGridReact;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDateTimeInputFormDataGridReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlDateTimeInputFormDataGridReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlDateTimeInputFormDataGridReact;

  readonly allowInvalidKeyValue?: boolean;
  withAllowInvalidKeyValue(allowInvalidKeyValue: boolean): UiSdlDateTimeInputFormDataGridReact;
}

