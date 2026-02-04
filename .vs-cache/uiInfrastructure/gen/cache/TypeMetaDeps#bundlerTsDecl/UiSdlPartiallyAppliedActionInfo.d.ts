export interface UiSdlPartiallyAppliedActionInfo {

  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlPartiallyAppliedActionInfo;

  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlPartiallyAppliedActionInfo;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlPartiallyAppliedActionInfo;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlPartiallyAppliedActionInfo;

  readonly actionId?: string | null;
  withActionId(actionId: string | null): UiSdlPartiallyAppliedActionInfo;

  readonly partiallyAppliedAction: PartiallyAppliedAction;
  withPartiallyAppliedAction(partiallyAppliedAction: IPartiallyAppliedAction): UiSdlPartiallyAppliedActionInfo;
}

