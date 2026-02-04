export interface UiSdlMetricTileReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMetricTileReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMetricTileReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMetricTileReact;

  readonly dataSpec?: UiSdlMetricTileDataSpec | null;
  withDataSpec(dataSpec: IUiSdlMetricTileDataSpec | null): UiSdlMetricTileReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMetricTileReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMetricTileReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMetricTileReact;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlMetricTileReact;

  readonly showTimeZoneLabel?: boolean;
  withShowTimeZoneLabel(showTimeZoneLabel: boolean): UiSdlMetricTileReact;

  readonly timeZoneLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withTimeZoneLabel(timeZoneLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMetricTileReact;

  readonly timeZoneNameFormat?: string | null;
  withTimeZoneNameFormat(timeZoneNameFormat: string | null): UiSdlMetricTileReact;

  readonly header?: UiSdlMetricTileHeader | null;
  withHeader(header: IUiSdlMetricTileHeader | null): UiSdlMetricTileReact;

  readonly showSparkline?: boolean;
  withShowSparkline(showSparkline: boolean): UiSdlMetricTileReact;

  readonly hideLegend?: boolean;
  withHideLegend(hideLegend: boolean): UiSdlMetricTileReact;

  readonly hideTimeHorizonLabel?: boolean;
  withHideTimeHorizonLabel(hideTimeHorizonLabel: boolean): UiSdlMetricTileReact;

  readonly noTimeZoneConversion?: boolean;
  withNoTimeZoneConversion(noTimeZoneConversion: boolean): UiSdlMetricTileReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlMetricTileReact;

  readonly dataCollection?: UiSdlMetricTileDataCollection | null;
  withDataCollection(dataCollection: IUiSdlMetricTileDataCollection | null): UiSdlMetricTileReact;

  readonly evalDataSpec?: UiSdlMetricTileEvalDataSpec | null;
  withEvalDataSpec(evalDataSpec: IUiSdlMetricTileEvalDataSpec | null): UiSdlMetricTileReact;

  readonly isTooltipSticky?: boolean;
  withIsTooltipSticky(isTooltipSticky: boolean): UiSdlMetricTileReact;

  readonly tooltipPositionBias?: string | null;
  withTooltipPositionBias(tooltipPositionBias: string | null): UiSdlMetricTileReact;

  readonly hideMissing?: boolean;
  withHideMissing(hideMissing: boolean): UiSdlMetricTileReact;

  readonly missingValueHolderValue?: number | null;
  withMissingValueHolderValue(missingValueHolderValue: number | null): UiSdlMetricTileReact;

  readonly displayTooltipTitleInterval?: string | null;
  withDisplayTooltipTitleInterval(displayTooltipTitleInterval: string | null): UiSdlMetricTileReact;
}

