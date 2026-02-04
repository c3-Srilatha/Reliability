export interface UiSdlHiddenAddonUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlHiddenAddonUpdateAction;

  readonly payload?: UiSdlHiddenAddonUpdatePayload | null;
  withPayload(payload: IUiSdlHiddenAddonUpdatePayload | null): UiSdlHiddenAddonUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlHiddenAddonUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlHiddenAddonUpdateAction;
}

