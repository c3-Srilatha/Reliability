export interface UiSdlDateTimeInputFormDataGrid {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDateTimeInputFormDataGrid;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDateTimeInputFormDataGrid;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDateTimeInputFormDataGrid;

  readonly dataSpec?: UiSdlDateTimeRangeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDateTimeRangeDataSpec | null): UiSdlDateTimeInputFormDataGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDateTimeInputFormDataGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDateTimeInputFormDataGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDateTimeInputFormDataGrid;

  readonly allowKeyboardEdit?: boolean;
  withAllowKeyboardEdit(allowKeyboardEdit: boolean): UiSdlDateTimeInputFormDataGrid;

  readonly showTimePicker?: boolean;
  withShowTimePicker(showTimePicker: boolean): UiSdlDateTimeInputFormDataGrid;

  readonly timePickerStepMinutes?: number | null;
  withTimePickerStepMinutes(timePickerStepMinutes: number | null): UiSdlDateTimeInputFormDataGrid;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlDateTimeInputFormDataGrid;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDateTimeInputFormDataGrid;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlDateTimeInputFormDataGrid;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlDateTimeInputFormDataGrid;

  readonly allowInvalidKeyValue?: boolean;
  withAllowInvalidKeyValue(allowInvalidKeyValue: boolean): UiSdlDateTimeInputFormDataGrid;
}

