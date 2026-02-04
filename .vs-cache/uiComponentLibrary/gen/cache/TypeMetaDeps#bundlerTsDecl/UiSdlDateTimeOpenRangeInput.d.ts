export interface UiSdlDateTimeOpenRangeInput {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDateTimeOpenRangeInput;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDateTimeOpenRangeInput;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDateTimeOpenRangeInput;

  readonly dataSpec?: UiSdlDateTimeRangeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDateTimeRangeDataSpec | null): UiSdlDateTimeOpenRangeInput;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDateTimeOpenRangeInput;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDateTimeOpenRangeInput;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDateTimeOpenRangeInput;

  readonly allowKeyboardEdit?: boolean;
  withAllowKeyboardEdit(allowKeyboardEdit: boolean): UiSdlDateTimeOpenRangeInput;

  readonly showTimePicker?: boolean;
  withShowTimePicker(showTimePicker: boolean): UiSdlDateTimeOpenRangeInput;

  readonly timePickerStepMinutes?: number | null;
  withTimePickerStepMinutes(timePickerStepMinutes: number | null): UiSdlDateTimeOpenRangeInput;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlDateTimeOpenRangeInput;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDateTimeOpenRangeInput;

  readonly startLabel?: string | null;
  withStartLabel(startLabel: string | null): UiSdlDateTimeOpenRangeInput;

  readonly endLabel?: string | null;
  withEndLabel(endLabel: string | null): UiSdlDateTimeOpenRangeInput;

  readonly startPlaceholder?: string | null;
  withStartPlaceholder(startPlaceholder: string | null): UiSdlDateTimeOpenRangeInput;

  readonly endPlaceholder?: string | null;
  withEndPlaceholder(endPlaceholder: string | null): UiSdlDateTimeOpenRangeInput;

  readonly endDateInclusive?: boolean;
  withEndDateInclusive(endDateInclusive: boolean): UiSdlDateTimeOpenRangeInput;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlDateTimeOpenRangeInput;

  readonly requiredStart?: boolean;
  withRequiredStart(requiredStart: boolean): UiSdlDateTimeOpenRangeInput;

  readonly requiredEnd?: boolean;
  withRequiredEnd(requiredEnd: boolean): UiSdlDateTimeOpenRangeInput;
}

