export interface UiSdlSecondaryTitleClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSecondaryTitleClickAction;

  readonly payload?: UiSdlSecondaryTitleClickPayload | null;
  withPayload(payload: IUiSdlSecondaryTitleClickPayload | null): UiSdlSecondaryTitleClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSecondaryTitleClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSecondaryTitleClickAction;
}

