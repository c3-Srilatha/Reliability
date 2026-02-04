export interface UiSdlPerformanceMeasurementContext {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPerformanceMeasurementContext;

  readonly id?: string | null;
  withId(id: string | null): UiSdlPerformanceMeasurementContext;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPerformanceMeasurementContext;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlPerformanceMeasurementContext;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlPerformanceMeasurementContext;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlPerformanceMeasurementContext;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlPerformanceMeasurementContext;
}

