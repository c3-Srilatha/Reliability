export interface UiSdlPerformanceMeasurementContextReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPerformanceMeasurementContextReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlPerformanceMeasurementContextReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPerformanceMeasurementContextReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlPerformanceMeasurementContextReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlPerformanceMeasurementContextReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlPerformanceMeasurementContextReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlPerformanceMeasurementContextReact;
}

