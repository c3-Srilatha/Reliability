export interface UiSdlNumberComparatorReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNumberComparatorReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNumberComparatorReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNumberComparatorReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlNumberComparatorReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNumberComparatorReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNumberComparatorReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNumberComparatorReact;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlNumberComparatorReact;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlNumberComparatorReact;

  readonly step?: number | null;
  withStep(step: number | null): UiSdlNumberComparatorReact;
}

