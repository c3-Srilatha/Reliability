export interface UiSdlColorWheelDataGridConditionalColorSetting {

  readonly color?: string | null;
  withColor(color: string | null): UiSdlColorWheelDataGridConditionalColorSetting;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlColorWheelDataGridConditionalColorSetting;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlColorWheelDataGridConditionalColorSetting;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlColorWheelDataGridConditionalColorSetting;
}

