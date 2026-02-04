export interface UiSdlDisplayDateUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDisplayDateUpdateAction;

  readonly payload?: UiSdlDisplayDateUpdatePayload | null;
  withPayload(payload: IUiSdlDisplayDateUpdatePayload | null): UiSdlDisplayDateUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDisplayDateUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDisplayDateUpdateAction;
}

