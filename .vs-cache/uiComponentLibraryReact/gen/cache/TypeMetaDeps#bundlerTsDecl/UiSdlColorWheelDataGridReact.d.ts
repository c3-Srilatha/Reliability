export interface UiSdlColorWheelDataGridReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlColorWheelDataGridReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlColorWheelDataGridReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlColorWheelDataGridReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlColorWheelDataGridReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlColorWheelDataGridReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlColorWheelDataGridReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlColorWheelDataGridReact;

  readonly minValue?: number | null;
  withMinValue(minValue: number | null): UiSdlColorWheelDataGridReact;

  readonly maxValue?: number | null;
  withMaxValue(maxValue: number | null): UiSdlColorWheelDataGridReact;

  readonly valueFormatSpec?: UiSdlNumberParamKindFormatSpec | null;
  withValueFormatSpec(valueFormatSpec: IUiSdlNumberParamKindFormatSpec | null): UiSdlColorWheelDataGridReact;

  readonly colorThresholds?: C3.Array<UiSdlColorWheelDataGridConditionalColorSetting | null>;
  withColorThresholds(colorThresholds: C3.Array<UiSdlColorWheelDataGridConditionalColorSetting | null> | Array<IUiSdlColorWheelDataGridConditionalColorSetting | null>): UiSdlColorWheelDataGridReact;

  readonly fontConfigs?: UiSdlColorWheelDataGridFontSetting | null;
  withFontConfigs(fontConfigs: IUiSdlColorWheelDataGridFontSetting | null): UiSdlColorWheelDataGridReact;

  readonly wheelSize?: string | null;
  withWheelSize(wheelSize: string | null): UiSdlColorWheelDataGridReact;

  readonly valuePosition?: string | null;
  withValuePosition(valuePosition: string | null): UiSdlColorWheelDataGridReact;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlColorWheelDataGridReact;
}

