export interface UiSdlNavMenuItemHoverOffAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlNavMenuItemHoverOffAction;

  readonly payload?: UiSdlNavMenuItemHoverOffPayload | null;
  withPayload(payload: IUiSdlNavMenuItemHoverOffPayload | null): UiSdlNavMenuItemHoverOffAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlNavMenuItemHoverOffAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlNavMenuItemHoverOffAction;
}

