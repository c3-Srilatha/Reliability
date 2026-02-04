export interface UiSdlDateTimeInputBase {

  readonly allowKeyboardEdit?: boolean;
  withAllowKeyboardEdit(allowKeyboardEdit: boolean): UiSdlDateTimeInputBase;

  readonly showTimePicker?: boolean;
  withShowTimePicker(showTimePicker: boolean): UiSdlDateTimeInputBase;

  readonly timePickerStepMinutes?: number | null;
  withTimePickerStepMinutes(timePickerStepMinutes: number | null): UiSdlDateTimeInputBase;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlDateTimeInputBase;
}

