export interface UiSdlMetricTile {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMetricTile;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMetricTile;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMetricTile;

  readonly dataSpec?: UiSdlMetricTileDataSpec | null;
  withDataSpec(dataSpec: IUiSdlMetricTileDataSpec | null): UiSdlMetricTile;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMetricTile;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMetricTile;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMetricTile;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlMetricTile;

  readonly showTimeZoneLabel?: boolean;
  withShowTimeZoneLabel(showTimeZoneLabel: boolean): UiSdlMetricTile;

  readonly timeZoneLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withTimeZoneLabel(timeZoneLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMetricTile;

  readonly timeZoneNameFormat?: string | null;
  withTimeZoneNameFormat(timeZoneNameFormat: string | null): UiSdlMetricTile;

  readonly header?: UiSdlMetricTileHeader | null;
  withHeader(header: IUiSdlMetricTileHeader | null): UiSdlMetricTile;

  readonly showSparkline?: boolean;
  withShowSparkline(showSparkline: boolean): UiSdlMetricTile;

  readonly hideLegend?: boolean;
  withHideLegend(hideLegend: boolean): UiSdlMetricTile;

  readonly hideTimeHorizonLabel?: boolean;
  withHideTimeHorizonLabel(hideTimeHorizonLabel: boolean): UiSdlMetricTile;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlMetricTile;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlMetricTile;

  readonly dataCollection?: UiSdlMetricTileDataCollection | null;
  withDataCollection(dataCollection: IUiSdlMetricTileDataCollection | null): UiSdlMetricTile;

  readonly evalDataSpec?: UiSdlMetricTileEvalDataSpec | null;
  withEvalDataSpec(evalDataSpec: IUiSdlMetricTileEvalDataSpec | null): UiSdlMetricTile;

  readonly isTooltipSticky?: boolean;
  withIsTooltipSticky(isTooltipSticky: boolean): UiSdlMetricTile;

  readonly tooltipPositionBias?: string | null;
  withTooltipPositionBias(tooltipPositionBias: string | null): UiSdlMetricTile;

  readonly hideMissing?: boolean;
  withHideMissing(hideMissing: boolean): UiSdlMetricTile;

  readonly missingValueHolderValue?: number | null;
  withMissingValueHolderValue(missingValueHolderValue: number | null): UiSdlMetricTile;

  readonly displayTooltipTitleInterval?: string | null;
  withDisplayTooltipTitleInterval(displayTooltipTitleInterval: string | null): UiSdlMetricTile;
}

