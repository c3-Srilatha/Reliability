export interface UiSdlSidePanelUpdateCloseBehaviorAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSidePanelUpdateCloseBehaviorAction;

  readonly payload?: UiSdlSidePanelUpdateCloseBehaviorPayload | null;
  withPayload(payload: IUiSdlSidePanelUpdateCloseBehaviorPayload | null): UiSdlSidePanelUpdateCloseBehaviorAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSidePanelUpdateCloseBehaviorAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSidePanelUpdateCloseBehaviorAction;
}

