export interface UiSdlDataFilterUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataFilterUpdateAction;

  readonly payload?: UiSdlDataFilterUpdatePayload | null;
  withPayload(payload: IUiSdlDataFilterUpdatePayload | null): UiSdlDataFilterUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataFilterUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataFilterUpdateAction;
}

