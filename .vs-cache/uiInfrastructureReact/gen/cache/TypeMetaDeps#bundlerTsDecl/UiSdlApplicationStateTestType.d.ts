export interface UiSdlApplicationStateTestType {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlApplicationStateTestType;

  readonly id?: string | null;
  withId(id: string | null): UiSdlApplicationStateTestType;

  readonly name?: string | null;
  withName(name: string | null): UiSdlApplicationStateTestType;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlApplicationStateTestType;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlApplicationStateTestType;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlApplicationStateTestType;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlApplicationStateTestType;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): UiSdlApplicationStateTestType;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): UiSdlApplicationStateTestType;

  readonly testField?: string | null;
  withTestField(testField: string | null): UiSdlApplicationStateTestType;
}

