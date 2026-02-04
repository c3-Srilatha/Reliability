export interface UiSdlTableActionLoadingSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTableActionLoadingSetAction;

  readonly payload?: UiSdlTableActionLoadingSetPayload | null;
  withPayload(payload: IUiSdlTableActionLoadingSetPayload | null): UiSdlTableActionLoadingSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTableActionLoadingSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTableActionLoadingSetAction;
}

