export interface UiSdlDataContextReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDataContextReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDataContextReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDataContextReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDataContextReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDataContextReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDataContextReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDataContextReact;

  readonly REDUX_METADATA_NAMESPACE?: string | null;
  withREDUX_METADATA_NAMESPACE(REDUX_METADATA_NAMESPACE: string | null): UiSdlDataContextReact;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): UiSdlDataContextReact;

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlDataContextReact;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlDataContextReact;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDataContextReact;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlDataContextReact;

  readonly c3arguments?: any | null;
  withC3arguments(c3arguments: any | null): UiSdlDataContextReact;

  readonly additionalFilters?: C3.Map<string | null, string | null>;
  withAdditionalFilters(additionalFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDataContextReact;

  readonly edits?: C3.Map<string | null, C3.Array<string | null>>;
  withEdits(edits: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiSdlDataContextReact;

  readonly deletions?: C3.Array<string | null>;
  withDeletions(deletions: C3.Array<string | null> | Array<string | null>): UiSdlDataContextReact;

  readonly additions?: C3.Array<string | null>;
  withAdditions(additions: C3.Array<string | null> | Array<string | null>): UiSdlDataContextReact;

  readonly persistChangeErrors?: C3.Array<string | null>;
  withPersistChangeErrors(persistChangeErrors: C3.Array<string | null> | Array<string | null>): UiSdlDataContextReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDataContextReact;
}

