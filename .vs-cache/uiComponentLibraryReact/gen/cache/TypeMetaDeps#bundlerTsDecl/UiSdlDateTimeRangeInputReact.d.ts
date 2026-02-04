export interface UiSdlDateTimeRangeInputReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDateTimeRangeInputReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDateTimeRangeInputReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDateTimeRangeInputReact;

  readonly dataSpec?: UiSdlDateTimeRangeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDateTimeRangeDataSpec | null): UiSdlDateTimeRangeInputReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDateTimeRangeInputReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDateTimeRangeInputReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDateTimeRangeInputReact;

  readonly allowKeyboardEdit?: boolean;
  withAllowKeyboardEdit(allowKeyboardEdit: boolean): UiSdlDateTimeRangeInputReact;

  readonly showTimePicker?: boolean;
  withShowTimePicker(showTimePicker: boolean): UiSdlDateTimeRangeInputReact;

  readonly timePickerStepMinutes?: number | null;
  withTimePickerStepMinutes(timePickerStepMinutes: number | null): UiSdlDateTimeRangeInputReact;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlDateTimeRangeInputReact;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDateTimeRangeInputReact;

  readonly startLabel?: string | null;
  withStartLabel(startLabel: string | null): UiSdlDateTimeRangeInputReact;

  readonly endLabel?: string | null;
  withEndLabel(endLabel: string | null): UiSdlDateTimeRangeInputReact;

  readonly startPlaceholder?: string | null;
  withStartPlaceholder(startPlaceholder: string | null): UiSdlDateTimeRangeInputReact;

  readonly endPlaceholder?: string | null;
  withEndPlaceholder(endPlaceholder: string | null): UiSdlDateTimeRangeInputReact;

  readonly endDateInclusive?: boolean;
  withEndDateInclusive(endDateInclusive: boolean): UiSdlDateTimeRangeInputReact;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlDateTimeRangeInputReact;
}

