export interface UiSdlArbitraryComponentValueDangerouslySetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlArbitraryComponentValueDangerouslySetAction;

  readonly payload?: UiSdlArbitraryComponentValueDangerouslySetPayload | null;
  withPayload(payload: IUiSdlArbitraryComponentValueDangerouslySetPayload | null): UiSdlArbitraryComponentValueDangerouslySetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlArbitraryComponentValueDangerouslySetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlArbitraryComponentValueDangerouslySetAction;
}

