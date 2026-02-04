export interface UiSdlDataContext {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDataContext;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDataContext;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDataContext;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDataContext;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDataContext;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDataContext;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDataContext;

  readonly REDUX_METADATA_NAMESPACE?: string | null;
  withREDUX_METADATA_NAMESPACE(REDUX_METADATA_NAMESPACE: string | null): UiSdlDataContext;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): UiSdlDataContext;

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlDataContext;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlDataContext;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDataContext;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlDataContext;

  readonly c3arguments?: any | null;
  withC3arguments(c3arguments: any | null): UiSdlDataContext;

  readonly additionalFilters?: C3.Map<string | null, string | null>;
  withAdditionalFilters(additionalFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDataContext;

  readonly edits?: C3.Map<string | null, C3.Array<string | null>>;
  withEdits(edits: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiSdlDataContext;

  readonly deletions?: C3.Array<string | null>;
  withDeletions(deletions: C3.Array<string | null> | Array<string | null>): UiSdlDataContext;

  readonly additions?: C3.Array<string | null>;
  withAdditions(additions: C3.Array<string | null> | Array<string | null>): UiSdlDataContext;

  readonly persistChangeErrors?: C3.Array<string | null>;
  withPersistChangeErrors(persistChangeErrors: C3.Array<string | null> | Array<string | null>): UiSdlDataContext;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDataContext;
}

