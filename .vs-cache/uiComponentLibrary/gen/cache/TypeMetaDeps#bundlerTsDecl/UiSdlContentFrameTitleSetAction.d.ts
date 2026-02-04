export interface UiSdlContentFrameTitleSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlContentFrameTitleSetAction;

  readonly payload?: UiSdlContentFrameTitleSetPayload | null;
  withPayload(payload: IUiSdlContentFrameTitleSetPayload | null): UiSdlContentFrameTitleSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlContentFrameTitleSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlContentFrameTitleSetAction;
}

