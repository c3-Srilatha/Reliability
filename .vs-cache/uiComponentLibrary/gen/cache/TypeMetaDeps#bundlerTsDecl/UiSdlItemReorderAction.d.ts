export interface UiSdlItemReorderAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlItemReorderAction;

  readonly payload?: UiSdlItemReorderPayload | null;
  withPayload(payload: IUiSdlItemReorderPayload | null): UiSdlItemReorderAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlItemReorderAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlItemReorderAction;
}

