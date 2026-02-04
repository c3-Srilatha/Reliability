export interface UiSdlAddonHoverAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAddonHoverAction;

  readonly payload?: UiSdlAddonHoverPayload | null;
  withPayload(payload: IUiSdlAddonHoverPayload | null): UiSdlAddonHoverAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAddonHoverAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAddonHoverAction;
}

