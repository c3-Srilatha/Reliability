export interface UiSdlDataLoadChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataLoadChangeAction;

  readonly payload?: UiSdlDataLoadChangePayload | null;
  withPayload(payload: IUiSdlDataLoadChangePayload | null): UiSdlDataLoadChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataLoadChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataLoadChangeAction;
}

