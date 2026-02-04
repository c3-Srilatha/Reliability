export interface UiSdlColorWheelDataGrid {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlColorWheelDataGrid;

  readonly id?: string | null;
  withId(id: string | null): UiSdlColorWheelDataGrid;

  readonly name?: string | null;
  withName(name: string | null): UiSdlColorWheelDataGrid;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlColorWheelDataGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlColorWheelDataGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlColorWheelDataGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlColorWheelDataGrid;

  readonly minValue?: number | null;
  withMinValue(minValue: number | null): UiSdlColorWheelDataGrid;

  readonly maxValue?: number | null;
  withMaxValue(maxValue: number | null): UiSdlColorWheelDataGrid;

  readonly valueFormatSpec?: UiSdlNumberParamKindFormatSpec | null;
  withValueFormatSpec(valueFormatSpec: IUiSdlNumberParamKindFormatSpec | null): UiSdlColorWheelDataGrid;

  readonly colorThresholds?: C3.Array<UiSdlColorWheelDataGridConditionalColorSetting | null>;
  withColorThresholds(colorThresholds: C3.Array<UiSdlColorWheelDataGridConditionalColorSetting | null> | Array<IUiSdlColorWheelDataGridConditionalColorSetting | null>): UiSdlColorWheelDataGrid;

  readonly fontConfigs?: UiSdlColorWheelDataGridFontSetting | null;
  withFontConfigs(fontConfigs: IUiSdlColorWheelDataGridFontSetting | null): UiSdlColorWheelDataGrid;

  readonly wheelSize?: string | null;
  withWheelSize(wheelSize: string | null): UiSdlColorWheelDataGrid;

  readonly valuePosition?: string | null;
  withValuePosition(valuePosition: string | null): UiSdlColorWheelDataGrid;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlColorWheelDataGrid;
}

