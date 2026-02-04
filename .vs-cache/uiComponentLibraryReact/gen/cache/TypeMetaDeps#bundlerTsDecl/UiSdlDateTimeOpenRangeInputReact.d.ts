export interface UiSdlDateTimeOpenRangeInputReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDateTimeOpenRangeInputReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDateTimeOpenRangeInputReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDateTimeOpenRangeInputReact;

  readonly dataSpec?: UiSdlDateTimeRangeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDateTimeRangeDataSpec | null): UiSdlDateTimeOpenRangeInputReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDateTimeOpenRangeInputReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDateTimeOpenRangeInputReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDateTimeOpenRangeInputReact;

  readonly allowKeyboardEdit?: boolean;
  withAllowKeyboardEdit(allowKeyboardEdit: boolean): UiSdlDateTimeOpenRangeInputReact;

  readonly showTimePicker?: boolean;
  withShowTimePicker(showTimePicker: boolean): UiSdlDateTimeOpenRangeInputReact;

  readonly timePickerStepMinutes?: number | null;
  withTimePickerStepMinutes(timePickerStepMinutes: number | null): UiSdlDateTimeOpenRangeInputReact;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlDateTimeOpenRangeInputReact;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDateTimeOpenRangeInputReact;

  readonly startLabel?: string | null;
  withStartLabel(startLabel: string | null): UiSdlDateTimeOpenRangeInputReact;

  readonly endLabel?: string | null;
  withEndLabel(endLabel: string | null): UiSdlDateTimeOpenRangeInputReact;

  readonly startPlaceholder?: string | null;
  withStartPlaceholder(startPlaceholder: string | null): UiSdlDateTimeOpenRangeInputReact;

  readonly endPlaceholder?: string | null;
  withEndPlaceholder(endPlaceholder: string | null): UiSdlDateTimeOpenRangeInputReact;

  readonly endDateInclusive?: boolean;
  withEndDateInclusive(endDateInclusive: boolean): UiSdlDateTimeOpenRangeInputReact;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlDateTimeOpenRangeInputReact;

  readonly requiredStart?: boolean;
  withRequiredStart(requiredStart: boolean): UiSdlDateTimeOpenRangeInputReact;

  readonly requiredEnd?: boolean;
  withRequiredEnd(requiredEnd: boolean): UiSdlDateTimeOpenRangeInputReact;
}

