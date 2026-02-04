export interface UiSdlConnected<T> {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlConnected;

  readonly id?: string | null;
  withId(id: string | null): UiSdlConnected;

  readonly name?: string | null;
  withName(name: string | null): UiSdlConnected;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlConnected;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlConnected;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlConnected;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlConnected;

  readonly derivedProps?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, any> | null> | null> | null> | null>;
  withDerivedProps(derivedProps: C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, any> | null> | null> | null> | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, any> | null> | null> | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, any> | null> | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null | C3.Map<string | null, UiSdlDynamicValueSpecParam | null | C3.Map<string | null, any> | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null | C3.Map<string | null, any> | {[key: string | null]: any} | null} | null} | null} | null}): UiSdlConnected;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): UiSdlConnected;

  readonly componentRef?: UiSdlComponentRef<T> | null;
  withComponentRef(componentRef: IUiSdlComponentRef<T> | null): UiSdlConnected;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): UiSdlConnected;

  readonly CURRENT?: string | null;
  withCURRENT(CURRENT: string | null): UiSdlConnected;

  readonly INITIAL?: string | null;
  withINITIAL(INITIAL: string | null): UiSdlConnected;

  readonly component: T;
  withComponent(component: T): UiSdlConnected;

  readonly applicationStateRef?: UiSdlApplicationStateRef | null | C3.Array<UiSdlApplicationStateRef | null> | null;
  withApplicationStateRef(applicationStateRef: IUiSdlApplicationStateRef | null | C3.Array<UiSdlApplicationStateRef | null> | Array<IUiSdlApplicationStateRef | null> | null): UiSdlConnected;
}

