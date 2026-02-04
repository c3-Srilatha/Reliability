export interface UiSdlItemDropAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlItemDropAction;

  readonly payload?: UiSdlItemDropPayload | null;
  withPayload(payload: IUiSdlItemDropPayload | null): UiSdlItemDropAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlItemDropAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlItemDropAction;
}

