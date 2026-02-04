export interface UiSdlDateTimeRangeInput {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDateTimeRangeInput;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDateTimeRangeInput;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDateTimeRangeInput;

  readonly dataSpec?: UiSdlDateTimeRangeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDateTimeRangeDataSpec | null): UiSdlDateTimeRangeInput;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDateTimeRangeInput;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDateTimeRangeInput;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDateTimeRangeInput;

  readonly allowKeyboardEdit?: boolean;
  withAllowKeyboardEdit(allowKeyboardEdit: boolean): UiSdlDateTimeRangeInput;

  readonly showTimePicker?: boolean;
  withShowTimePicker(showTimePicker: boolean): UiSdlDateTimeRangeInput;

  readonly timePickerStepMinutes?: number | null;
  withTimePickerStepMinutes(timePickerStepMinutes: number | null): UiSdlDateTimeRangeInput;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlDateTimeRangeInput;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDateTimeRangeInput;

  readonly startLabel?: string | null;
  withStartLabel(startLabel: string | null): UiSdlDateTimeRangeInput;

  readonly endLabel?: string | null;
  withEndLabel(endLabel: string | null): UiSdlDateTimeRangeInput;

  readonly startPlaceholder?: string | null;
  withStartPlaceholder(startPlaceholder: string | null): UiSdlDateTimeRangeInput;

  readonly endPlaceholder?: string | null;
  withEndPlaceholder(endPlaceholder: string | null): UiSdlDateTimeRangeInput;

  readonly endDateInclusive?: boolean;
  withEndDateInclusive(endDateInclusive: boolean): UiSdlDateTimeRangeInput;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlDateTimeRangeInput;
}

