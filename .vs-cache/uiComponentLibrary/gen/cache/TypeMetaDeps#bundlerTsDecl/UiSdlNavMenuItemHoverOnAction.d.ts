export interface UiSdlNavMenuItemHoverOnAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlNavMenuItemHoverOnAction;

  readonly payload?: UiSdlNavMenuItemHoverOnPayload | null;
  withPayload(payload: IUiSdlNavMenuItemHoverOnPayload | null): UiSdlNavMenuItemHoverOnAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlNavMenuItemHoverOnAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlNavMenuItemHoverOnAction;
}

