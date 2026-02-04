export interface UiSdlChangeInputAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlChangeInputAction;

  readonly payload?: UiSdlChangeInputPayload | null;
  withPayload(payload: IUiSdlChangeInputPayload | null): UiSdlChangeInputAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlChangeInputAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlChangeInputAction;
}

