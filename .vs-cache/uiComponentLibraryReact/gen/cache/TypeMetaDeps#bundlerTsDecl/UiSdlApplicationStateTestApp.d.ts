export interface UiSdlApplicationStateTestApp {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlApplicationStateTestApp;

  readonly id?: string | null;
  withId(id: string | null): UiSdlApplicationStateTestApp;

  readonly name?: string | null;
  withName(name: string | null): UiSdlApplicationStateTestApp;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlApplicationStateTestApp;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlApplicationStateTestApp;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlApplicationStateTestApp;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlApplicationStateTestApp;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): UiSdlApplicationStateTestApp;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): UiSdlApplicationStateTestApp;

  readonly totalCount?: number | null;
  withTotalCount(totalCount: number | null): UiSdlApplicationStateTestApp;

  readonly buttonClickCountById?: C3.Map<string | null, number | null>;
  withButtonClickCountById(buttonClickCountById: C3.Map<string | null, number | null> | {[key: string | null]: number | null}): UiSdlApplicationStateTestApp;
}

