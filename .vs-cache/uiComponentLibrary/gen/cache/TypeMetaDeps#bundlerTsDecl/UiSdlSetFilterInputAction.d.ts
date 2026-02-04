export interface UiSdlSetFilterInputAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSetFilterInputAction;

  readonly payload?: UiSdlSetFilterInputPayload | null;
  withPayload(payload: IUiSdlSetFilterInputPayload | null): UiSdlSetFilterInputAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSetFilterInputAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSetFilterInputAction;
}

