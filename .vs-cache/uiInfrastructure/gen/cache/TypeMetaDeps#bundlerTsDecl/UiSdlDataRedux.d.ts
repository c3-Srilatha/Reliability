export interface UiSdlDataRedux {

  readonly REDUX_METADATA_NAMESPACE?: string | null;
  withREDUX_METADATA_NAMESPACE(REDUX_METADATA_NAMESPACE: string | null): UiSdlDataRedux;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): UiSdlDataRedux;

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlDataRedux;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlDataRedux;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDataRedux;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlDataRedux;

  readonly c3arguments?: any | null;
  withC3arguments(c3arguments: any | null): UiSdlDataRedux;

  readonly additionalFilters?: C3.Map<string | null, string | null>;
  withAdditionalFilters(additionalFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDataRedux;

  readonly edits?: C3.Map<string | null, C3.Array<string | null>>;
  withEdits(edits: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiSdlDataRedux;

  readonly deletions?: C3.Array<string | null>;
  withDeletions(deletions: C3.Array<string | null> | Array<string | null>): UiSdlDataRedux;

  readonly additions?: C3.Array<string | null>;
  withAdditions(additions: C3.Array<string | null> | Array<string | null>): UiSdlDataRedux;

  readonly persistChangeErrors?: C3.Array<string | null>;
  withPersistChangeErrors(persistChangeErrors: C3.Array<string | null> | Array<string | null>): UiSdlDataRedux;
}

