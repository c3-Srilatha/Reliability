export interface UiSdlSubMenuActionClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSubMenuActionClickAction;

  readonly payload?: UiSdlSubMenuActionClickPayload | null;
  withPayload(payload: IUiSdlSubMenuActionClickPayload | null): UiSdlSubMenuActionClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSubMenuActionClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSubMenuActionClickAction;
}

