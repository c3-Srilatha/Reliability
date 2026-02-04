export interface UiSdlNumberComparator {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNumberComparator;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNumberComparator;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNumberComparator;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlNumberComparator;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNumberComparator;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNumberComparator;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNumberComparator;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlNumberComparator;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlNumberComparator;

  readonly step?: number | null;
  withStep(step: number | null): UiSdlNumberComparator;
}

